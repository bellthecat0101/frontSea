import { product } from "@/assets/img";
import { Link } from "react-router-dom";
type props = {
  title: string;
  description: string;
};
export default function ProductSection({ title, description }: props) {
  return (
    <section className="flex flex-col lg:flex-row  justify-center items-center p-10">
      <img src={product} alt="" />
      <div className="text-primary p-5 md:p-20 w-full lg:w-[50%]">
        <h3 className="text-[25px] pb-5">{title}</h3>
        <div className="opacity-60 text-base leading-7">{description}</div>
        <Link to="/products" className="btn-primary mt-10">
          SHOP
        </Link>
      </div>
    </section>
  );
}
