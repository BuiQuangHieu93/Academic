import Image from "next/image";
import Link from "next/link";

const navIcons = [
  { src: "/asset/edu.svg", alt: "edu", name: "Home", link: "/" },
  { src: "/asset/edu.svg", alt: "edu", name: "Faculty", link: "/faculty" },
  {
    src: "/asset/institution.svg",
    alt: "institution",
    name: "Institution",
    link: "/institution",
  },
  { src: "/asset/paper.svg", alt: "venue", name: "Venue", link: "/venues" },
  {
    src: "/asset/concept.svg",
    alt: "concept",
    name: "Concept",
    link: "/concept",
  },
];

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav flex flex-row justify-between">
        <Link href="/" className="flex items-center gap-4 pl-8">
          <Image src="/asset/blackLogo.svg" alt="logo" width={45} height={45} />
          <div className="flex flex-col">
            <p className="font-bold">ACADEMIC</p>
            <p className="text-white font-semibold">ONLINE</p>
          </div>
        </Link>
        <div className="w-[50%] pr-4">
          <div className="flex items-center gap-5 justify-evenly w-full">
            {navIcons.map((icon, index) => (
              <Link
                href={icon.link}
                className="group flex flex-row w-full p-4 items-center justify-center"
                key={index}
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={28}
                  height={28}
                  className="mr-2"
                />
                <div className="items-center text-center font-semibold group-hover:text-gray-600">
                  {icon.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
