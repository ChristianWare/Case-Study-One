"use client";

import styles from "./Nav.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "../Button/Button";
import { setIsAuthenticated, setUser } from "../../redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { signOut, useSession } from "next-auth/react";
import Down from "../../public/icons/down.svg";
import toast from "react-hot-toast";
import Asset from "../../public/icons/asset.svg";

interface Props {
  color?: string;
  assetColor?: string;
  hamburgerColor?: string;
}

export default function Nav({
  color = "",
  assetColor = "",
  hamburgerColor = "",
}: Props) {
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

  const router = useRouter();

  const logoutHandler = () => {
    router.push("/");
    setIsOpen(false);
    signOut();
    toast.success("Logged Out");
  };

  const navItems = [
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Stay",
      href: "/properties",
    },
    {
      text: "Activities",
      href: "activities",
    },
    {
      text: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul
          className={
            isOpen === false
              ? styles.navMenu
              : `${styles.navMenu} ${styles.active}`
          }
        >
          <div className={styles.userNameMobile}>
            {user && user?.name && (
              <>
                <div className={styles.mobileImageNameContainer}>
                  {user && user?.name ? `Hi, ${user.name}:` : ""}
                </div>
              </>
            )}
            {user && user?.name ? (
              <>
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
                    href='/admin/dashboard'
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
              </>
            ) : (
              <>
                <Button
                  href='/login'
                  text='Login'
                  btnType='navBtnii'
                  onClick={() => setIsOpen(false)}
                />
                <Button
                  href='/register'
                  text='Register'
                  btnType='navBtnii'
                  onClick={() => setIsOpen(false)}
                />
              </>
            )}
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
                  className={`${styles.navItem} ${styles[color]}`}
                >
                  {navItem.text}
                </Link>
              </li>
            </>
          ))}
        </ul>
        <div className={styles.logoContainer}>
          <Link href='/' className={`${styles.logo} ${styles[color]}`}>
            <span className={styles.asset}>
              <Asset
                width={25}
                height={25}
                className={`${styles.asset} ${styles[assetColor]}`}
              />
            </span>
            E. R. Rentals
          </Link>
        </div>
        {!user ? (
          <div className={styles.btnContainer}>
            <Button href='/login' text='Login' btnType='navBtn' />
          </div>
        ) : (
          <>
            <div className={styles.btnContainer}>
              <div className={styles.userContainer}>
                <span className={styles.userName} onClick={openMenuii}>
                  <div className={styles.imgContainer}>
                    {/* <Image
                      src={user?.avatar.url}
                      width={40}
                      height={40}
                      alt={user?.name}
                      className={styles.img}
                    /> */}
                  </div>
                  <div className={styles.hello}>Hello {user?.name}</div>
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
                <Link
                  href='/account'
                  className={styles.linkMenuItem}
                  onClick={() => setIsOpenii(false)}
                >
                  My account
                </Link>
                <Link
                  href='/bookings/me'
                  className={styles.linkMenuItem}
                  onClick={() => setIsOpenii(false)}
                >
                  My Bookings
                </Link>
                {user?.role === "admin" && (
                  <Link
                    href='/admin/dashboard'
                    className={styles.linkMenuItem}
                    onClick={() => setIsOpenii(false)}
                  >
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
          <span
            className={`${styles.whiteBar} ${styles[hamburgerColor]}`}
          ></span>
          <span
            className={`${styles.whiteBar} ${styles[hamburgerColor]}`}
          ></span>
          <span
            className={`${styles.whiteBar} ${styles[hamburgerColor]}`}
          ></span>
        </span>
      </nav>
    </header>
  );
}
