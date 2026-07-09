import HeroSection from "./components/HeroSection";
import TestimonialsList from "./components/TestimonialsList";

function App() {
  return (
    <div className="text-base leading-base text-purple-900 min-h-screen px-6 py-20 flex flex-col gap-12 items-center tablet:py-29.5 desktop:py-29 desktop:justify-center desktop:gap-16">
      <HeroSection />

      <TestimonialsList />
    </div>
  )
}

export default App;