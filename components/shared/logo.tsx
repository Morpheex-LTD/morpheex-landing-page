import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1 group">
      <Image
        alt="logo"
        src={"/logo.png"}
        width={100}
        height={70}
        className="object-contain! w-10"
      />
      <span className="text-xl font-bold tracking-tighter uppercase">
        Morpheex
      </span>
    </Link>
  );
};

export default Logo;
