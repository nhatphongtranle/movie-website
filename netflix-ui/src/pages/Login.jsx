import React, { useState } from "react";
import styled from "styled-components";
//import logo from "../assets/logo.png";
//import background from "../assets/login.jpg";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error.code);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form wth">
            <header className="title">
                <h1 className="login-page-title mg-bt">Sign In</h1>
            </header>
            <form className="Signin-form" aria-label="Sign In" method="post">
              <input className="Form-input"
                type="text"
                placeholder="Email or phone number"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button onClick={handleLogin}>Sign In</button>
            </form>
            <footer className="footer">
              <div className="remember-checkbox">
                <input 
                  type="checkbox" 
                  id="Remember-me"
                  name="Rememberme"
                />
                <label htmlFor="" className="Remember-me-label">Remember me</label>
              </div>
              <p className="Login-signup-now">New to Netflix?
                <a className="Sign-up">Sign up now</a>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      flex-grow: 1;
      margin: 0 auto;
      padding: 0 5%;
      .form {
        border-radius: 4px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 4rem;
        background-color: #000000b0;
        color: white;
        .title {
          text-align: left;
        }
        .login-page-title {
          margin-block-start: 0;
          margin-block-end: 0;
          margin: 0;
          font-size: 2rem;
          font-weight: 700;
          padding: 0;
          color: rgb(255,255,255)
        }
        .Signin-form {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          gap: 16px;
          padding: none;
          input {
            padding: 0.5rem 1rem;
            font-size: 1rem;
            line-height: 1.5;
            padding: 1rem;
            font-weight: 400;
            color: rgb(255, 255, 255);
            background: rgba(22, 22, 22, 0.7);
            border-color: rgba(128, 128, 128, 0.7);
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            transition: inherit:
            border-style: solid;
            border-width: 0.06rem;
            border-radius: 0.1875rem;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
      }
      .footer {
        margin-top: 20px;
        .remember-checkbox {
          display: inline-block;
        }
        .Remember-me-label {
          font-size: 1rem;
          line-height: initial;
          color: rgb(255, 255, 255);
          padding-left: 0.75rem;
          flex: 1 1 0%;
        }
        .Login-signup-now {
          margin-block-start: 0;
          margin-block-end: 0;
          margin: 0;
          padding: 0;
          color: rgba(255, 255, 255, 0.7);
          font-size: 1rem;
          font-weight: 400;
          margin-top: 16px;
          .Sign-up {
            color: rgb(255, 255, 255);
            font-weight: 500;
            cursor: pointer;
            padding-left: 0.5rem;
          }
        }
      }
    }
  }
`;

export default Login;
