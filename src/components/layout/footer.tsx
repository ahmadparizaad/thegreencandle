"use client";

import Link from "next/link";

export function Footer() {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // Remove hash from URL after scrolling
            setTimeout(() => {
                window.history.pushState({}, '', '/');
            }, 100);
        }
    };

    return (
        <footer className="border-t border-border bg-background">
            <div className="container mx-auto px-4 py-12 md:px-6">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="col-span-2">
                        <Link href="/" className="text-xl font-bold tracking-normal text-foreground">
                            THE GREEN CANDLE
                        </Link>
                        <p className="mt-4 max-w-xs text-sm text-neutral-500 dark:text-neutral-400">
                            Empowering learners with market knowledge and insights for informed investment understanding.
                            <br /><br />
                            GST No: 23AEOPJ3114J1ZO 
                        </p>

                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Product</h3>
                        <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                            <li>
                                <Link href="/#features" onClick={(e) => handleNavClick(e, 'features')}>Features</Link>
                            </li>
                            <li>
                                <Link href="/#pricing" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing</Link>
                            </li>
                            <li>
                                <Link href="/#about" onClick={(e) => handleNavClick(e, 'about')}>About</Link>
                            </li>
                            <li>
                                <Link href="/#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Legal</h3>
                        <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                            <li><Link href="/terms">Terms & Conditions</Link></li>
                            <li><Link href="/refund-policy">Refund Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
                    © {new Date().getFullYear()} The Green Candle. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
