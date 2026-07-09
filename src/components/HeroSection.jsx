import HeaderSection from "./HeaderSection";
import ReviewsList from "./ReviewsList";

function HeroSection() {
  return (
    <div className="flex flex-col items-center gap-8 tablet:gap-10">
      <HeaderSection />

      <ReviewsList />
    </div>
  )
}

export default HeroSection;