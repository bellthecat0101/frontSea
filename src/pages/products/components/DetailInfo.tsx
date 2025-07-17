type Props = {
  name: string;
  description?: string;
  price: number;
};

export default function ProductInfo({ name, description, price }: Props) {
  return (
    <div className="space-y-4 text-primary">
      <span className="text-sm">KAIRU ECO-ART STUDIO</span>
      <h1 className="text-3xl">{name}</h1>
      <p className="text-gray-600 whitespace-pre-line">{description}</p>
      <div className="text-2xl font-semibold text-primary font-noto-sans-tc">
        ${price}
      </div>
    </div>
  );
}
