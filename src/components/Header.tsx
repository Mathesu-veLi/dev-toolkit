import { useState } from "react";
import { Link } from "react-router-dom";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { NavLink } from "./NavLink";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="flex lg:justify-center lg:border-b py-4 justify-around items-center mb-5">
        <div className="lg:absolute lg:w-11/12 lg:-z-10">
          <Link to="/">DEV Toolkit</Link>
        </div>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:sr-only"
          variant="ghost"
        >
          {isOpen ? (
            <Cross2Icon className="w-5 h-5" />
          ) : (
            <HamburgerMenuIcon className="w-5 h-5" />
          )}
        </Button>
        <ul
          className={`flex gap-4 lg:gap-10 lg:not-sr-only top-14 border-b pt-2 pb-4 bg-stone-950 w-full justify-center lg:border-b-0 ${
            isOpen ? "absolute" : "sr-only"
          }`}
        >
          <li>
            <NavLink to="/" text="Home" />
          </li>
          <li>
            <NavLink to="/cpf" text="CPF" />
          </li>
          <li>
            <NavLink to="/password" text="Password" />
          </li>
          <li>
            <NavLink to="/ip" text="IP" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
