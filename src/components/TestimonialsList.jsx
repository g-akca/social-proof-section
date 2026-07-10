import TestimonialItem from "./TestimonialItem";

const baseUrl = import.meta.env.BASE_URL

const testimonials = [
  {
    name: "Colton Smith",
    title: "Verified Buyer",
    message: "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
    image: `${baseUrl}images/image-colton.jpg`,
    className: "self-start"
  },
  {
    name: "Irene Roberts",
    title: "Verified Buyer",
    message: "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
    image: `${baseUrl}images/image-irene.jpg`,
    className: "self-center"
  },
  {
    name: "Anne Wallace",
    title: "Verified Buyer",
    message: "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
    image: `${baseUrl}images/image-anne.jpg`,
    className: "self-end"
  },
];

function TestimonialsList() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-113.25 desktop:max-w-277.5 desktop:grid desktop:grid-cols-[repeat(3,350px)] desktop:justify-between desktop:h-64">
      {testimonials.map(tst => (
        <TestimonialItem
          key={tst.name}
          name={tst.name}
          title={tst.title}
          message={tst.message}
          image={tst.image}
          className={tst.className}
        />
      ))}
    </div>
  )
}

export default TestimonialsList;