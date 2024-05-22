import { PEOPLE_URL } from '@/constants';
import Image from 'next/image';

type CampSiteProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  peopleJoined: string;
};

const CampSite = ({
  title,
  subtitle,
  backgroundImage,
  peopleJoined,
}: CampSiteProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat xl:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex flex-col h-full items-start justify-between p-6 lg:px-20 lg:py-20">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="./folded-map.svg" width={24} height={24} alt="mao" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                key={url}
                width={52}
                height={52}
                alt="persons"
                className="inline-block w-10 h-10 rounded-full"
              />
            ))}
          </span>

          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 2xl:max-container">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400p] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Mount Entoto camp"
          subtitle="Addis Ababa, Ethiopia"
          peopleJoined="25+ Joined"
        />

        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mount View"
          subtitle="Somewhere out side Addis"
          peopleJoined="15+ Joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w- [734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="text-white regular-16 md:regular-24 2xl:regular-40">
            {' '}
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            src="./quote.svg"
            width={186}
            height={219}
            className="camp-quote"
            alt="camp quoute image"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
