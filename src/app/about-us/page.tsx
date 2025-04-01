import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <main>
      <Header />
      
      {/* About Us Hero */}
      <div className="bg-teal-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              At The Formal Club, we're redefining everyday essentials for men. We started with a simple belief: 
              your wardrobe deserves better—better quality, better comfort, and a better impact on the world.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              In a world dominated by fast fashion, where most shirts are made from polyester blends—plastic-based 
              fabrics that trap heat and harm the environment—we chose a different path. At The Formal Club, we 
              deliver better quality at competitive prices without cutting corners. Every shirt we craft is made 
              from 100% natural fabrics—cotton, linen, bamboo, and premium Giza cotton—offering superior comfort 
              that's kind to your skin and the planet.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              But our mission goes beyond just making great shirts. We're leading a zero-polyester revolution—building 
              a community of well-dressed, responsible men who value quality over fleeting trends.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Every stitch reflects our commitment to craftsmanship, sustainability, and a future where fashion 
              doesn't cost the earth.
            </p>
            
            <p className="text-lg leading-relaxed mb-10">
              Experience the difference. Once you do, there's no going back.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-lg leading-relaxed mb-6">
              The Formal Club is a homegrown brand dedicated to offering premium, zero-polyester essentials for 
              the modern man. We stand for quality, sustainability, and timeless style. Our journey began with a 
              question: Why settle for plastic-filled shirts when natural fabrics provide better comfort and durability?
            </p>
            
            <h2 className="text-2xl font-bold mb-4">What We Do</h2>
            <p className="text-lg leading-relaxed mb-6">
              We create high-quality shirts using 100% natural fibers—no polyester, no compromises. From soft, 
              breathable cotton to luxurious Giza and bamboo blends, our fabrics are chosen with care to deliver 
              the ultimate in comfort, style, and longevity.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">1. Zero Polyester Commitment</h3>
              <p className="text-lg leading-relaxed mb-4">
                We believe in a future where fashion is kinder to the planet. Every product we make is free from 
                synthetic fibers.
              </p>
              
              <h3 className="text-xl font-semibold mb-2">2. Uncompromising Quality</h3>
              <p className="text-lg leading-relaxed mb-4">
                Our shirts are of export-quality grade and built for functionality. Each design features carefully 
                curated details and is produced in small batches, allowing us to focus on quality over quantity.
              </p>
              
              <h3 className="text-xl font-semibold mb-2">3. Customer First</h3>
              <p className="text-lg leading-relaxed">
                When you place an order with us, our customer care team connects with you one-on-one to provide 
                exceptional service throughout your journey. We offer easy exchanges, hassle-free delivery, and a 
                satisfaction guarantee—because you deserve the best.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed mb-6">
              To redefine men's essentials by providing sustainable, high-quality shirts that combine everyday 
              ease with a touch of elegance.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">Join the Zero Polyester Revolution</h2>
            <p className="text-lg leading-relaxed">
              Be part of a movement that values quality, sustainability, and timeless design. Upgrade your 
              wardrobe—one natural fabric shirt at a time.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
