import HeaderSection from "./HeaderSection";
import ReviewsList from "./ReviewsList";

function HeroSection() {
  return (
    <div className="flex flex-col items-center gap-8 tablet:gap-10 w-full desktop:max-w-277.5 desktop:flex-row desktop:justify-between">
      <HeaderSection />

      <ReviewsList />
    </div>
  )
}

export default HeroSection;