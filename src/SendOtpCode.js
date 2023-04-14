// const MelipayamakApi = require('melipayamak-api')

export default function SendOtpCode(mobileNumber) {


  let otp = "" + Math.floor(Math.random() * 89999 + 10000);
  return otp;

  // const username = "09045352506";
  // const password = "0NCPQ";
  // const api = new MelipayamakApi(username, password);
  // const sms = api.sms();
  // const to = mobileNumber;
  // const from = "50000..";
  // const text = `کد ورود: ${otp} لوگین پیج`;
  // // 50004001352506
  // sms
  //   .send(to, from, text)
  //   .then((res) => {
  //     console.log(res);
  //     //RecId or Error Number
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
}
