import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="home-v2 home-footer-v2">
                <div className="container-home">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="cookie-modal">
                                <div className="mobile"></div>
                            </div>
                            <div className="about-block">
                                <h2>About</h2>
                                <p className="footer-desc">
                                    Nannybag is the first collaborative luggage storage
                                    network at partner shops around the world. Your
                                    luggage will never again keep you from enjoying your
                                    trip!
                                </p>
                                <div className="socials-icons">
                                    <span className="nanny-icon insta-icon"></span>
                                    <span className="nanny-icon tiktok-icon"></span>
                                    <span className="nanny-icon fb-icon"></span>
                                    <span className="nanny-icon linkedin-icon"></span>
                                    <span className="nanny-icon twitter-icon"></span>
                                </div>
                            </div>
                            <div className="copyright hide-tablet">
                                © 2024 Nannybag.<br />
                                <a href="/en/terms-conditions">Terms and Conditions</a> |{' '}
                                <a href="/en/legal-notices">Legal notices</a> |{' '}
                                <a href="/en/privacy-policy">Privacy policy</a> |{' '}
                                <span>Cookie Management</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-2">
                            <p className="title-footer">Useful links 👇</p>
                            <span className="link-footer">Become a partner</span><br />
                            <a href="/en/luggage-storage-cities" className="link-footer">All our cities</a><br />
                            <span className="link-footer">Affiliation</span><br />
                            <a href="https://fr.trustpilot.com/review/nannybag.com" target="_blank" className="link-footer">Reviews</a><br />
                            <span className="link-footer last">Jobs</span>
                        </div>
                        <div className="col-12 col-md-2">
                            <p className="title-footer">Resources 📚</p>
                            <span className="link-footer d-none">Press</span>
                            <span className="link-footer cursor-pointer">FAQ</span><br />
                            <span className="link-footer last">Guides</span>
                        </div>
                        <div className="col-12 col-md-2">
                            <div id="tp-widget-wrapper" className="tp-widget-wrapper visible">
                                <a id="profile-link" target="_blank" href="https://fr.trustpilot.com/review/nannybag.com?utm_medium=trustbox&utm_source=MicroStar" className="tp-link">
                                    <div id="trust-score" className="tp-widget-trustscore">
                                        4.6/5<span> - 7890 reviews</span>
                                    </div>
                                    <div id="tp-widget-stars" className="tp-widget-stars">
                                        <div>
                                            <div className="tp-stars tp-stars--4 tp-stars--4--half">
                                                <div className="tp-widget-stars-block">
                                                    <svg viewBox="0 0 251 46" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0' }}>
                                                        {/* Star SVG paths */}
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tp-widget-logo" className="tp-widget-logo">
                                        <div>
                                            <div style={{ position: 'relative', height: '0', width: '100%', padding: '0', paddingBottom: '24.6031746031746%' }}>
                                                <svg viewBox="0 0 126 31" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0' }}>
                                                    {/* Trustpilot logo */}
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 tablet">
                            <div className="copyright">
                                © 2024 Nannybag.<br />
                                <span>Terms and Conditions</span> | <span>Legal notices</span> |{' '}
                                <span>Privacy policy</span> | <span>Cookie Management</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
