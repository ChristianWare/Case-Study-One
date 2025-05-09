"use client";

import { useForgotPasswordMutation } from "../../redux/api/authApi";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import styles from "../../components/auth/Login.module.css";
import ContentPadding from "../ContentPadding/ContentPadding";
import FalseButton from "../FalseButton/FalseButton";
import { useRouter } from "next/navigation";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import Nav from "../Nav/Nav";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const [forgotPassword, { isLoading, error, isSuccess }] =
    useForgotPasswordMutation();

  useEffect(() => {
    if (error && "data" in error) {
      // toast.error(error?.data?.errMessage);
      toast.error("Error, Forgotpassword.tsx");
    }

    if (isSuccess) {
      toast.success("Email sent successfully");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isSuccess]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = { email };

    forgotPassword(userData);
  };

  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <main>
      <div className={styles.container}>
      <Nav color='blue' assetColor='blue' hamburgerColor='blueHamburger' />
        <LayoutWrapper>
          <ContentPadding>
            <h2 className={styles.heading}>Forgot Password</h2>
            <form className={styles.form} onSubmit={submitHandler}>
              <div className={styles.lableInputBox}>
                <label htmlFor='email_field' className='form-label'>
                  {" "}
                  Enter Email{" "}
                </label>
                <input
                  type='email'
                  id='email_field'
                  className='form-control'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.btnContainer}>
                <FalseButton
                  btnType='secondary'
                  text={isLoading ? "Loading..." : "Submit"}
                  disabled={isLoading}
                />
                <FalseButton
                  btnType='primary'
                  text={"Go Home"}
                  onClick={goHome}
                />
              </div>
            </form>
          </ContentPadding>
        </LayoutWrapper>
      </div>
    </main>
  );
};
export default ForgotPassword;
