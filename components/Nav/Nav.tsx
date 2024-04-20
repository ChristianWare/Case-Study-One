"use client";

import styles from "./Nav.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Button from "../Button/Button";
import House from "../../public/icons/house.svg";

import { setIsAuthenticated, setUser } from "../../redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Down from "../../public/icons/down.svg";

function Nav() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const { data } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenii, setIsOpenii] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  const openMenuii = () => {
    setIsOpenii(!isOpenii);
  };

  useEffect(() => {
    if (data) {
      dispatch(setUser(data?.user));
      dispatch(setIsAuthenticated(true));
    }
  }, [data, dispatch]);

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
  const router = useRouter();

  const logoutHandler = () => {
    router.push("/");
    setIsOpen(false);
    signOut();
  };

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
          <div className={styles.userNameMobile}>
            <div className={styles.name}>Hi, {user?.name}:</div>
            <Button
              href='/account'
              text='Account Settings'
              btnType='navBtnii'
              onClick={() => setIsOpen(false)}
            />
            <Button
              href='/bookings/me'
              text='My Bookings'
              btnType='navBtnii'
              onClick={() => setIsOpen(false)}
            />
            {user?.role === "admin" && (
              <Button
                href='/admin/dashbaord'
                text='Admin Dashboard'
                btnType='navBtnii'
                onClick={() => setIsOpen(false)}
              />
            )}
            <Button
              href='/'
              text='Log out'
              btnType='navBtnii'
              onClick={logoutHandler}
            />
          </div>
          {navItems.map((navItem, index) => (
            <>
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
            </>
          ))}
        </ul>
        {!user ? (
          <div className={styles.btnContainer}>
            <Button href='/login' text='Login' btnType='navBtn' />
          </div>
        ) : (
          <>
            <div className={styles.btnContainer}>
              <div className={styles.userContainer}>
                <span className={styles.userName} onClick={openMenuii}>
                  Hello {user?.name}
                </span>
                <span>
                  <Down
                    className={
                      isOpenii === false
                        ? styles.down
                        : `${styles.down} ${styles.flip}`
                    }
                    onClick={openMenuii}
                  />
                </span>
              </div>
              <div
                className={
                  isOpenii === false
                    ? styles.menuContainer
                    : `${styles.menuContainer} ${styles.activeMenuContainer}`
                }
              >
                <Link href='/account' className={styles.linkMenuItem} onClick={() => setIsOpenii(false)}>
                  My account
                </Link>
                <Link href='/bookings/me' className={styles.linkMenuItem} onClick={() => setIsOpenii(false)}>
                  My Bookings
                </Link>
                {user?.role === "admin" && (
                  <Link href='/admin/dashboard' className={styles.linkMenuItem} onClick={() => setIsOpenii(false)}>
                    Admin Dashboard
                  </Link>
                )}
                <Button
                  href='/'
                  text='Log out'
                  btnType='navBtnii'
                  onClick={logoutHandler}
                />
              </div>
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
