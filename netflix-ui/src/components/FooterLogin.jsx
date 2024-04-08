import React from 'react';
import styled from 'styled-components';

export default function FooterLogin() {
  return (
    <Footer className="Footer-login-pages">
      <footer className="Footer-body">
        <div className="Footer-content">
          <div className="container">
            <div className="item-1">
              <div className="item-content">
                <a href="https://help.netflix.com/contactus">Question? Contact us</a>
              </div>
            </div>
            <div className="item-2">
              <div className="item-body">
                <ul className="item-container">
                  <li className="list-item">
                    <a className="footer-link" href="https://help.netflix.com/support/412">
                      FAQ
                    </a>
                  </li>
                  <li className="list-item">
                    <a className="footer-link" href="https://help.netflix.com/">
                      Help Center
                    </a>
                  </li>
                  <li className="list-item">
                    <a className="footer-link" href="https://help.netflix.com/legal/termsofuse">
                      Terms of Use
                    </a>
                  </li>
                  <li className="list-item">
                    <a className="footer-link" href="https://help.netflix.com/legal/privacy">
                      Privacy
                    </a>
                  </li>
                  <li className="list-item">
                    <a className="footer-link" href="#">
                      Cookie Preference
                    </a>
                  </li>
                  <li className="list-item">
                    <a className="footer-link" href="https://help.netflix.com/legal/corpinfo">
                      Corporate Information
                    </a>
                  </li>
                </ul>
              </div>
            </div>  
          </div>
        </div>
      </footer>
    </Footer>
  );
}

const Footer = styled.div`
  height: 17.5rem;
  background-color: rgba(0, 0, 0, 0.7);
  border-top: 1px solid rgba(128, 128, 128, 0.7);
  .Footer-body {
    color: rgba(255, 255, 255, 0.7);
    margin: auto;
    font-size: 1rem;
    font-weight: 400;
    margin: 3rem 0 3rem 0;
    padding: 0 2rem 0 2rem;
    .Footer-content {
      box-sizing: border-box;
      width: 100%;
      display: inherit;
      height: auto;
      .container {
        display: inline-flex;
        flex-wrap: wrap;
        height: inherit;
        margin-top: -0px;
        margin-left: -0px;
        width: 100%;
        flex-direction: row;
        padding: 0px;
        .item-1 {
          display: inline-flex;
          flex-wrap: wrap;
          width: inherit;
          padding: 0px;
          .item-content {
            margin-bottom: 0.75rem;
            a {
              color: rgba(255, 255, 255, 0.7);
              border-radius: 0.125rem;
            }
          }
        }
        .item-2 {
          display: inline-flex;
          flex-wrap: wrap;
          width: inherit;
          padding: 0px;
          .item-body {
            margin: 0.75rem 0;
            width: 100%;
            font-size: 0.875rem;
            font-weight: 400;
            .item-container {
              display: inline-flex;
              flex-wrap: wrap;
              height: inherit;
              margin-top: -1rem;
              margin-left: -0.75rem;
              width: calc(100% + 0.75rem);
              flex-direction: row;
              padding: 0px;
              .list-item {
                display: -webkit-inline-box;
                display: -webkit-inline-flex;
                display: -ms-inline-flexbox;
                display: inline-flex;
                -webkit-box-flex-wrap: wrap;
                -webkit-flex-wrap: wrap;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                width: inherit;
                padding: 0px;
                -webkit-flex: 0 0 calc(50% - 0.75rem);
                -ms-flex: 0 0 calc(50% - 0.75rem);
                flex: 0 0 calc(50% - 0.75rem);
                margin-top: 1rem;
                margin-left: 0.75rem;
                margin-bottom: 14px;
              }
            }
          }
        }
      }
    }
  }
`;
