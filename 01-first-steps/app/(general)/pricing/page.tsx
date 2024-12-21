import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'This is the pricing page for my service',
 keywords: ['Pricing Page', 'Pricing', 'Andres']
};

export default function PricingPage() {
    return (
        <span className="text-7xl">Pricing page</span>
    )
}