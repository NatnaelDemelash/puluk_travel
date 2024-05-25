import { FEATURES } from '@/constants';
import Image from 'next/image';

const Features = () => {
  return (
    <section className="flex flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container w-full relative flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="flex flex-col w-full z-20 lg:w-[60%]">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="Camp"
              width={50}
              height={50}
              className="absolute w-10 left-[5px] top-[-28px] lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>

          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li className="flex flex-1 flex-col w-full items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="icons" width={24} height={24} />
      </div>
      <h2 className="bold-20 mt-5 capitalize lg:bold-32">{title}</h2>
      <p className="regular-16 mt-5 text-gray-30 bg-white/80 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};
export default Features;
