import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__top">
                    {/* Left Side */}
                    <div className="footer__left">
                        <div className="footer__logo">
                            <Link to="/">
                                <img
                                    src={props.logo}
                                    alt="logo"
                                    className="footer__logo-img"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="footer__right">
                        <div className="footer__column">
                            <div className="footer__block">
                                <h4 className="footer__label">
                                    Business Address
                                </h4>
                                <p className="footer__text">
                                    50 Milner St., Winnipeg
                                </p>
                                <small className="footer__subtext">
                                    <strong>MB, R2X 2X3</strong>
                                </small>
                            </div>
                            <div className="footer__block">
                                <h4 className="footer__label">
                                    Mailing Address
                                </h4>
                                <p className="footer__text">
                                    218 Daylan Marshall Gate, Winnipeg
                                </p>
                                <small className="footer__subtext">
                                    <strong>MB, R2P 1X8</strong>
                                </small>
                            </div>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className="footer__right">
                        <div className="footer__column">
                            <div className="footer__block">
                                <h4 className="footer__label">Working Hours</h4>
                                <p className="footer__text">
                                    Mon-Fri:{" "}
                                    <strong>
                                        <small>7:00 AM - 5:00 PM</small>
                                    </strong>
                                    <br />
                                    Sat:{" "}
                                    <strong>
                                        <small>9:00 AM - 4:00 PM</small>
                                    </strong>
                                </p>
                            </div>
                            <div className="footer__block">
                                <h4 className="footer__label">Contact</h4>
                                <p className="footer__text">
                                    204-914-0288 <br />
                                    204-955-5024
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer__divider" />

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © 2025 Transport & Logistics Solutions. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
