import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-neutral-950">
            <Navbar />
            <div className="container mx-auto px-4 py-32 md:px-6">
                <div className="mx-auto max-w-3xl">
                    <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl text-black dark:text-white">Privacy Policy</h1>
                    <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-neutral-600 dark:text-neutral-400">
                        <p>Last updated: January 14, 2026</p>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">1. Introduction</h2>
                            <p>
                                Welcome to The Green Candle. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with our platform.
                            </p>
                            <p>
                                By using The Green Candle, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">2. Information We Collect</h2>
                            <h3 className="text-xl font-semibold text-black dark:text-white">2.1 Personal Information</h3>
                            <p>
                                We collect personal information that you provide to us, including:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Name, email address, and contact information</li>
                                <li>Account credentials (username, password)</li>
                                <li>Payment information (processed securely through third-party providers)</li>
                                <li>Profile information and preferences</li>
                                <li>Communication history with our support team</li>
                            </ul>
                            
                            <h3 className="text-xl font-semibold text-black dark:text-white">2.2 Usage Information</h3>
                            <p>
                                We automatically collect certain information about your use of our services:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Device information (IP address, browser type, operating system)</li>
                                <li>Usage data (pages visited, features used, time spent)</li>
                                <li>Location data (approximate location based on IP address)</li>
                                <li>Cookies and similar tracking technologies</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-black dark:text-white">2.3 Trading and Financial Data</h3>
                            <p>
                                For our trading services, we may collect:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Trading preferences and strategies</li>
                                <li>Portfolio information and performance data</li>
                                <li>Transaction history (anonymized for analytics)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">3. How We Use Your Information</h2>
                            <p>
                                We use the information we collect for the following purposes:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>To provide and maintain our trading services</li>
                                <li>To process transactions and manage subscriptions</li>
                                <li>To communicate with you about your account and our services</li>
                                <li>To improve our platform and develop new features</li>
                                <li>To ensure security and prevent fraud</li>
                                <li>To comply with legal obligations</li>
                                <li>To send marketing communications (with your consent)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">4. Information Sharing and Disclosure</h2>
                            <p>
                                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:
                            </p>
                            <ul className="list-disc pl-6">
                                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our platform</li>
                                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety</li>
                                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                                <li><strong>With Your Consent:</strong> We may share information with your explicit permission</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">5. Cookies and Tracking Technologies</h2>
                            <p>
                                We use cookies and similar technologies to enhance your experience on our platform:
                            </p>
                            <ul className="list-disc pl-6">
                                <li><strong>Essential Cookies:</strong> Required for basic platform functionality</li>
                                <li><strong>Analytics Cookies:</strong> Help us understand how you use our services</li>
                                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                            </ul>
                            <p>
                                You can control cookie settings through your browser preferences. However, disabling certain cookies may affect platform functionality.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">6. Data Security</h2>
                            <p>
                                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Encryption of data in transit and at rest</li>
                                <li>Regular security audits and updates</li>
                                <li>Access controls and authentication procedures</li>
                                <li>Secure payment processing through certified providers</li>
                            </ul>
                            <p>
                                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">7. Data Retention</h2>
                            <p>
                                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy, unless a longer retention period is required by law. When we no longer need your information, we will securely delete or anonymize it.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">8. Your Rights and Choices</h2>
                            <p>
                                Depending on your location, you may have the following rights regarding your personal information:
                            </p>
                            <ul className="list-disc pl-6">
                                <li><strong>Access:</strong> Request a copy of your personal information</li>
                                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                                <li><strong>Restriction:</strong> Request limitation of processing in certain circumstances</li>
                            </ul>
                            <p>
                                To exercise these rights, please contact us using the information provided below.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">9. Third-Party Services</h2>
                            <p>
                                Our platform may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these external parties. We encourage you to review their privacy policies before providing any personal information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">10. Children&apos;s Privacy</h2>
                            <p>
                                Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">11. International Data Transfers</h2>
                            <p>
                                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">12. Changes to This Privacy Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this policy periodically.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">13. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy or our data practices, please contact us:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Vasundhra Infrasol</li>
                                <li>Phone: 9713101521</li>
                                <li>Email: thegreencandle30@gmail.com</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
