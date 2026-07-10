import ReviewItem from "./ReviewItem";

const reviews = [
  {
    starCount: 5,
    reviewer: "Reviews",
    className: "self-start"
  },
  {
    starCount: 5,
    reviewer: "Report Guru",
    className: "self-center"
  },
  {
    starCount: 5,
    reviewer: "BestTech",
    className: "self-end"
  },
];

function ReviewsList() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-113.25 desktop:max-w-none desktop:w-135.5">
      {reviews.map(review => (
        <ReviewItem
          key={review.reviewer}
          starCount={review.starCount}
          reviewer={review.reviewer}
          className={review.className}
        />
      ))}
    </div>
  )
}

export default ReviewsList;