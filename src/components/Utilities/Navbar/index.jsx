import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
        <Link
          href="/"
          className="font-bold hover:text-color-primary transition-all text-2xl"
        >
          ANIME LOVERS
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
};

export default Navbar;
