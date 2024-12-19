import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import TestimonialSection from '@/components/TestimonialSection';
import ImageSlider from '@/components/ImageSlider';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1628751518189-c8a345f84474"
            alt="Aquascape Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/70 to-transparent" />
        </div>
        <div className="relative z-10 text-white max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Bring the Beauty of the Ocean Into Your Home
          </h1>
          <p className="text-xl mb-8">
            Professional aquascaping services to create your perfect underwater paradise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-cyan-600 hover:bg-cyan-700"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white"
            >
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12 text-cyan-900">
            Featured Works
          </h2>
          <ImageSlider />
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12 text-cyan-900">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="p-6">
                <h3 className="font-playfair text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button asChild variant="outline">
                  <Link href="/services">Learn More</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />
    </div>
  );
}

const services = [
  {
    title: 'Custom Design',
    description: 'Unique aquascape designs tailored to your space and preferences.',
  },
  {
    title: 'Maintenance',
    description: 'Regular maintenance services to keep your aquascape thriving.',
  },
  {
    title: 'Consultation',
    description: 'Expert advice on aquascaping, plant selection, and care.',
  },
];