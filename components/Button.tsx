import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  icon?: string;
  label: string;
  variant: 'btn_dark_green';
};

const Button = ({ type, icon, label, variant }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} alt="button icon" width={24} height={24} />}
      {label}
    </button>
  );
};

export default Button;
