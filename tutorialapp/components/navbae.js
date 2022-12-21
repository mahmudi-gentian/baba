import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={350} height={120} />
        
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/about/aboutus">About us</Link>
    </nav>
  );
};

export default Navbar;
