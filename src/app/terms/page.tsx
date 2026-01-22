import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-neutral-950">
            <Navbar />
            <div className="container mx-auto px-4 py-32 md:px-6">
                <div className="mx-auto max-w-3xl">
                    <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl text-black dark:text-white">Terms & Conditions</h1>
                    <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-neutral-600 dark:text-neutral-400">
                        <p>Last updated: January 14, 2026</p>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">1. Agreement to Terms</h2>
                            <p>
                                By accessing or using The Green Candle platform (&quot;Service&quot;), you agree to be bound by these Terms and Conditions (&quot;Terms&quot;). If you disagree with any part of these terms, then you may not access the Service.
                            </p>
                            <p>
                                These Terms apply to all visitors, users, and others who access or use the Service. By using or accessing the Service, you agree to be bound by these Terms. If you are using the Service on behalf of an entity, you represent that you are authorized to accept these Terms on that entity&apos;s behalf.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">2. Description of Service</h2>
                            <p>
                                The Green Candle is a trading platform that provides:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Trading tools and analytics</li>
                                <li>Educational content and market insights</li>
                                <li>Portfolio management features</li>
                                <li>Community forums and discussion boards</li>
                                <li>Subscription-based premium services</li>
                            </ul>
                            <p>
                                Our services are provided &quot;as is&quot; and we reserve the right to modify, suspend, or discontinue any part of the Service at any time.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">3. User Accounts</h2>
                            <h3 className="text-xl font-semibold text-black dark:text-white">3.1 Account Creation</h3>
                            <p>
                                To use certain features of our Service, you must create an account. You must provide accurate, complete, and current information during the registration process and keep your account information updated.
                            </p>

                            <h3 className="text-xl font-semibold text-black dark:text-white">3.2 Account Security</h3>
                            <p>
                                You are responsible for safeguarding your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account or any other breach of security.
                            </p>

                            <h3 className="text-xl font-semibold text-black dark:text-white">3.3 Age Requirements</h3>
                            <p>
                                You must be at least 18 years old to create an account and use our Service. By creating an account, you represent that you are at least 18 years old.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">4. Trading Risks and Disclaimers</h2>
                            <p>
                                <strong>IMPORTANT:</strong> Trading involves substantial risk of loss and is not suitable for all investors. The value of investments can go down as well as up, and you may lose money.
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Past performance does not guarantee future results</li>
                                <li>The Green Candle does not provide personalized investment advice</li>
                                <li>You are solely responsible for your trading decisions</li>
                                <li>We do not guarantee profits or protect against losses</li>
                                <li>Market conditions can change rapidly and unexpectedly</li>
                            </ul>
                            <p>
                                You should carefully consider your financial situation, investment objectives, and risk tolerance before engaging in trading activities.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">5. Subscription and Payment Terms</h2>
                            <h3 className="text-xl font-semibold text-black dark:text-white">5.1 Subscription Plans</h3>
                            <p>
                                We offer various subscription plans with different features and pricing. Subscription fees are billed in advance on a recurring basis (monthly or annually).
                            </p>

                            <h3 className="text-xl font-semibold text-black dark:text-white">5.2 Payment Processing</h3>
                            <p>
                                All payments are processed through secure third-party payment processors. You agree to pay all charges associated with your account, including applicable taxes.
                            </p>

                            <h3 className="text-xl font-semibold text-black dark:text-white">5.3 Refunds</h3>
                            <p>
                                Subscription fees are generally non-refundable. In exceptional circumstances, refunds may be considered on a case-by-case basis at our sole discretion.
                            </p>

                            <h3 className="text-xl font-semibold text-black dark:text-white">5.4 Billing Changes</h3>
                            <p>
                                We may change subscription prices at any time. Price changes will be communicated in advance and will not affect current billing periods.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">6. User Conduct and Prohibited Activities</h2>
                            <p>
                                You agree not to:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Use the Service for any illegal or unauthorized purpose</li>
                                <li>Share your account credentials with others</li>
                                <li>Attempt to reverse engineer or modify the Service</li>
                                <li>Upload malicious code or interfere with Service operations</li>
                                <li>Post false, misleading, or harmful content</li>
                                <li>Violate intellectual property rights</li>
                                <li>Engage in fraudulent or deceptive practices</li>
                                <li>Use automated tools to access the Service without permission</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">7. Intellectual Property Rights</h2>
                            <p>
                                The Service and its original content, features, and functionality are and will remain the exclusive property of The Green Candle and its licensors. The Service is protected by copyright, trademark, and other laws.
                            </p>
                            <p>
                                You retain ownership of content you create or upload to the Service, but you grant us a license to use, display, and distribute such content in connection with the Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">8. Content and Community Guidelines</h2>
                            <p>
                                Our community features are intended for constructive discussion and learning. You agree to:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Respect other users and their opinions</li>
                                <li>Provide accurate and helpful information</li>
                                <li>Avoid spam, harassment, or abusive language</li>
                                <li>Not share confidential or proprietary information</li>
                                <li>Report inappropriate content to our moderation team</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">9. Termination</h2>
                            <p>
                                We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including breach of these Terms.
                            </p>
                            <p>
                                Upon termination, your right to use the Service will cease immediately. If you wish to terminate your account, you may simply discontinue using the Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">10. Limitation of Liability</h2>
                            <p>
                                In no event shall The Green Candle, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Your use of or inability to use the Service</li>
                                <li>Any unauthorized access to or use of our servers</li>
                                <li>Any interruption or cessation of transmission to or from the Service</li>
                                <li>Any bugs, viruses, trojan horses, or the like</li>
                                <li>Any errors or omissions in any content</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">11. Disclaimer</h2>
                            <p>
                                The information on this Service is provided on an &quot;as is&quot; basis. To the fullest extent permitted by law, The Green Candle:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Excludes all representations and warranties relating to this Service and its contents</li>
                                <li>Does not guarantee the accuracy, completeness, or timeliness of information</li>
                                <li>Is not responsible for decisions made based on information provided</li>
                                <li>Does not endorse or recommend any trading strategies or investments</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">12. Indemnification</h2>
                            <p>
                                You agree to defend, indemnify, and hold harmless The Green Candle and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney&quot;s fees), resulting from or arising out of:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Your use and access of the Service</li>
                                <li>Your violation of any term of these Terms</li>
                                <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
                                <li>Any claim that your content caused damage to a third party</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">13. Governing Law and Dispute Resolution</h2>
                            <p>
                                These Terms shall be interpreted and governed by the laws of India, without regard to conflict of law provisions.
                            </p>
                            <p>
                                Any disputes arising from these Terms or your use of the Service will be resolved through binding arbitration in accordance with the rules of the Arbitration and Conciliation Act, 1996.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">14. Changes to Terms</h2>
                            <p>
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                            </p>
                            <p>
                                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">15. Severability</h2>
                            <p>
                                If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">16. Contact Information</h2>
                            <p>
                                If you have any questions about these Terms and Conditions, please contact us:
                            </p>
                            <ul className="list-disc pl-6">
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
