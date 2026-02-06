import { useEffect, useState } from "react";
import { FiMenu, FiSearch, FiUser, FiX, FiShoppingBag } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";
import PageContainer from "./PageContainer";
import ButtonIcon from "../ui/ButtonIcon";
import {
  Drawer,
  DrawerHeader,
  DrawerItems,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import CartButton from "../ui/CartButton";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Submit a Deal", href: "#" },
  { label: "Plan Happy Hour", href: "#" },
  { label: "Map", href: "#" },
  { label: "How It Works", href: "#" },
  { label: "About Us", href: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    console.log(scrolled)

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const handleClose = () => setIsOpen(false);
  return (
    <>
      <header
        className={`fixed top-0 left-0 z-30 w-full transition-all duration-300 ${!scrolled ? "backdrop-blur-md bg-black/20" : "bg-black backdrop-blur-0"}`}
      >
        <PageContainer>
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="text-xl font-bold text-white">
              <img src="logo.svg" className="h-7" alt="Flowbite Logo" />
            </div>

            {/* Desktop Nav */}
            <nav
              style={{ color: "white" }}
              className="hidden lg:flex items-center gap-8 text-sm text-white"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition text-gray-50 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Icons */}
            <div className="hidden lg:flex items-center gap-4 text-white">
              {/* <ButtonIcon>
                <FiSearch />
              </ButtonIcon> */}
              <div className="relative flex items-center w-8">
                <AnimatePresence mode="wait">
                  {!isSearchOpen && (
                    <motion.button
                      key="search-icon"
                      initial={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      onClick={() => setIsSearchOpen(true)}
                      className="flex  items-center justify-center border px-1.5 py-1.5 rounded cursor-pointer border-white text-white hover:bg-white/10"
                    >
                      <FiSearch className="w-5 h-5" />
                    </motion.button>
                  )}

                  {isSearchOpen && (
                    <motion.form
                      key="search-form"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="absolute right-0 top-1/2 z-50 -translate-y-1/2"
                    >
                      <input
                        autoFocus
                        type="text"
                        placeholder="Search..."
                        className="h-10 w-48 rounded bg-transparent px-3 text-sm text-white placeholder-white/60 outline-none border-white/30"
                      />

                      <button
                        type="button"
                        onClick={() => setIsSearchOpen(false)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
                      >
                        <FiX size={16} />
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              <ButtonIcon border={true}>
                <FiUser />
              </ButtonIcon>
              <CartButton count={1} />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-white cursor-pointer"
              aria-label="Open menu"
            >
              <FiMenu size={24} />
            </button>
          </div>
        </PageContainer>
      </header>
      {/* Mobile Drawer */}
      <Drawer className="bg-dark" open={isOpen} onClose={handleClose}>
        <DrawerHeader
          titleIcon={() => (
            <>
              <img src="logo.svg" className="h-7" alt="Flowbite Logo" />
            </>
          )}
        />
        <DrawerItems>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <SidebarItems>
                  <SidebarItemGroup className="border-0">
                    {navLinks.map((link) => (
                      <SidebarItem
                        className="py-3 hover:bg-white/10 text-white"
                        key={link.label}
                        href={link.href}
                        icon={link.icon}
                      >
                        {link.label}
                      </SidebarItem>
                    ))}
                  </SidebarItemGroup>
                </SidebarItems>
              </div>
            </div>
          </Sidebar>
        </DrawerItems>
      </Drawer>
    </>
  );
};

const IconButton = ({ children }) => {
  return (
    <button className="flex h-10 w-10 items-center justify-center rounded text-gray-50 border border-white/20 transition hover:bg-white/10">
      {children}
    </button>
  );
};

export default Navbar;
