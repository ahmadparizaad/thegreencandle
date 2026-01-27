import React from 'react';
import { cn } from '@/lib/utils';
import {
    LucideIcon,
} from 'lucide-react';

type ContactInfoProps = React.ComponentProps<'div'> & {
    icon: LucideIcon;
    label: string;
    value: string;
    href?: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
    // Content props
    title?: string;
    description?: string;
    contactInfo?: ContactInfoProps[];
    formSectionClassName?: string;
};

export function ContactCard({
    title = 'Contact With Us',
    description = 'If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond  day.',
    contactInfo,
    className,
    formSectionClassName,
    children,
    ...props
}: ContactCardProps) {
    return (
        <div
            className={cn(
                'bg-card border relative grid h-full w-full shadow grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
                className,
            )}
            {...props}
        >
            <div className="flex flex-col justify-between lg:col-span-2">
                <div className="relative h-full space-y-4 px-4 py-12 md:px-12">
                    <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                        {title}
                    </h1>
                    <p className="text-muted-foreground max-w-xl text-sm md:text-base lg:text-lg">
                        {description}
                    </p>
                    <h1 className='font-bold'>Vasundhara Infrasol</h1>
                    <div className="grid gap-4 md:grid grid-cols-1">
                        {contactInfo?.map((info, index) => (
                            <ContactInfo key={index} {...info} />
                        ))}
                    </div>
                </div>
            </div>
            <div
                className={cn(
                    'bg-muted/40 flex h-full w-full items-center border-t p-5 md:col-span-1 md:border-t-0 md:border-l',
                    formSectionClassName,
                )}
            >
                {children}
            </div>
        </div>
    );
}

function ContactInfo({
    icon: Icon,
    label,
    value,
    href,
    className,
    ...props
}: ContactInfoProps) {
    return (
        <div className={cn('flex items-center gap-2 py-1', className)} {...props}>
            <div className="bg-green-300/10 rounded-lg p-3">
                <Icon className="h-5 w-5 text-green-500" />
            </div>
            <div>
                {/* <p className="font-medium hover:text-green-500 transition-colors">{value}</p> */}
                {href ? (
                    <a
                        href={href}
                        className="font-medium hover:text-green-500 transition-colors"
                    >
                        {value}
                    </a>
                ) : (
                    <p className="font-medium">{value}</p>
                )}
            </div>
        </div>
    );
}
