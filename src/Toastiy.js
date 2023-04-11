import { toast } from "react-toastify";

export default function Toastiy(message, type) {

  const position = "bottom-left";
  const autoClose = 5000 ;
  const theme = "light";

  switch (type) {
    case "err":
      toast.error(message, {
        position: position,
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
      });
      break;
    case "warn":
      toast.warn(message, {
        position:position ,
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
      });
      break;
    case "succ":
      toast.success(message, {
        position: position,
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
      });
      break;
    case "info":
      toast.ifo(message, {
        position: position,
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
      });
      break;
  }
}
