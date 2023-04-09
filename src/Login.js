import React, { useEffect, useRef, useState } from "react";

import "./login.scss";

export default function Login() {
  let emailInput = useRef();
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");

  const securityWidth = useRef(null);
  const hintPassSecurity = useRef(null);
  let security = 0;

  const regexAlphabet = /[a-zA-Z]{1}[a-zA-Z]{1}/g;
  const regexSpecialAlphabet = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{1}/g;
  const regexDigits = /\d/g;

  useEffect(() => {
    emailInput.current.focus();
  }, []);

  useEffect(() => {
    if (!email) {
    } else {
      const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      if (re.test(email)) {
        console.log(email);
      }
    }
  }, [email]);

  useEffect(() => {
    regexAlphabet.test(pass) && (security = security + 25);
    regexSpecialAlphabet.test(pass) && (security = security + 25);
    regexDigits.test(pass) && (security = security + 25);
    pass.length >= 8 && (security = security + 25);

    pass.length
      ? (hintPassSecurity.current.style.visibility = "visible")
      : (hintPassSecurity.current.style.visibility = "hidden");

    switch (security) {
      case 25:
        securityWidth.current.style.backgroundColor = "#ee6055";
        break;
      case 50:
        securityWidth.current.style.backgroundColor = "#ffd97d";
        break;
      case 75:
        securityWidth.current.style.backgroundColor = "#a8e6cf";
        break;
      case 100:
        securityWidth.current.style.backgroundColor = "#60d394";
        break;
      default:
        securityWidth.current.style.backgroundColor = "";
        break;
    }
    securityWidth.current.style.width = `${security}%`;
  }, [pass]);

  return (
    <>
      <section className="box">
        <p>ورود</p>
        <p>برای ورود مشخصات خواسته شده را وارد نمایید</p>

        <input
          type="text"
          className="textInput"
          placeholder="ایمیل"
          ref={emailInput}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type="text"
          className="textInput"
          placeholder="رمز عبور"
          value={pass}
          onChange={(event) => setPass(event.target.value)}
        />

        <div className="securityBody">
          <div></div>
          <div ref={securityWidth}></div>
        </div>

        <p ref={hintPassSecurity}>
          از حروف الفبا بزرگ و کوچک، اعداد و کارکتر های خاص استفاده نمایید.
        </p>

        <input type="button" className="buttonInputNormal" value="ورود" />
      </section>
    </>
  );
}
