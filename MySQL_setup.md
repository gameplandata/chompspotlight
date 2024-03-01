# Steps to get MySQL working on your local environment.
1. Accept the email invite to the Google Cloud Platform
2. Click on console on the top right
3. Select the 'Chommp Spotlight' project on the top left drop down
4. Then click on the navigation menu on the left by clicking the three bar symbol
5. Click on SQL
6. Click on chomp-spotlight
7. This opens the dashboard to configure the database
8. Click on connections on the left side
9. Click on the networking tab
10. Under authorized networks add your IP address, this whitelists your IP address so you can connect to the database.
11. Save and exit.
12. Download a SQL GUI program, something that will allow you to connect to a SQL database and view its tables. For this example I use MySQL Workbench which can be downloaded here: https://www.mysql.com/fr/products/workbench/
13. Open the program and under the 'Database' tab, click on 'Connect to database' and fill in the host IP address and user credentials. The host IP can be found on the SQL dashboard on google under the field that shows the public IP address. Leave the port as is.
Ask Kevin for credentials for an existing user or make your own user by going to the SQL dashboard on google, clicking on 'Users' and then clicking on 'Add User Account'.
14. After filling out the fields, click Ok and the MySql workbench should be able to connect to the database, if not make sure your IP is whitelisted on the dashboard that steps 8-11 cover.
15. Once connected the database you should be able to access the different tables and send commands. This program is just useful if you want to view or modify the database for development purposes.
16. Next we will be setting up this project to connect to the database. We will be using an environment variables file that will store the hostname and user credentials in a file that will only stay on our local machines and not be pushed to Github, this is so we don't
expose our user credentials to connect to the database to the public.
17. To utilize this environment variables file we will be using a npm package called 'dotenv', I have already added this to the package.json file in this branch so you may just run `npm install` and it should install, if not you can install it by running `npm install dotenv`
18. Next, create a file in the backend folder named `.env` in this file you should write the following lines:
```
DB_HOST=<host IP>
DB_USER=<username>
DB_PASSWORD=<password>
DB_DATABASE=<database name>
```
19. Replace the <> with the same things you used earlier in step 13. If you don't want to create a new account and want to use an existing account, ask Kevin for credentials. DB_DATABASE is the name of the database, I created one called 'devs' that this example runs off of, 
we will probably create and use another database name for our actual project. So for right now, to run this example, just set `DB_DATABASE=devs`.
20. Look at the server.js file to see how the .env file and dotenv package is used.
21. That should be it, everything should be ready to go. Run the client and server and navigate to localhost:3000/page1. Click 'Get Developers' to fetch all the developer names and email addresses. This is an example of a get request.
22. Add a developer to the database by filling out the two fields and clicking 'Add Developer', this is a post method that calls the backend which then the backend sends a command to the SQL database to insert into the database. Click 'Get Developers' to make sure they were added.
23. I highly recommend looking at the page1.js files in both the client and server and understand how they work and the flow of data, we will basically be using the same structure for this project.
