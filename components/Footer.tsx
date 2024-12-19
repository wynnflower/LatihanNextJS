import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-cyan-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Laut Emas Aquascape</h3>
            <p className="text-cyan-100">
              Bringing the beauty of underwater landscapes into your space.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-cyan-100 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-cyan-100 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-cyan-100 hover:text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cyan-100 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-100 hover:text-white"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-100 hover:text-white"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-100 hover:text-white"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-cyan-800 text-center text-cyan-100">
          <p>&copy; {new Date().getFullYear()} Laut Emas Aquascape. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;