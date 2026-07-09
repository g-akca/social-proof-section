import HeroSection from "./components/HeroSection";
import TestimonialsList from "./components/TestimonialsList";

function App() {
  return (
    <div className="text-base leading-base text-purple-900 px-6 py-20 tablet:py-29.5 flex flex-col gap-12 items-center">
      <HeroSection />

      <TestimonialsList />
    </div>
  )
}

export default App;