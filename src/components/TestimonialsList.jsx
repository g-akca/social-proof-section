const testimonials = [
  {
    name: "Colton Smith",
    title: "Verified Buyer",
    message: "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"
  },
  {
    name: "Irene Roberts",
    title: "Verified Buyer",
    message: "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
  },
  {
    name: "Anne Wallace",
    title: "Verified Buyer",
    message: "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"
  },
];

function TestimonialsList() {
  return (
    <div>
      <TestimonialItem />
      <TestimonialItem />
      <TestimonialItem />
    </div>
  )
}

export default TestimonialsList;