import { banner } from "../../../assets/img";
export default function BannerSection({ title }: { title: string }) {
  return (
    <section className="relative max-w-screen-xl mx-auto px-4 h-[calc(100vh-50px)]">
      <img src={banner} alt="海洋橫幅" className="w-full h-full object-cover" />
      <div
        className="
          absolute 
          left-1/4 bottom-2/3
          text-center
          px-4
        "
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl italic font-medium text-primary pb-3">
          {title}
        </h3>
        <span className="text-sm sm:text-base md:text-lg text-primary opacity-60">
          -Kairu eco-art studio-
        </span>
      </div>
    </section>
  );
}
