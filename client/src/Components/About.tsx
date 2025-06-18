export function About() {
  return (
    <div className="bg-[#EAD6BC] flex flex-col items-center border-2 border-emerald-400">
      <h1 className="my-2 font-bold">About</h1>
      <div className="sm:grid sm:grid-cols-2 sm:gap-6 sm:p-8">
        <img className="hidden sm:block max-w-[317px]" src="AboutPic.png" />
        <div className="mb-4">
          Born with a lifelong love for animals, Valerie has built a little zoo
          of her own—complete with dogs, a cat, a bunny, and even a gecko. A
          proud Long Beach local, she has been grooming dogs professionally for
          the past five years, working with hundreds of furry friends along the
          way. Valerie brings an artistic touch to every groom, using her
          clippers to enhance each pet’s features and express their personality
          through their coat. While style is important, her number one priority
          is always their safety and comfort. What began as a passion has grown
          into a full-time dream with the launch of Beachside Bubbles—a mobile
          grooming service committed to delivering top-quality care, right to
          your doorstep.
        </div>
      </div>
    </div>
  );
}
