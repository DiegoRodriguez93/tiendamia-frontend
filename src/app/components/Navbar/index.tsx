"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./navbar.module.css";

const navLinks = [
  {
    href: "/orders",
    title: "Orders",
    description: "All Orders.",
  },
  {
    href: "/orders/approved",
    title: "Approved Orders",
    description: "All Approved Orders.",
  },
  {
    href: "/orders/traveling",
    title: "Traveling Orders",
    description: "All Traveling Orders.",
  },
];
const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.grid}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.card} ${isActive ? styles.active : null}`}
          >
            <h2>
              {link.title} <span>-&gt;</span>
            </h2>
            <p>{link.description} </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
