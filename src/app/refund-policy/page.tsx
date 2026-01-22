import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function RefundPolicyPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-neutral-950">
            <Navbar />
            <div className="container mx-auto px-4 py-32 md:px-6">
                <div className="mx-auto max-w-3xl">
                    <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl text-black dark:text-white">Refund Policy</h1>
                    <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-neutral-600 dark:text-neutral-400">
                        <p>Last updated: January 22, 2026</p>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">1. No Refund Policy</h2>
                            <p>
                                The Green Candle maintains a strict no-refund policy for all subscriptions, services, and purchases. All payments made to The Green Candle are final and non-refundable.
                            </p>
                            <p>
                                By purchasing our services or subscribing to our platform, you acknowledge and agree that you are not entitled to any refunds under any circumstances.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">2. Subscription Services</h2>
                            <p>
                                Our subscription services are provided on a continuous basis. Once a subscription is activated, it cannot be canceled or refunded, even if you choose not to use the service.
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Monthly subscriptions are billed in advance and are non-refundable</li>
                                <li>Annual subscriptions are billed in advance and are non-refundable</li>
                                <li>Any unused portion of a subscription period is forfeited upon cancellation</li>
                                <li>No prorated refunds are provided for early cancellations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">3. One-Time Purchases</h2>
                            <p>
                                All one-time purchases, including but not limited to premium features, data packages, and special access, are final and non-refundable.
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Digital products and services are delivered immediately upon purchase</li>
                                <li>No refunds for change of mind or dissatisfaction</li>
                                <li>No refunds for technical issues on the user&apos;s end</li>
                                <li>No refunds for incompatibility with user&apos;s devices or systems</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">4. Exceptions</h2>
                            <p>
                                There are no exceptions to our no-refund policy. We do not provide refunds for any reason, including but not limited to:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Service unavailability or downtime</li>
                                <li>Technical issues or bugs</li>
                                <li>Changes in market conditions</li>
                                <li>Personal circumstances or financial difficulties</li>
                                <li>Dissatisfaction with service performance</li>
                                <li>Failure to meet personal expectations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">5. Billing Disputes</h2>
                            <p>
                                If you believe you have been charged in error, please contact our billing support team immediately. We will investigate legitimate billing errors, but this does not constitute a refund policy change.
                            </p>
                            <p>
                                Any adjustments for verified billing errors will be made at our sole discretion and do not create any right to future refunds.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">6. Account Termination</h2>
                            <p>
                                If your account is terminated for violation of our Terms and Conditions, no refunds will be provided for any remaining subscription period or unused credits.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">7. Contact Information</h2>
                            <p>
                                If you have questions about this Refund Policy, please contact us:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Vasundhra Infrasol</li>
                                <li>Phone: 9713101521</li>
                                <li>Email: thegreencandle30@gmail.com</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black dark:text-white">8. Policy Changes</h2>
                            <p>
                                This no-refund policy may be updated at any time. Continued use of our services after any changes constitutes acceptance of the updated policy.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}