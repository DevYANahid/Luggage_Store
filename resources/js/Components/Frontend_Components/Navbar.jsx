import React from 'react';

const Navbar = () => {
  const openNav = () => {
    document.getElementById("mySidebar").style.width = "auto";
  };

  const closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
  };

  return (
    <div className="home-page">
      <div className="container-home">
        <div className="bar-home-menu">
          <div>
            <a href="/en" aria-current="page" title="Nannybag" className="nuxt-link-exact-active nuxt-link-active">
              <div className="menu-logo"><img src="./assets/images/logo_blanc.52bbce7.png" alt="" /></div>
            </a>
            <div className="desktop hide-tablet top-menu-v2 book-menu-bar"></div>
          </div>
          <div className="d-flex btn-top-bar">
            <div className="service-menu-block">
              <div className="btn-menu-top service-menu no-buttons menu-drop-down hide-tablet">
                <span className="desktop hide-tablet">Luggage storage</span>
              </div>
              <div className="tablet">
                <div className="content-btn-service">
                  <div className="btn-service-storage transform duration-300 ease-in-out selected">
                    <span className="nanny-icon service-storage selected"></span>
                  </div>
                  <div className="btn-service-shipment duration-300 transform ease-in-out">
                    <span className="nanny-icon service-shipment"></span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="btn-menu-top no-buttons lang menu-drop-down">
                <div className="lang-flag desktop-display">
                </div> <span className="hide-tablet desktop">EN</span>
              </div>
            </div>
            <button aria-label="Menu" onClick={openNav} className="btn-menu-top login-btn">
              <div className="content login">
                <span className="nanny-icon menu"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div id="mySidebar" className="sidebar">
        <button className="closebtn" onClick={closeNav}>&times;</button>
        <div className="inner-menu-login not-connected">
          <div className="inside">
            <div className="container-home">
              <div className="hello-menu">Hello,<br /><span className="color-nanny">dear traveler.</span>
              </div>
              <div>
                <div className="social-button-group">
                  <button className="social-button-login margin-r-15"><i className="social-icon facebook fs-18"></i>Continue with Facebook</button>
                  <button className="social-button-login"><i className="social-icon google"></i>Continue with Google</button>
                </div>
              </div>
              <div className="d-none d-md-block">
                <div className="login-or">
                  Or via email
                </div>
                <form name="loginForm" noValidate role="form" autoComplete="off">
                  <div className="login-form-v2">
                    <div className="email">
                      <input placeholder="Email" type="email" name="loginEmail" required className="form-style-v2" />
                      <div className="text-left" style={{ display: "none" }}> </div>
                    </div>
                    <div className="position-relative">
                      <input placeholder="Password" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" name="loginPassword" required type="password" className="form-style-v2" />
                      <div className="input-icon-right-container">
                        <div className="nanny-icon input-icon-right opened-eye"></div>
                      </div>
                      <div className="text-left" style={{ display: "none" }}> </div>
                    </div>
                  </div>
                  <div className="login-subtitle font-weight-bold color-nanny underline cursor-pointer">
                    Forgot Password?
                  </div>
                  <input type="submit" value="Login" className="nanny-btn-login" />
                </form>
              </div>
              <input value="Login" type="button" className="margin-t-10 nanny-btn-login d-md-none" />
              <div className="login-subtitle">
                No account? <span className="font-weight-bold color-nanny underline cursor-pointer">Register</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;