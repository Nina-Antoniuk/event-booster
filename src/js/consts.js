const API_KEY = "Iks6oDIpGdxCIBqWeGHShYrO2fcgxZEd";
const API_KEY_FIREBASE = "AIzaSyC1ZrE8wfTMzQComHl8bVNa053NAxSTKFI";

const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
const signInFetchLink = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY_FIREBASE}`;
const logInFetchLink = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY_FIREBASE}`;

export { API_KEY, BASE_URL, signInFetchLink, logInFetchLink };
