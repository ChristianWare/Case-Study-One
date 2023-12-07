"use client";

import styles from "./Nav.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../Button/Button";
import House from "../../public/icons/house.svg";

import { setIsAuthenticated, setUser } from "../../redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { signOut, useSession } from "next-auth/react";

function Nav() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const { data } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (data) {
      dispatch(setUser(data?.user));
      dispatch(setIsAuthenticated(true));
    }
  }, [data, dispatch]);

  const logoutHandler = () => {
    signOut();
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (window.innerWidth <= 870 && isOpen) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }

    const handleResize = () => {
      setIsOpen(false);
      window.addEventListener("resize", handleResize);
    };

    return () => {
      window.removeEventListener("resize", handleResize);
      if (body) {
        body.style.overflow = "auto";
      }
    };
  }, [isOpen]);

  const pathname = usePathname();

  const navItems = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Properties",
      href: "/properties",
    },
    {
      text: "Blog",
      href: "/blog",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Link href='/' className={styles.logo}>
            <House width={30} height={30} className={styles.icon} /> Elite
            Retreat Rentals
          </Link>
        </div>
        <ul
          className={
            isOpen === false
              ? styles.navMenu
              : `${styles.navMenu} ${styles.active}`
          }
        >
          {navItems.map((navItem, index) => (
            <li
              key={index}
              className={styles.navItem}
              onClick={() => setIsOpen(false)}
            >
              <Link
                href={navItem.href}
                className={
                  pathname === navItem.href
                    ? `${styles.activeLink}  ${styles.navItem}`
                    : styles.navItem
                }
              >
                {navItem.text}
              </Link>
            </li>
          ))}

          {isOpen === true ? (
            <div className={styles.btnContainerMobile}>
              <Button
                href='/account'
                text='My account'
                btnType='primaryii'
                onClick={() => setIsOpen(false)}
              />
              <Button
                href='/'
                text='Log out'
                btnType='secondary'
                onClick={signOut}
              />
            </div>
          ) : (
            <div className={styles.btnContainerMobile}>
              <Button href='/login' text='Login' btnType='primaryii' />
            </div>
          )}
        </ul>
        {!user ? (
          <div className={styles.btnContainer}>
            <Button href='/login' text='Login' btnType='navBtn' />
          </div>
        ) : (
          <>
            <div className={styles.btnContainer}>
              <Button href='/account' text='My account' btnType='navBtn' />
              <Button
                href='/'
                text='Log out'
                btnType='navBtnii'
                onClick={signOut}
              />
            </div>
          </>
        )}
        <span
          className={
            isOpen === false
              ? styles.hamburger
              : `${styles.hamburger} ${styles.active}`
          }
          onClick={openMenu}
        >
          <span className={styles.whiteBar}></span>
          <span className={styles.whiteBar}></span>
          <span className={styles.whiteBar}></span>
        </span>
      </nav>
    </header>
  );
}
export default Nav;
