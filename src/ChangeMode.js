export default function ChangeMode(mode) {
 
 
    switch (mode) {
    case "light":
      break;
    case "dark":
      const root = document.querySelector(":root");
      root.style.setProperty("--background", "#14162E");
      root.style.setProperty("primeryColorDarker", "#1F1D36");
      root.style.setProperty("--textcolor-white", "#000");
      root.style.setProperty("--back-dropdown", "#0a0d26");
      root.style.setProperty("--shadow-btn-accunt", "0px 8px 15px #ffffff20");
      root.style.setProperty("--footer-background", "#070818");

//       $primeryColor : #bdb2ff;
// $primeryColorDarker : #9181e9;
// $secoundColor : #ffadad;
// $whiteColor: #fff;
// $blackColor: #202020;
// $backGroudColor : #fffffc;

// $redSecurity : #ee6055;
// $yellowSecurity : #FAAB78;
// $greenLightSecurity : #9BB67C;
// $greenSecurity : #5AA469;



      break;
    default:
      break;
  }
}
