import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check } from 'lucide-react';

const services = [
  {
    title: 'Basic Package',
    price: '$499',
    description: 'Perfect for small spaces',
    features: [
      'Custom design consultation',
      'Up to 20-gallon tank setup',
      'Basic lighting system',
      'Essential plants and hardscape',
      '1-month maintenance guide',
    ],
  },
  {
    title: 'Premium Package',
    price: '$999',
    description: 'Our most popular option',
    features: [
      'Advanced design consultation',
      'Up to 50-gallon tank setup',
      'Professional LED lighting',
      'Premium plants and hardscape',
      '3-month maintenance service',
      'Water quality monitoring',
    ],
  },
  {
    title: 'Custom Design',
    price: 'Custom',
    description: 'Tailored to your needs',
    features: [
      'Unlimited design revisions',
      'Custom tank size',
      'High-end equipment options',
      'Rare plant species available',
      '6-month maintenance service',
      '24/7 support hotline',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1550479125-d6ec537f108e"
            alt="Services Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/70 to-transparent" />
        </div>
        <div className="relative z-10 text-white max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Professional aquascaping solutions for every space</p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-cyan-900 mb-2">
                  {service.title}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-cyan-600">{service.price}</span>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-cyan-600" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}