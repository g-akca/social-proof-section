function TestimonialItem({ name, title, message, image }) {
  return (
    <div className="bg-purple-900 rounded-lg p-8 text-white text-[17px] flex flex-col gap-8">
      <div className="flex gap-6 items-center">
        <img src={image} alt={name} className="w-10 aspect-square rounded-full" />

        <div className="leading-[100%]">
          <p className="font-bold">{name}</p>
          <p className="text-pink-400">{title}</p>
        </div>
      </div>

      <p className="leading-[130%] font-medium tracking-[-0.3px]">“ {message} ”</p>
    </div>
  )
}

export default TestimonialItem;