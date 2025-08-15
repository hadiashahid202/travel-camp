import Image from "next/image";
interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className="h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-3xl 2xl:rounded-3xl
 "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flex items-center justify-center gap-4">
          <div className="rounded-full p-4 bg-green-500">
            <Image src="/folded-map.svg" alt="map" height={28} width={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-[18px] font-[700] text-white">{title}</h4>
            <p className="text-[14px] font-[400] text-white">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="border-2 border-green-500 2xl:mx-auto 2xl:max-w-[1440px] relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="/img-1.png"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ joined"
        />
        {/* <CampSite /> */}
      </div>
    </section>
  );
};

export default Camp;
