import { resolve, reject } from "./response-status-auth";

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
      } else {
        reject();
      }
    })
    .catch((err) => console.log(err));
}

export default authWithEmailAndPassword;
