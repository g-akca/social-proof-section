import ReviewItem from "./ReviewItem";

const reviews = [
  {
    starCount: 5,
    reviewer: "Reviews"
  },
  {
    starCount: 5,
    reviewer: "Report Guru"
  },
  {
    starCount: 5,
    reviewer: "BestTech"
  },
];

function ReviewsList() {
  return (
    <div className="flex flex-col gap-4">
      {reviews.map(review => (
        <ReviewItem
          starCount={review.starCount}
          reviewer={review.reviewer}
        />
      ))}
    </div>
  )
}

export default ReviewsList;