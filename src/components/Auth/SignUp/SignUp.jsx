import React, { useState } from "react";
import { ReactComponent as BackgroundImage } from "../../../assets/auth/team.svg";
import { ReactComponent as Logo } from "../../../assets/auth/justLikeLogo.svg";
import RoundedButton from "../../Common/RoundedButton/RoundedButton";
import HorizontalSeparatorWithText from "../../Common/HorizontalSeparatorWithText/HorizontalSeparatorWithText";
import TextField from "../../Common/TextField/TextField";
import styles from "./SignUp.module.css";
import { logIn } from "../../../services/AuthService";
import { validateEmail } from "../../../services/validationsService";

function SignUp() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    linkedin: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let error = "";

    if (e.target.name === "email") {
      if (!validateEmail(e.target.value)) {
        error = "כתובת דואר לא חוקית";
      }
    }

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    logIn(data.email, data.password);
  };

  return (
    <div class={styles.main}>
      <div class={styles.form}>
        <form onSubmit={handleSubmit}>
          <div class={styles.formContent}>
            <Logo width="125" height="125" />
            <h1>הרשמה למערכת</h1>
            <TextField
              placeholder="שם פרטי*"
              onChange={handleChange}
              name="firstName"
            />
            <TextField
              placeholder="שם משפחה*"
              onChange={handleChange}
              name="lastName"
            />
            <TextField
              placeholder="קישור לפרופיל לינקדאין*"
              onChange={handleChange}
              name="linkedin"
            />
            <TextField
              placeholder="נייד*"
              onChange={handleChange}
              name="phone"
            />
            <TextField
              placeholder="כתובת מייל*"
              onChange={handleChange}
              name="email"
            />
            <TextField
              placeholder="סיסמא*"
              onChange={handleChange}
              name="password"
            />
            <RoundedButton style="width:50px">להרשמה</RoundedButton>
            <div className={styles.signupContainer}>
              <span>נרשמת?</span>
              <a href="#">להתחברות</a>
            </div>
          </div>
        </form>
      </div>

      <div className={styles.backgoundImageContainer}>
        <BackgroundImage width="722" height="674" />
      </div>
    </div>
  );
}

export default SignUp;
