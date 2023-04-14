import React, { useEffect, useRef, useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./login.scss";
import Toastiy from "./Toastiy";
import SendOtpCode from "./SendOtpCode";

export default function LoginWithNumber() {
  const [numberMobile, setNumberMobile] = useState("");
  const [sendCode, setSendCode] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const boxMobileNumber = useRef(null);
  const boxOtpCode = useRef(null);

  const onChangeMobileNumberHandler = (event) => {
    setNumberMobile(event.target.value);

    if (/^09[0-9]{9}$/g.test(event.target.value)) {
    }
  };

  useEffect(() => {
    if (/^09[0-9]{9}$/g.test(numberMobile)) {
      setSendCode(true);
    } else {
      setSendCode(false);
    }
  }, [numberMobile]);

  const btnSendCodeHandler = () => {
    if (sendCode) {
      setOtpCode(SendOtpCode(numberMobile));
      boxMobileNumber.current.style.display = "none";
      boxOtpCode.current.style.display = "flex";
    } else {
      Toastiy("لطفاً شماره موبایل صحیح وارد نمایید", "info");
    }
  };

  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////

  let [verifiCode, setVerifiCode] = useState({
    num_1: "",
    num_2: "",
    num_3: "",
    num_4: "",
    num_5: "",
  });

  const num1 = useRef(null);
  const num2 = useRef(null);
  const num3 = useRef(null);
  const num4 = useRef(null);
  const num5 = useRef(null);
  const timer = useRef(null);
  let getCode = "";

  const otpCodeChangeHandler = (event) => {
    setVerifiCode({ ...verifiCode, [event.target.name]: event.target.value });

    const [name, idNumber] = event.target.name.split("_");
    switch (Number(idNumber) + 1) {
      case 2:
        num2.current.disabled = false;
        num2.current.focus();
        break;
      case 3:
        num3.current.disabled = false;
        num3.current.focus();
        break;
      case 4:
        num4.current.disabled = false;
        num4.current.focus();
        break;
      case 5:
        num5.current.disabled = false;
        num5.current.focus();
        break;
    }
  };

  useEffect(() => {
    console.log(otpCode);

    getCode =
      verifiCode.num_1 +
      verifiCode.num_2 +
      verifiCode.num_3 +
      verifiCode.num_4 +
      verifiCode.num_5;
  }, [verifiCode]);

  useEffect(() => {

    let intervalTimer,
      count = 0.5;

    count = count * 60;
    let min = Math.floor(count / 60);
    let second = Math.floor(count - min * 60);

    clearInterval(intervalTimer);

    intervalTimer = setInterval(() => {
      second--;
      if (second == 0) {
        if (min == 0) {
          min = 0;
          clearInterval(intervalTimer);
        } else {
          second = min * 60;
          min--;
        }
      }
      if (second < 10) {
        second = "0" + second;
      }

      timer.current.value = "0" + min + ":" + second;

    }, 1000);
  }, []);

  const checkerHandler = () => {
    if (sendCode) {
      if (getCode.length == 5) {
        if (getCode === otpCode) {
          Toastiy("ثبت نام شما کامل شد", "succ");
        } else {
          Toastiy("کد وارد شده صحیح نمی باشد", "err");
        }
      } else {
        Toastiy("لطفاً کد تایید را وارد نمایید.", "err");
      }
    }
  };

  return (
    <>
      <section className="box" ref={boxMobileNumber}>
        <p>ورود</p>
        <p>برای ورود شماره موبایل خود را وارد نمایید</p>

        <input
          type="number"
          maxLength={11}
          value={numberMobile}
          onChange={onChangeMobileNumberHandler}
          className="textInput"
        />
        <input
          type="button"
          className="buttonInputNormal"
          value="ورود"
          onClick={btnSendCodeHandler}
        />
      </section>

      <section className="box" ref={boxOtpCode} style={{ display: "block" }}>
        <p>ورود</p>
        <p>کد تایید دریافتی را در کادر پایین وارد نمایید</p>

        <div className="boxInputNumber">
          <input
            type="text"
            name="num_1"
            ref={num1}
            value={verifiCode.num_1}
            onInput={otpCodeChangeHandler}
            className="textInput"
            maxLength={1}
          />
          <input
            type="text"
            name="num_2"
            ref={num2}
            value={verifiCode.num_2}
            onInput={otpCodeChangeHandler}
            className="textInput"
            maxLength={1}
            disabled
          />
          <input
            type="text"
            name="num_3"
            ref={num3}
            value={verifiCode.num_3}
            onInput={otpCodeChangeHandler}
            className="textInput"
            maxLength={1}
            disabled
          />
          <input
            type="text"
            name="num_4"
            ref={num4}
            value={verifiCode.num_4}
            onInput={otpCodeChangeHandler}
            className="textInput"
            maxLength={1}
            disabled
          />
          <input
            type="text"
            name="num_5"
            ref={num5}
            value={verifiCode.num_5}
            onInput={otpCodeChangeHandler}
            className="textInput"
            maxLength={1}
            disabled
          />
        </div>

        <div className="boxTimer">
          <input
            type="button"
            className="buttonInputNonBorder"
            value=""
            onClick={checkerHandler}
            ref={timer}
          />
          <input
            type="button"
            className="buttonInputNormal"
            value="ورود"
            onClick={checkerHandler}
          />
        </div>
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
