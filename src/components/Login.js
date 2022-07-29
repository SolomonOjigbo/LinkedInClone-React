import React, { useState } from "react";
import "./styles/Login.css";
import LinkedInLogo from "../images/Linkedin-Logo.png"
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";




function Login({ login }) {
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(selectUser)

  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profileUrl: userAuth.user.photoURL,
        }));
      })
      .catch((error) => alert(error));
  };

  const register = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Please enter required fields");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profile,
          })
          .then(() => {
            dispatch(login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: profile,
            }));
          });
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <img
        src={LinkedInLogo}
        height="150px"
        width="250px"
        alt=""
      />
      <form>
        <input
          type="text"
          placeholder="Full Name(Required if registering)"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Profile pic URL (optional)"
          value={profile}
          onChange={(e) => {
            setProfile(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email (required)"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password (required)"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
        <p>
          Not a member? <span><button onClick={register}>Register Now</button></span>
        </p>
      </form>
    </div>
  );
}

export default Login;
