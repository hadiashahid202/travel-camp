import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="absolute right-0 top-0 h-screen w-screen bg-pattern-2 bg-cover bg-center md:-right-28 xl:-top-60" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          height={50}
          width={50}
          className="absolute left-[-5px] top-[-32px] w-10 lg:w-[50px]"
        />
        <h1 className="text-[52px] font-[700] leading-[120%] lg:text-[88px] lg:font-[700] lg:leading-[120%]">
          Putuk Truno Camp Area
        </h1>
        <p className="text-[16px] font-[400] text-gray-500 mt-6 xl:max-w-[520px]">
          Our team of experts use a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  alt="star"
                  height={24}
                  width={24}
                  key={index}
                />
              ))}
          </div>
          <p className="text-[16px] font-[700] lg:text-[20px] lg:font-[700] text-blue-500">
            198k
            <span className="ml-1 text-[16px] font-[400] lg:text-[20px] lg:font-[400]">
              Excellent Reviews
            </span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row w-full gap-3">
          <Button
            type="button"
            title="Download App"
            variant="border-green-500 bg-green-500 px-8 py-5 text-white"
          />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="border-white bg-white px-8 py-3 text-gray-900"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative flex flex-col z-20 w-[268px] gap-8 rounded-3xl bg-black px-7 py-8">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-[16px] font-[400] text-gray-200">Location</p>
              <Image src="/close.svg" alt="close" height={24} width={24} />
            </div>
            <p className="text-white text-[20px] font-[700]">
              Aguas Calienties
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-[16px] font-[400] block text-gray-200">
                Distance
              </p>
              <p className="text-white text-[20px] font-[700]">173.28 mi</p>
            </div>

            <div className="flex flex-col">
              <p className="text-[16px] font-[400] block text-gray-200">
                Elevation
              </p>
              <p className="text-white text-[20px] font-[700]">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
