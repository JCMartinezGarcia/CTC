import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Image,
  Avatar,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "./NavbarComponent.css";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Inicio", path: "/" },
    { label: "Tareas", path: "/tasks" },
    { label: "Reportes", path: "/reports" },
    { label: "Usuarios", path: "/users" },
  ];

  return (
    <Navbar
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      className="text-white"
    >
      {/* Left: Logo + Hamburger */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="sm:hidden"
        />

        <NavbarBrand>
          <Link to="/">
            <Image
              width={150}
              alt="Gobierno de México"
              src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Middle: Desktop menu */}
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.path}>
            <Link
              to={item.path}
              className="hover:opacity-80 transition-opacity"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right: Usuario */}
      <NavbarContent justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              as="button"
              className="cursor-pointer"
              icon={<FaUser />}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Opciones de usuario" variant="flat">
            <DropdownItem key="profile">
              <Link to="/profile" className="w-full block">
                Mi Perfil
              </Link>
            </DropdownItem>
            <DropdownItem key="settings">
              <Link to="/settings" className="w-full block">
                Configuración
              </Link>
            </DropdownItem>
            <DropdownItem key="logout" className="text-danger" color="danger">
              Cerrar sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.path}>
            <Link
              to={item.path}
              className="w-full text-lg py-2 block"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
