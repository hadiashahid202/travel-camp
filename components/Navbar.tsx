import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

const navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 py-5 relative z-30">
      <Link href="/">
        <Image width={74} height={29} src="/hilink-logo.svg" alt="Image Logo" />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-[16px] font-[400] flex items-center justify-center text-gray-500 cursor-pointer transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flex items-center justify-center hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="bg-green-800 hover:bg-black transition-all text-white px-8 py-4 rounded-full"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        height={32}
        width={32}
        className="inline-block lg:hidden cursor-pointer"
      />
    </nav>
  );
};

export default navbar;
