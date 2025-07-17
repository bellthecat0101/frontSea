import { intro } from "../../../assets/img";
type IntroductionSectionProps = {
  title: string;
  description: string;
};
export default function IntroductionSection({
  title,
  description,
}: IntroductionSectionProps) {
  return (
    <section className="flex  align-middle p-10 relative justify-start">
      <img src={intro} className="hidden md:w-[50%] md:block " alt="" />
      <div className="bg-primary text-white p-7 lg:p-20 md:w-[50%] md:absolute md:right-20 md:top-0">
        <h3 className="text-[25px] pb-5">{title}</h3>
        <span className="opacity-60 text-base leading-7">{description}</span>
      </div>
    </section>
  );
}
