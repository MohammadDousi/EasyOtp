import React, { useEffect, useRef, useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./login.scss";
import Toastiy from "./Toastiy";

export default function Login() {
  let [data, setData] = useState({ email: "", pass: "" });
  let [error, setError] = useState({});
  let [touched, setTouched] = useState({});

  const securityWidth = useRef(null);
  const bodySecurity = useRef(null);
  let hintPassSecurity = useRef(null);

  let security = 0;

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const onFocusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  useEffect(() => {
    if (!data.email) {
      error.email = "Invalid";
    } else {
      const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      if (re.test(data.email)) {
        delete error.email;
      } else {
        error.email = "Invalid format email";
      }
    }

    if (!data.pass) {
      error.pass = true;
      bodySecurity.current.style.visibility = "hidden";
    } else {
      bodySecurity.current.style.visibility = "visible";
      hintPassSecurity.current.style.visibility = "visible";
      delete error.pass;

      /[a-zA-Z]{1}[a-zA-Z]{1}/g.test(data.pass) && (security = security + 25);
      /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{1}/g.test(data.pass) &&
        (security = security + 25);
      /\d/g.test(data.pass) && (security = security + 25);
      data.pass.length >= 8 && (security = security + 25);
    }
    let reg = "",
      color;

    switch (security) {
      case 25:
        color = "#ee6055";
        reg = "رمز عبور بسیار ضعیف است.";
        break;
      case 50:
        color = "#FAAB78";
        reg = "رمز عبور ضعیف است.";
        break;
      case 75:
        color = "#9BB67C";
        reg = "رمز عبور قوی است.";
        break;
      case 100:
        color = "#5AA469";
        reg = "رمز عبور بسیار قوی است.";
        break;
      default:
        color = "";
        break;
    }

    securityWidth.current.style.width = `${security}%`;
    securityWidth.current.style.backgroundColor = color;
    hintPassSecurity.current.innerText = reg;
    hintPassSecurity.current.style.color = color;
  }, [data, touched]);

  const loginBtnHandler = () => {
    if (data.email && data.pass && !error.email && !error.pass) {
      Toastiy("ایول همچی درسته", "succ");
    }
  };

  return (
    <>
      <section className="box">
        <p>ورود</p>
        <p>برای ورود مشخصات خواسته شده را وارد نمایید</p>

        <input
          type="text"
          className="textInput"
          placeholder="ایمیل"
          name="email"
          value={data.email}
          onChange={changeHandler}
          onFocus={onFocusHandler}
          style={
            error.email &&
            touched.name && { border: "2px solid  rgba(238, 96, 85,0.5)" }
          }
        />

        <input
          type="text"
          className="textInput"
          placeholder="رمز عبور"
          name="pass"
          value={data.pass}
          onChange={changeHandler}
          onFocus={onFocusHandler}
          style={
            error.pass &&
            touched.name && { border: "2px solid  rgba(238, 96, 85,0.5)" }
          }
        />

        <div className="securityBodyMain">
          <div className="securityBody" ref={bodySecurity}>
            <div></div>
            <div ref={securityWidth}></div>
          </div>
        </div>

        <p className="hintSecurity" ref={hintPassSecurity}></p>

        <input
          type="button"
          className="buttonInputNormal"
          value="ورود"
          onClick={loginBtnHandler}
        />
      </section>
      <p className="createBy">ساخته شده با ❤️ - محمد دوسی </p>

      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
