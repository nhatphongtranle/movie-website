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

const Footer = styled.div``;
