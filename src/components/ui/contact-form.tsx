"use client"

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            message: formData.get('message') as string,
        };

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
                    We&apos;ll get back to you within 1 business day.
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
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                />
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                />
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                />
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="How can we help you?"
                />
            </div>
            <Button className="w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit'}
            </Button>
        </form>
    );
}
