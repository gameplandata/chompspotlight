import React from 'react';
import { useState } from 'react';


const Footer = () => {

    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            {showModal ? (
                <div className="fixed inset-0 z-50 flex justify-center items-center p-4">
                    <div className="bg-white p-4 rounded-lg max-w-[95%] max-h-[95%] overflow-auto shadow-xl relative flex flex-col items-center">
                        <h1 className="text-2xl font-semibold">Privacy Policy</h1>
                        <body className='text-xl text-left'>
                            <p>Effective Date: 4/4/24</p>
                            <p>Thank you for choosing Chomp Spotlight ("Chomp Spotlight", "we", "us", "our"). We are committed to protecting your privacy and providing you with a safe and secure experience while using our social media recruiting website. This Privacy Policy outlines the types of personal information we collect, how we use it, and the choices you have concerning your information.</p>

                            <h2>Information We Collect</h2>
                            <ol>
                                <li><strong>Personal Information:</strong> When you create an account or interact with our website, we may collect personal information such as your name, email address, phone number, and any other information you choose to provide.</li>
                                <li><strong>Usage Information:</strong> We may automatically collect certain information about your device and how you interact with our website, including your IP address, browser type, operating system, and browsing activity.</li>
                                <li><strong>Social Media Information:</strong> If you choose to connect your social media accounts to our website, we may collect information from those accounts, such as your profile information and social connections.</li>
                            </ol>

                            <h2>How We Use Your Information</h2>
                            <ol>
                                <li><strong>To Provide Services:</strong> We use your personal information to create and manage your account, facilitate communication between users, and provide our recruiting services.</li>
                                <li><strong>To Improve Our Website:</strong> We may analyze usage data to improve our website, develop new features, and enhance user experience.</li>
                                <li><strong>To Communicate With You:</strong> We may send you administrative messages, updates about our services, and marketing communications based on your preferences.</li>
                                <li><strong>To Comply With Legal Obligations:</strong> We may process your information to comply with applicable laws, regulations, or legal processes.</li>
                            </ol>

                            <h2>Information Sharing</h2>
                            <p>We may share your personal information with third parties in the following circumstances:</p>
                            <ol>
                                <li><strong>Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our website, conducting business, or servicing you.</li>
                                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</li>
                                <li><strong>Legal Compliance:</strong> We may disclose your information if required by law or in response to valid legal requests, such as subpoenas or court orders.</li>
                            </ol>

                            <h2>Your Choices</h2>
                            <ol>
                                <li><strong>Account Settings:</strong> You can review and update your account information at any time by logging into your account settings.</li>
                                <li><strong>Marketing Preferences:</strong> You can opt-out of receiving marketing communications from us by following the unsubscribe instructions included in each communication or by contacting us directly.</li>
                                <li><strong>Cookies:</strong> You can set your browser to refuse all or some browser cookies or to alert you when websites set or access cookies. However, if you disable or refuse cookies, please note that some parts of our website may become inaccessible or not function properly.</li>
                            </ol>

                            <h2>Data Security</h2>
                            <p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>

                            <h2>Changes to This Privacy Policy</h2>
                            <p>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised policy on our website.</p>

                            <h2>Contact Us</h2>
                            <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at chompspotlight@gmail.com.</p>

                            <p>By using our website, you consent to the collection and use of your information as described in this Privacy Policy.</p>
                        </body>
                        <button className="mt-4 text-xl border-black border-2 px-2 py-1 rounded-md cursor-pointer" onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            ) : null}

            <footer className="bg-slate-100 w-full h-[10vh] absolute left-0 bottom-0 flex items-center justify-center text-base" >
                <p className="px-[2%]">&copy; 2024 Chomp Spotlight</p>
                <p className="px-[2%] cursor-pointer hover:text-blue-500 hover:underline" onClick={() => setShowModal(true)}> Privacy Policy</p>
                <p className="px-[2%]">Terms of Service</p>
            </footer>
        </>
    );
};

const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
};

export default Footer;