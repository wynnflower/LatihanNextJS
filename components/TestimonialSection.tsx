import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Home Owner',
    content: 'The aquascape they created for my living room is absolutely stunning. It\'s like having a piece of nature indoors.',
  },
  {
    name: 'Michael Chen',
    role: 'Restaurant Owner',
    content: 'Professional service and amazing attention to detail. Our customers love the ambiance created by the aquascape.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Interior Designer',
    content: 'Working with Laut Emas has been fantastic. They understand design and create beautiful, sustainable aquascapes.',
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-playfair text-4xl font-bold text-center mb-12 text-cyan-900">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-white">
              <Quote className="h-8 w-8 text-cyan-600 mb-4" />
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}