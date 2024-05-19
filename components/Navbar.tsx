import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative py-5 z-30">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="Logo" width={74} height={28} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="regular-16 pb-1.5 text-gray-50 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          icon="./user.svg"
          variant="btn_dark_green"
          label="Login"
        />
      </div>

      <Image
        src="menu.svg"
        alt="mobile menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
