import React from 'react';
import { useState } from 'react';


const Footer = () => {

    const [showPrivacyPolicy, setPrivacyPolicy] = React.useState(false);
    const [showTermsOfService, setTermsOfService] = React.useState(false);

    return (
        <>
            {showPrivacyPolicy ? (
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
                        <button className="mt-4 text-xl border-black border-2 px-2 py-1 rounded-md cursor-pointer" onClick={() => setPrivacyPolicy(false)}>Close</button>
                    </div>
                </div>
            ) : null}
            {showTermsOfService ? (
                <div className="fixed inset-0 z-50 flex justify-center items-center p-4">
                    <div className="bg-white p-4 rounded-lg max-w-[95%] max-h-[95%] overflow-auto shadow-xl relative flex flex-col items-center">
                        <h1 className="text-2xl font-semibold">Terms Of Service</h1>
                        <body className='text-xl text-left'>
                            <h1>Terms of Service for Chomp Spotlight Social Media Recruiting Website</h1>
                            <p>Effective Date: 4/4/24</p>
                            <p>Welcome to Chomp Spotlight ("Chomp Spotlight", "we", "us", "our"). By accessing or using our social media recruiting website, you agree to comply with and be bound by these Terms of Service. Please read these terms carefully before using our website.</p>

                            <h2>1. Use of Our Website</h2>
                            <p>You must be at least 18 years old to use our website. By using our website, you represent and warrant that you are at least 18 years old.</p>

                            <h2>2. User Accounts</h2>
                            <p>You may be required to create an account to access certain features of our website. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>

                            <h2>3. User Content</h2>
                            <p>By posting, uploading, or submitting any content on our website, you grant Chomp Spotlight a non-exclusive, transferable, sublicensable, royalty-free, worldwide license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content.</p>

                            <h2>4. Prohibited Activities</h2>
                            <p>You agree not to engage in any of the following prohibited activities:
                                <ul>
                                    <li>Violating any laws or regulations.</li>
                                    <li>Interfering with or disrupting our website or servers.</li>
                                    <li>Impersonating another person or entity.</li>
                                    <li>Harassing, intimidating, or threatening other users.</li>
                                    <li>Posting or transmitting unauthorized commercial communications.</li>
                                    <li>Uploading viruses or other malicious code.</li>
                                </ul>
                            </p>

                            <h2>5. Intellectual Property</h2>
                            <p>All content and materials available on our website, including but not limited to text, graphics, logos, button icons, images, audio clips, and software, are the property of Chomp Spotlight or its licensors and are protected by United States and international copyright, trademark, and other intellectual property laws.</p>

                            <h2>6. Limitation of Liability</h2>
                            <p>In no event shall Chomp Spotlight or its affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or in connection with your use of our website.</p>

                            <h2>7. Governing Law</h2>
                            <p>These Terms of Service shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law principles.</p>

                            <h2>8. Changes to These Terms</h2>
                            <p>We reserve the right to update or modify these Terms of Service at any time without prior notice. Your continued use of our website after any changes indicates your acceptance of the updated terms.</p>

                            <h2>9. Contact Us</h2>
                            <p>If you have any questions or concerns about these Terms of Service, please contact us at chompspotlight@gmail.com.</p>

                            <p>By using our website, you agree to these Terms of Service.</p>
                        </body>
                        <button className="mt-4 text-xl border-black border-2 px-2 py-1 rounded-md cursor-pointer" onClick={() => setTermsOfService(false)}>Close</button>
                    </div>
                </div>
            ) : null}

            <footer className="bg-slate-100 w-full h-[10vh] absolute left-0 bottom-0 flex items-center justify-center text-base" >
                <p className="px-[2%]">&copy; 2024 Chomp Spotlight</p>
                <p className="px-[2%] cursor-pointer hover:text-blue-500 hover:underline" onClick={() => setPrivacyPolicy(true)}> Privacy Policy</p>
                <p className="px-[2%] cursor-pointer hover:text-blue-500 hover:underline" onClick={() => setTermsOfService(true)}>Terms of Service</p>
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