import HeaderSection from "./HeaderSection";
import ReviewsList from "./ReviewsList";

function HeroSection() {
  return (
    <div className="flex flex-col gap-8">
      <HeaderSection />

      <ReviewsList />
    </div>
  )
}

export default HeroSection;