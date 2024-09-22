import Cookies from "js-cookie";

function getUser() {
  const authCookie = Cookies.get("auth"); // Get the cookie

  if (!authCookie) {
    // If no cookie exists, return null
    return null;
  }

  try {
    const auth = JSON.parse(authCookie); // Parse the JSON string
    return auth?.user || null; // Return the user if available, else null
  } catch (error) {
    console.error("Error parsing auth cookie:", error);
    return null;
  }
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