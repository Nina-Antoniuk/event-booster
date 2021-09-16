import { resolve, reject } from "./responseOnStatus";
import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.min.css";

function authWithEmailAndPassword(email, password, link) {
  return fetch(`${link}`, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => {
      if (r.status === 200) {
        resolve();
        new Notify({
          status: "success",
          title: "Authorization completed",
          text: "Authorization completed",
          effect: "fade",
          type: 1,
        });
      } else {
        reject();
        new Notify({
          status: "error",
          title: "Try again",
          text: "Try again",
          effect: "fade",
          type: 1,
        });
      }
    })
    .catch((err) => console.log(err));
}

export default authWithEmailAndPassword;
