'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const portfolioItems = [
  {
    title: 'Nature Aquarium Style',
    description: 'A harmonious blend of aquatic plants and natural hardscape',
    image: 'https://images.unsplash.com/photo-1628751518189-c8a345f84474',
  },
  {
    title: 'Iwagumi Layout',
    description: 'Minimalist design focusing on rock arrangement',
    image: 'https://images.unsplash.com/photo-1550479125-d6ec537f108e',
  },
  {
    title: 'Dutch Style Garden',
    description: 'Dense plantation with careful color coordination',
    image: 'https://images.unsplash.com/photo-1624507931517-51cd2d30b430',
  },
  {
    title: 'Jungle Style',
    description: 'Lush, natural-looking aquascape with dense vegetation',
    image: 'https://images.unsplash.com/photo-1628751518189-c8a345f84474',
  },
];

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1624507931517-51cd2d30b430"
            alt="Portfolio Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/70 to-transparent" />
        </div>
        <div className="relative z-10 text-white max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl">Discover our finest aquascape creations</p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden cursor-pointer transition-transform hover:scale-105"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-playfair text-xl font-bold text-cyan-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <div className="relative aspect-video">
              <Image
                src={selectedImage}
                alt="Enlarged portfolio image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}