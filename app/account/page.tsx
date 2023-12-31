"use client";

import ContentPadding from "../../components/ContentPadding/ContentPadding";
import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import styles from "./AccountPage.module.css";
import { useAppSelector } from "../../redux/hooks";
import Link from "next/link";

const options = [
  {
    option: "My Bookings",
    desc: "See all of your bookings, and view receipts and confirmation statements.",
    href: "/bookings/me",
  },
  {
    option: "Update Account",
    desc: "Update your username, email and password",
    href: "/me/update",
  },
];

const AccountPage = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <LayoutWrapper>
      <ContentPadding>
        {user ? (
          <>
            <div className={styles.top}>
              <h1>
                Hi, <span className={styles.userName}>{user?.name} 👋</span>
              </h1>
              <h2>What would you like to do today?</h2>
            </div>
            <div className={styles.bottom}>
              {options.map((x, index) => (
                <Link href={x.href} key={index} className={styles.box}>
                  <h3 className={styles.option}>{x.option}</h3>
                  <p className={styles.desc}>{x.desc}</p>
                </Link>
              ))}
              {user?.role === "admin" && (
                <Link href='/admin/dashboard' className={styles.box}>
                  <h3 className={styles.option}>Admin Dashboard</h3>
                  <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi non omnis quo iusto repellendus distinctio
                    quibusdam ad aliquid blanditiis voluptatem!
                  </p>
                </Link>
              )}
            </div>
          </>
        ) : (
          <>
            <h1>You need to be logged in to access this page.</h1>
            <Link href='/login'>
              Login
            </Link>
          </>
        )}
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default AccountPage;
