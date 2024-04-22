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
        <section>
          <div className="text">
            <h1>Enjoy on your TV.</h1>
            <p>
              Watch on smarts TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more
            </p>
          </div>
          <div className="media play-1">
            <div>
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                alt=""
              />
              <video
                autoPlay=""
                playsInline=""
                muted=""
                loop=""
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4"></video>
            </div>
          </div>
        </section>
        <section>
          <div className="text">
            <h1>Download your shows to watch offline</h1>
            <p>Save your favorites easily and always have something to watch</p>
          </div>
          <div className="media">
            <div>
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                alt=""
              />
              <div className="download">
                <img
                  className="cover"
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  alt=""
                />
                <span>Downloading...</span>
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="text">
            <h1>Watch everywhere</h1>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV</p>
          </div>
          <div className="media play-3">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-vn.png"
              alt=""
            />
            <video
              autoPlay=""
              playsInline=""
              muted=""
              loop=""
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-vn.m4v"
              type="video/mp4"></video>
          </div>
        </section>
        <section className="last">
          <div className="text">
            <h1>Create profiles for kids</h1>
            <p>
              Send kids on adventures with their favorite character in a space made just for them--
              free with your membership.
            </p>
          </div>
          <div className="media">
            <img
              src="https://occ-0-395-64.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
              alt=""
            />
          </div>
        </section>
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
