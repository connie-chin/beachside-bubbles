import dog_logo from '../assets/dog_logo.png';

export function About() {
  return (
    <div className="bg-[#FFF5ED] flex flex-col items-center  pt-[80px]">
      <h1
        className="my-2 font-bold text-4xl pb-[40px]"
        style={{ fontFamily: "'Love Ya Like A Sister', cursive" }}>
        The Brains behind the Bubbles
      </h1>
      <div className="sm:grid sm:grid-cols-2 sm:gap-12  sm:p-8">
        <img
          className="border border-[#000000] sm:block max-w-[317px] w-317 h-317 rounded-full object-cover m-auto mb-12 sm:mb-0"
          src="AboutPic.png"
        />
        <div className="mb-4 items-center flex flex-col">
          <p
            className="text-center sm:text-center text-xl mb-12 sm:mb-0 "
            style={{ fontFamily: "'Love Ya Like A Sister', cursive" }}>
            Born with a lifelong love for animals, Valerie has built a little
            zoo of her own—complete with dogs, a cat, a bunny, and even a gecko.
            A proud Long Beach local, she has been grooming dogs professionally
            for the past five years, working with hundreds of furry friends
            along the way.
            <br />
            <br />
            Valerie brings an artistic touch to every groom, using her clippers
            to enhance each pet’s features and express their personality through
            their coat. While style is important, her number one priority is
            always their safety and comfort. What began as a passion has grown
            into a full-time dream with the launch of Beachside Bubbles—a mobile
            grooming service committed to delivering top-quality care, right to
            your doorstep.
          </p>
          <img
            src={dog_logo}
            alt="logo"
            width="200px"
            className="hidden md:block pt-[20px]"
          />
        </div>
      </div>
    </div>
  );
}
