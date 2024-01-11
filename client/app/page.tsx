import FeaturedDestinations from '@/components/FeaturedDestinations';
import Hero from '@/components/Hero';
import Newsletter from '@/components/Newsletter';
import PopularPlaces from '@/components/PopularPlaces';
import Reviews from '@/components/Reviews';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedDestinations />
      <Newsletter />
      <PopularPlaces />
      <Reviews />
    </main>
  );
}
