import { useRouter } from "next/router";
import Cookies from "js-cookie";

function getUser() {
  const auth = Cookies.get("auth");
  if (auth) {
    try {
      const parsedAuth = JSON.parse(auth); // Parse the JSON string
      return parsedAuth.user; // Access the `user` object
    } catch (error) {
      console.error("Error parsing auth cookie:", error);
      return null;
    }
  }
  return null;
}


function getToken() {
      const auth = JSON.parse(localStorage.getItem("auth"));
      if (auth) {
        return auth.access;
      }
      return null;
}

function logout(router) {
      Cookies.remove("auth");
      router.push("/login");
}

export { getUser, getToken  , logout };