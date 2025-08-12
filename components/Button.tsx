import Image from "next/image";
type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center gap-3 border rounded-full ${variant}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} height={24} width={24} />}
      <label className="text-[16px] font-[700] whitespace-nowrap">
        {title}
      </label>
    </button>
  );
};

export default Button;
