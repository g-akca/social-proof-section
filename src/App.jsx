import HeroSection from "./components/HeroSection";
import TestimonialsList from "./components/TestimonialsList";

function App() {
  return (
    <div className="text-base leading-base px-6 py-20 flex flex-col gap-12 text-purple-900">
      <HeroSection />

      <TestimonialsList />
    </div>
  )
}

export default App;