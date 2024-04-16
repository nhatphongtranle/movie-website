import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundImageSignup from '../components/BackgroundImageSignup';
import Header from '../components/Header';
import { firebaseAuth } from '../utils/firebase-config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate('/');
  });

  return (
    <Container showPassword={showPassword}>
      <BackgroundImageSignup />
      <div className="content">
        <Header login />
        <div className="body-container j-center">
          <div className="body-content a-center">
            <div className="Sign-up">
              <div className="text">
                <h1>Unlimited movies, TV shows and more.</h1>
                <p>Watch anywhere. Cancel anytime.</p>
              </div>
              <div className="form-signup">
                <div className="form-signup-body">
                  <form
                    action=""
                    className="email-form flex column"
                    method="post"
                    aria-label="Sign up or restart your membership with Netflix">
                    <h3>Ready to watch? Enter your email to create or restart membership.</h3>
                    <div className="email-form-input">
                      <input
                        type="email"
                        placeholder="Email address"
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            [e.target.name]: e.target.value,
                          })
                        }
                        name="email"
                        value={formValues.email}
                      />
                      {showPassword && (
                        <input
                          type="password"
                          placeholder="Password"
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              [e.target.name]: e.target.value,
                            })
                          }
                          name="password"
                          value={formValues.password}
                        />
                      )}
                      {!showPassword && (
                        <button
                          className="button-started"
                          type="submit"
                          onClick={() => setShowPassword(true)}>
                          Get Started
                          <div className="ChevronRight">
                            <FontAwesomeIcon className="ChevronRight-icon" icon={faChevronRight} />
                          </div>
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {showPassword && (
            <button className="Button-LogIn" onClick={handleSignIn}>
              Log In
            </button>
          )}
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
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body-container {
      position: relative;
      text-align: center;
      height: 100%;
      color: rgb(255, 255, 255);
      .body-content {
        width: fit-content;
        margin: auto;
        text-align: center;
        .Sign-up {
          -ms-flex-preferred-size: 50%;
          flex-basis: 50%;
          padding: 0;
          z-index: 1;
          width: 100%;
          p {
            margin: 1rem 0 0;
          }
          .form-signup {
            margin: 1.5rem 0 0;
            .form-signup-body {
              text-align: center;
              box-sizing: border-box;
              max-width: 61.5rem;
              margin: 0 auto;
              padding: 0 1.5rem;
              content: '1';
              h3 {
                margin: 0;
              }
              .email-form-input {
                text-align: left;
                position: relative;
                margin: 1rem auto 0;
                width: 100%;
                max-width: 36.625rem;
                display: flex;
                align-items: center;
                input {
                  line-height: 1.5;
                  font-size: 1rem;
                  width: 65%;
                  padding: 1.5rem 1rem 0.5rem;
                  min-height: 16px;
                  min-width: 16px;
                  background: rgba(22, 22, 22, 0.7);
                  border-color: rgba(128, 128, 128, 0.7);
                }
                .password {
                  margin-left: 10px;
                }
                button {
                  appearance: none;
                  font-style: inherit;
                  font-variant: inherit;
                  font-stretch: inherit;
                  font-family: inherit;
                  font-optical-sizing: inherit;
                  font-kerning: inherit;
                  font-feature-settings: inherit;
                  font-variation-settings: inherit;
                  margin-left: 0.5rem;
                  text-decoration: none;
                  -webkit-box-align: center;
                  align-items: center;
                  line-height: 1;
                  user-select: none;
                  border: 0px;
                  border-radius: 0.25rem;
                  cursor: pointer;
                  fill: currentcolor;
                  position: relative;
                  transition-duration: 250ms;
                  transition-property: background-color, border-color;
                  transition-timing-function: cubic-bezier(0.9, 0, 0.51, 1);
                  vertical-align: text-top;
                  width: auto;
                  font-size: 1.5rem;
                  font-weight: 500;
                  min-height: 3.5rem;
                  padding: 0.75rem 1.5rem;
                  background: rgb(229, 9, 20);
                  color: rgb(255, 255, 255);
                }
                .ChevronRight {
                  display: inline-block;
                  height: 1.5rem;
                  .ChevronRight-icon {
                    width: 1rem;
                    height: inherit;
                    margin-left: 0.5rem;
                    margin-right: 0rem;
                    color: rgb(255, 255, 255);
                  }
                }
              }
            }
          }
        }
      }
    }
    .Button-LogIn {
      margin-top: 20px;
      padding: 0.5rem 1rem;
      background-color: #e50914;
      border: none;
      cursor: pointer;
      color: white;
      border-radius: 0.2rem;
      font-weight: bolder;
      font-size: 1.05rem;
    }
  }
`;

export default Signup;
