const express = require('express');
const db = require('../database');
const levenshtein = require('js-levenshtein');

const router = express.Router();

// Get method to query the users 
router.post('/', async (req, res) => {
    const safePattern = new RegExp("^[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ \\-']+$");
    console.log(req.body);
    const searchText = req.body.value;
    if (!safePattern.test(searchText) || !searchText) {
        res.json([]);
        return;
    }
    
    console.log("Querying database");
    try {
        console.log(searchText);
        var fullName = searchText.split(" ");
        console.log(fullName);
        var firstName = fullName[0];
        if (fullName.length == 1) {
            const rows = await db.query('select Users.UserID as UserID, Users.UserName as UserName, Users.FirstName as FirstName, Users.LastName as LastName, Users.DefaultProfilePic as DefaultProfilePic, Sports.sport as Sport from Users INNER JOIN Sports on Users.UserID=Sports.userID where FirstName LIKE \'%' + firstName + '%\' or LastName LIKE \'%' + firstName + '%\' ORDER BY UserID ASC');
            const aggregatedData = {};

            // Iterate over the query result and aggregate the data
            rows.forEach(row => {
                const { UserID, UserName, FirstName, LastName, DefaultProfilePic, Sport } = row;
                if (!aggregatedData[UserID]) {
                    aggregatedData[UserID] = {
                        UserID: UserID,
                        UserName: UserName,
                        FirstName: FirstName,
                        LastName: LastName,
                        DefaultProfilePic: DefaultProfilePic,
                        Sports: [Sport.toLowerCase()]
                    };
                } else {
                    aggregatedData[UserID].Sports.push(Sport.toLowerCase());
                }
            });

            // Convert the aggregated object into an array of objects
            const resultArray = Object.values(aggregatedData);

            const sorted = resultArray.sort((a, b) => {
                const distA = levenshtein(a.FirstName.toLowerCase(), firstName.toLowerCase()) + levenshtein(a.LastName.toLowerCase(), firstName.toLowerCase());
                const distB = levenshtein(b.FirstName.toLowerCase(), firstName.toLowerCase()) + levenshtein(b.LastName.toLowerCase(), firstName.toLowerCase());
                return distA - distB;
            });

            console.log(sorted);
            res.json(sorted);
        } else if (fullName.length > 1) {
            var lastName = fullName[1];
            const rows = await db.query('select Users.UserID as UserID, Users.UserName as UserName, Users.FirstName as FirstName, Users.LastName as LastName, Users.DefaultProfilePic as DefaultProfilePic, Sports.sport as Sport from Users INNER JOIN Sports on Users.UserID=Sports.userID where FirstName LIKE "%' + firstName + '%" and LastName LIKE "%' + lastName + '%" ORDER BY UserID ASC');
            const aggregatedData = {};

            // Iterate over the query result and aggregate the data
            rows.forEach(row => {
                const { UserID, UserName, FirstName, LastName, DefaultProfilePic, Sport } = row;
                if (!aggregatedData[UserID]) {
                    aggregatedData[UserID] = {
                        UserID: UserID,
                        UserName: UserName,
                        FirstName: FirstName,
                        LastName: LastName,
                        DefaultProfilePic: DefaultProfilePic,
                        Sports: [Sport.toLowerCase()]
                    };
                } else {
                    aggregatedData[UserID].Sports.push(Sport.toLowerCase());
                }
            });

            // Convert the aggregated object into an array of objects
            const resultArray = Object.values(aggregatedData);

            const sorted = resultArray.sort((a, b) => {
                const distA = levenshtein(a.FirstName.toLowerCase(), firstName.toLowerCase()) + levenshtein(a.LastName.toLowerCase(), lastName.toLowerCase());
                const distB = levenshtein(b.FirstName.toLowerCase(), firstName.toLowerCase()) + levenshtein(b.LastName.toLowerCase(), lastName.toLowerCase());
                return distA - distB;
            });

            console.log(sorted);
            res.json(sorted);
        } else {
            res.status(500).send('Input validation error');
        }
    } catch (err) {
        console.error('Database query error:', err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
