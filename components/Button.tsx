import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  icon?: string;
  label: string;
  variant:
    | 'btn_dark_green'
    | 'btn_green'
    | 'btn_white_text'
    | 'btn_white'
    | 'btn_dark_green_outline';
  full?: boolean;
};

const Button = ({ type, icon, label, variant, full }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && 'w-full'
      }`}
    >
      {icon && <Image src={icon} alt="button icon" width={24} height={24} />}
      <label className="bold-16 white-space-whitespace-nowrap cursor-pointer">
        {label}
      </label>
    </button>
  );
};

export default Button;
