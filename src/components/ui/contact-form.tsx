"use client"

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = (data: { name: string; email: string; phone: string; message: string }) => {
        const newErrors: Record<string, string> = {};

        if (!data.name || data.name.length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email || !emailRegex.test(data.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        if (data.phone && !phoneRegex.test(data.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (!data.message || data.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            message: formData.get('message') as string,
        };

        const validationErrors = validate(data);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitted(true);
                (e.target as HTMLFormElement).reset();
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch {
            alert('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="w-full text-center py-8">
                <p className="text-lg font-medium text-green-600 dark:text-green-400">
                    Thank you for your message!
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                    We&apos;ll get back to you soon.
                </p>
                <Button
                    className="mt-4"
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                >
                    Send another message
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="w-full space-y-4 px-4 py-8">
            <div className="flex flex-col gap-2">
                <Label htmlFor="name" className="text-white dark:text-neutral-100">Name</Label>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={`bg-gray-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 border-neutral-200 dark:border-neutral-800 placeholder:text-neutral-500 ${errors.name ? "border-red-500" : ""}`}
                    onChange={() => {
                        if (errors.name) {
                            setErrors(prev => ({ ...prev, name: '' }));
                        }
                    }}
                />
                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-white dark:text-neutral-100">Email</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className={`bg-gray-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 border-neutral-200 dark:border-neutral-800 placeholder:text-neutral-500 ${errors.email ? "border-red-500" : ""}`}
                    onChange={() => {
                        if (errors.email) {
                            setErrors(prev => ({ ...prev, email: '' }));
                        }
                    }}
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="phone" className="text-white dark:text-neutral-100">Phone</Label>
                <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className={`bg-gray-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 border-neutral-200 dark:border-neutral-800 placeholder:text-neutral-500 ${errors.phone ? "border-red-500" : ""}`}
                    onChange={() => {
                        if (errors.phone) {
                            setErrors(prev => ({ ...prev, phone: '' }));
                        }
                    }}
                />
                {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="message" className="text-white dark:text-neutral-100">Message</Label>
                <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="How can we help you?"
                    className={`bg-gray-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 border-neutral-200 dark:border-neutral-800 placeholder:text-neutral-500 ${errors.message ? "border-red-500" : ""}`}
                    onChange={() => {
                        if (errors.message) {
                            setErrors(prev => ({ ...prev, message: '' }));
                        }
                    }}
                />
                {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
            </div>
            <Button className="w-full bg-gray-100 text-neutral-900 hover:bg-white dark:bg-gray-50 dark:text-neutral-900 dark:hover:bg-gray-50" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit'}
            </Button>
        </form>
    );
}
