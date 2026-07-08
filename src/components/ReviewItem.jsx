import starIcon from "/images/icon-star.svg";

function ReviewItem({ starCount, reviewer }) {
  const stars = Array.from({ length: starCount }, (_, index) => (
    <img
      key={index}
      src={starIcon}
      alt=""
      className="w-4 h-4"
    />
  ))

  return (
    <div className="bg-purple-100 rounded-lg p-3.75 flex flex-col gap-4 items-center">
      <div className="flex gap-2">{stars}</div>

      <p className="text-[17px] leading-[100%] font-bold">Rated {starCount} stars in {reviewer}</p>
    </div>
  )
}

export default ReviewItem;