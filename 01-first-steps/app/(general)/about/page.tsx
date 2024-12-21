import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About Page',
 description: 'This is the about page for my service',
 keywords: ['About Page', 'About', 'Andres']
};


export default function AboutPage() {
    return (
        <span className="text-7xl">About page</span>
    )
}
