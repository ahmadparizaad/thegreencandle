import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export async function POST(request: Request) {
    try {
        // Check if request has a body
        const contentType = request.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            return NextResponse.json(
                { error: 'Content-Type must be application/json' },
                { status: 400 }
            );
        }

        const text = await request.text();
        if (!text) {
            return NextResponse.json(
                { error: 'Request body is empty' },
                { status: 400 }
            );
        }

        const body = JSON.parse(text);
        const { name, email, phone, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        // Check if email credentials are configured
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('Email credentials not configured');
            return NextResponse.json(
                { error: 'Email service not configured' },
                { status: 500 }
            );
        }

        // Send email to The Green Candle
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'thegreencandle30@gmail.com',
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333; border-bottom: 2px solid #22c55e; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">
                                <a href="mailto:${email}" style="color: #22c55e;">${email}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">
                                ${phone ? `<a href="tel:${phone}" style="color: #22c55e;">${phone}</a>` : 'Not provided'}
                            </td>
                        </tr>
                    </table>
                    <div style="margin-top: 20px;">
                        <h3 style="color: #333;">Message:</h3>
                        <p style="background: #f9f9f9; padding: 15px; border-radius: 8px; line-height: 1.6;">
                            ${message.replace(/\n/g, '<br>')}
                        </p>
                    </div>
                    <p style="margin-top: 30px; font-size: 12px; color: #666;">
                        This message was sent from The Green Candle website contact form.
                    </p>
                </div>
            `,
            text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}

---
This message was sent from The Green Candle website contact form.
            `,
        });

        // Send confirmation email to the user
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thank you for contacting The Green Candle',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333; border-bottom: 2px solid #22c55e; padding-bottom: 10px;">
                        Thank You for Reaching Out!
                    </h2>
                    <p style="line-height: 1.6; color: #555;">
                        Hi ${name},
                    </p>
                    <p style="line-height: 1.6; color: #555;">
                        Thank you for contacting The Green Candle. We have received your message and will get back to you soon.
                    </p>
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
                        <h4 style="margin: 0 0 10px 0; color: #333;">Your message:</h4>
                        <p style="margin: 0; color: #666; line-height: 1.6;">
                            ${message.replace(/\n/g, '<br>')}
                        </p>
                    </div>
                    <p style="line-height: 1.6; color: #555;">
                        Best regards,<br>
                        <strong>The Green Candle Team</strong>
                    </p>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
                    <p style="font-size: 12px; color: #999;">
                        Vasundhra Infrasol<br>
                        Phone: +91 9713101521<br>
                        Email: thegreencandle30@gmail.com
                    </p>
                </div>
            `,
            text: `
Hi ${name},

Thank you for contacting The Green Candle. We have received your message and will get back to you soon.

Your message:
${message}

Best regards,
The Green Candle Team

---
Vasundhra Infrasol
Phone: +91 9713101521
Email: thegreencandle30@gmail.com
            `,
        });

        return NextResponse.json(
            { success: true, message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again later.' },
            { status: 500 }
        );
    }
}
