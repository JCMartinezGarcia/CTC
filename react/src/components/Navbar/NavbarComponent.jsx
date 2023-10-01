import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import './NavbarComponent.css';

const NavbarComponent = () => {

    const navigate = useNavigate();

    const handleRedirect = (path) => {
        navigate(path);
    }
    return (
        <Navbar isBordered className="text-white">
            <NavbarBrand>
                <Link color="foreground" href="/">
                    <Image
                        width={150}
                        alt="Gobierno de México"
                        src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg"
                    />
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/">
                        Inicio
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="" className="bg-yellow-900" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>

        </Navbar>
    )
}

export default NavbarComponent;