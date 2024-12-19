import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1624507931517-51cd2d30b430"
            alt="About Us Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/70 to-transparent" />
        </div>
        <div className="relative z-10 text-white max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Creating underwater paradises since 2015</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-cyan-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Laut Emas Aquascape was founded with a passion for bringing the tranquil beauty
                of underwater landscapes into homes and spaces. Our journey began with a simple
                belief: that every aquascape should be a unique piece of living art.
              </p>
              <p className="text-gray-600 mb-4">
                With years of experience in aquascaping and aquatic plant cultivation, our team
                has developed expertise in creating sustainable, beautiful underwater ecosystems
                that thrive in any environment.
              </p>
            </div>
            <Card className="overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1550479125-d6ec537f108e"
                alt="Our Workshop"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </Card>
          </div>

          {/* Mission & Vision */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="font-playfair text-2xl font-bold text-cyan-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To create stunning, sustainable aquascapes that bring joy and tranquility to
                our clients' spaces while promoting the appreciation of aquatic ecosystems.
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="font-playfair text-2xl font-bold text-cyan-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be the leading aquascaping service provider, known for our innovative
                designs, sustainable practices, and commitment to excellence.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}