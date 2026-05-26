import { Hero } from '../components/Hero';
import { Mission } from '../components/Mission';
import { Programs } from '../components/Programs';
import { Impact } from '../components/Impact';
import { CallToAction } from '../components/CallToAction';

export function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <Programs />
      <Impact />
      <CallToAction />
    </>
  );
}
