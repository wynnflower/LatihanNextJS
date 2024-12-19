'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1628751518189-c8a345f84474',
    title: 'Nature Aquarium Style',
  },
  {
    url: 'https://images.unsplash.com/photo-1550479125-d6ec537f108e',
    title: 'Iwagumi Layout',
  },
  {
    url: 'https://images.unsplash.com/photo-1624507931517-51cd2d30b430',
    title: 'Dutch Style Aquascape',
  },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const next = () => {
    setCurrentIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="relative">
      <Card className="overflow-hidden aspect-video relative">
        <Image
          src={images[currentIndex].url}
          alt={images[currentIndex].title}
          fill
          className="object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="font-playfair text-2xl font-bold">{images[currentIndex].title}</h3>
        </div>
      </Card>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={prev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={next}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}