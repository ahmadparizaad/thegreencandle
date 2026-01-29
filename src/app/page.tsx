import { BackgroundPaths } from "@/components/ui/background-paths";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ContactCard } from "@/components/ui/contact-card";
import { ContactForm } from "@/components/ui/contact-form";
import Link from "next/link";
import Image from "next/image";
import { BarChart3, Shield, Zap, TrendingUp, Check, MailIcon, PhoneIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar />

      {/* Hero Section */}
      <BackgroundPaths title="The Green Candle" />

      {/* Features Section */}
      <section id="features" className="py-24 md:py-32 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black dark:text-white">
              Powerful Features for Market Learners
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400 md:text-lg">
              Everything you need to understand and learn about the share market.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<BarChart3 className="h-10 w-10 text-black dark:text-white" />}
              title="Strategy Analysis"
              description="Learn to deconstruct market setups and understand the technical patterns behind movements."
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-black dark:text-white" />}
              title="Secure Platform"
              description="Your educational progress and data are protected by industry-leading security."
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-black dark:text-white" />}
              title="Daily Breakdowns"
              description="Receive daily educational observations on market trends and structural shifts."
            />
            <FeatureCard
              icon={<TrendingUp className="h-10 w-10 text-black dark:text-white" />}
              title="Advanced Analysis"
              description="Leverage deep technical insights to enhance your comprehensive market learning journey."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-neutral-900 dark:text-white">
                Our Mission
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-6">
                At The Green Candle, we believe that everyone interested in the share market deserves access to comprehensive educational resources and market insights. Our platform is built to provide knowledge about markets, with a focus on speed, accuracy, and ease of use.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                Whether you&apos;re just starting out or you&apos;re a seasoned market enthusiast, we provide the data and insights you need to understand the markets with confidence.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl group">
              <Image
                src="/mission.png"
                alt="Our Mission - Market Learning Platform"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-sm font-medium">Comprehensive tools for in-depth market understanding.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 md:py-32 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black dark:text-white">
              Subscription Plans
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400 md:text-lg">
              Access comprehensive market insights and educational content tailored to your learning goals.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <PricingCard
              title="Regular"
              price="₹990"
              period="/ day"
              description="Foundational market study cases and key data points for steady learning."
              features={[
                "Study Case: Entry & Exit Analysis",
                "Daily Market Learning Insights",
                "Weekly Education Plan: ₹4,000"
              ]}
              message="Hi, I am interested in buying the Regular subscription plan."
            />
            <PricingCard
              title="Premium"
              price="₹2,000"
              period="/ day"
              highlighted={true}
              description="Extended analysis and advanced strategies for dedicated market enthusiasts."
              features={[
                "Advanced Strategy: Multi-Level Analysis",
                "Daily Market Learning Insights",
                "Priority Educational Support",
                "Weekly Education Plan: ₹9,000"
              ]}
              message="Hi, I am interested in buying the Premium plan subscription plan."
            />
            <PricingCard
              title="International"
              price="$120"
              period="/ day"
              description="Global market case studies and advanced analysis for our international learning community."
              features={[
                "Global Market Learning Modules",
                "Advanced Analysis Models",
                "24/7 Premium Support",
                "Exclusive Multi-market Analysis"
              ]}
              message="Hi, I am interested in buying the International subscription plan."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-32">
        <div className="container mx-auto px-4 py-12 md:px-8 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <ContactCard
              title="Get in Touch"
              description="Have questions about our market insights or need help getting started? Fill out the form and we'll get back to you soon."
              className="rounded-2xl bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700"
              contactInfo={[
                {
                  icon: PhoneIcon,
                  label: 'Phone',
                  value: '+91 9713101521',
                  href: 'tel:+919713101521',
                },
                {
                  icon: MailIcon,
                  label: 'Email',
                  value: 'thegreencandle30@gmail.com',
                  href: 'mailto:thegreencandle30@gmail.com',
                }
              ]}
            >
              <ContactForm />
            </ContactCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="bg-neutral-900 py-24 text-white dark:bg-white dark:text-black">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to start your journey?
          </h2>
          <p className="mx-auto mt-4 max-w-150 opacity-80 md:text-lg">
            Join thousands of learners using The Green Candle to understand the share market.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="https://wa.me/919713101521?text=Hi" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="px-8">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 transition-all hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-900">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 text-xl font-bold text-neutral-900 dark:text-white">{title}</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
    </div>
  );
}

function PricingCard({ 
  title, 
  price, 
  period, 
  description, 
  features,
  message, 
  highlighted = false 
}: { 
  title: string, 
  price: string, 
  period: string, 
  description: string, 
  features: string[],
  message?: string,
  highlighted?: boolean
}) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl border p-8 transition-all hover:shadow-xl ${
      highlighted 
        ? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-black' 
        : 'border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900'
    }`}>
      <h3 className={`mb-2 text-2xl font-bold ${highlighted ? 'text-white dark:text-black' : 'text-neutral-900 dark:text-white'}`}>
        {title}
      </h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className={`text-sm ml-1 ${highlighted ? 'opacity-80' : 'text-neutral-600 dark:text-neutral-400'}`}>{period}</span>
      </div>
      <p className={`mb-6 text-sm ${highlighted ? 'opacity-80' : 'text-neutral-600 dark:text-neutral-400'}`}>
        {description}
      </p>
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm">
            <Check className={`mr-2 h-4 w-4 shrink-0 ${highlighted ? 'text-white dark:text-black' : 'text-neutral-900 dark:text-white'}`} />
            <span className={highlighted ? 'opacity-90' : 'text-neutral-600 dark:text-neutral-400'}>{feature}</span>
          </li>
        ))}
      </ul>
      <Link href={`https://wa.me/919713101521?text=${encodeURIComponent(message || "")}`} target="_blank" rel="noopener noreferrer" className="block w-full">
        <Button 
          variant={highlighted ? "secondary" : "default"} 
          className={`w-full ${highlighted ? 'bg-white text-black hover:bg-neutral-200 dark:bg-black dark:text-white dark:hover:bg-neutral-800' : ''}`}
        >
          Get Started
        </Button>
      </Link>
    </div>
  );
}


