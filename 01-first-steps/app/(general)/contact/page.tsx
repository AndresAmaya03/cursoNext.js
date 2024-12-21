import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact Page',
 description: 'This is the contact page for my service',
 keywords: ['Contact Page', 'Contact', 'Andres']
};

export default function ContactPage() {
    return (
        <span className="text-7xl">Contact page</span>
    )
}