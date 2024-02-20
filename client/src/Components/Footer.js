import React from 'react';

const Footer = () => {
    return (
        <div className="bottom-0">
            <footer className="bg-slate-100 w-full h-[10vh] absolute bottom-0 flex items-center justify-center" >
                <p className="px-[2%]">&copy; 2024 Chomp Spotlight</p>
                <p className="px-[2%]">Privacy Policy</p>
                <p className="px-[2%]">Terms of Service</p>
            </footer>
        </div>
    );
};

const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
};

export default Footer;