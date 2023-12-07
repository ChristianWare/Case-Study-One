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
import Image from "next/image";

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
        <div className={styles.logo}>
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
        </ul>
        {/* <div className={styles.btnContainer}>
          <Button href='/' text='Login' btnType='navBtn' />
        </div> */}
        {user ? (
          <div className='ml-4 dropdown d-line'>
            <button
              className='btn dropdown-toggle'
              type='button'
              id='dropdownMenuButton1'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              <figure className='avatar avatar-nav'>
                <Image
                  src={
                    user?.avatar
                      ? user?.avatar?.url
                      : "/images/default_avatar.jpg"
                  }
                  alt='John Doe'
                  className='rounded-circle placeholder-glow'
                  height='50'
                  width='50'
                />
              </figure>
              <span className='placeholder-glow ps-1'>{user?.name}</span>
            </button>

            <div
              className='dropdown-menu w-100'
              aria-labelledby='dropdownMenuButton1'
            >
              {user?.role === "admin" && (
                <Link href='/admin/dashboard' className='dropdown-item'>
                  Dashboard
                </Link>
              )}
              <Link href='/bookings/me' className='dropdown-item'>
                My Bookings
              </Link>
              <Link href='/me/update' className='dropdown-item'>
                Profile
              </Link>
              <Link
                href='/'
                className='dropdown-item text-danger'
                onClick={logoutHandler}
              >
                Logout
              </Link>
            </div>
          </div>
        ) : (
          <>
            {data === undefined && (
              <div className='placeholder-glow'>
                <figure className='avatar avatar-nv placeholder bg-secondary'></figure>
                <span className='placeholder w-25 bg-secondary ms-2'></span>
              </div>
            )}
            {data === null && (
              <Link
                href='/login'
                className='btn btn-danger px-4 text-white login-header-btn float-right'
              >
                Login
              </Link>
            )}
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
