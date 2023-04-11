import React, { useEffect, useRef, useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./loginNumber.scss";
import Toastiy from "./Toastiy";

export default function LoginWithNumber() {
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
  const btnChecker = useRef(null);
  const timer = useRef(null);

  const changeHandler = (event) => {
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
        btnChecker.current.disabled = false;
        break;
    }
  };

  useEffect(() => {
    // console.log(
    //   verifiCode.num_1 +
    //     verifiCode.num_2 +
    //     verifiCode.num_3 +
    //     verifiCode.num_4 +
    //     verifiCode.num_5
    // );
  }, [verifiCode]);

  useEffect(() => {
    let intervalTimer,
      count = 1.5;

    count = count * 60;
    let min = Math.floor(count / 60);
    let second = Math.floor(count - min * 60);

    clearInterval(intervalTimer);

    intervalTimer = setInterval(() => {
      second--;

      if (second == 1) {
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
      timer.current.innerText = "0" + min + ":" + second;
      // timer.current.innerText = second;
    }, 1000);
  }, []);

  return (
    <>
      <section className="box">
        <p>ورود</p>
        <p>کد تایید دریافتی را در کادر پایین وارد نمایید</p>

        <div className="boxInputNumber">
          <input
            type="text"
            name="num_1"
            ref={num1}
            value={verifiCode.num_1}
            onInput={changeHandler}
            className="textInput"
            maxLength={1}
          />
          <input
            type="text"
            name="num_2"
            ref={num2}
            value={verifiCode.num_2}
            onInput={changeHandler}
            className="textInput"
            maxLength={1}
            disabled
          />
          <input
            type="text"
            name="num_3"
            ref={num3}
            value={verifiCode.num_3}
            onInput={changeHandler}
            className="textInput"
            maxLength={1}
            disabled
          />
          <input
            type="text"
            name="num_4"
            ref={num4}
            value={verifiCode.num_4}
            onInput={changeHandler}
            className="textInput"
            maxLength={1}
            disabled
          />
          <input
            type="text"
            name="num_5"
            ref={num5}
            value={verifiCode.num_5}
            onInput={changeHandler}
            className="textInput"
            maxLength={1}
            disabled
          />
        </div>

        <div className="boxTimer">
          <p className="timer" ref={timer}></p>
          <input
            type="button"
            className="buttonInputNormal"
            value="ورود"
            ref={btnChecker}
            disabled
          />
        </div>
      </section>

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
