import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Typewriter from 'typewriter-effect';
import logo from '../assets/images/logo.webp'
import { Link, useHistory } from "react-router-dom";
import agent from "../agent";
import Alert from "../utils/Alert";
import jwt_decode from "jwt-decode";
const Login = () => {
    const [isLogin, setIsLogin] = React.useState(false);
    const [mobileNum, setMobileNum] = React.useState('');
    const [created, setCreated] = React.useState(false);
    const [OTP, setOTP] = React.useState('');
    const token = localStorage.getItem("token");
    const [decoded, setDecoded] = React.useState({});
    let history = useHistory();

    React.useEffect(() => {
        if (token) {
            setIsLogin(true);
            setDecoded(jwt_decode(token));
        }
    }, [token]);
    function GetOtp() {
        let formIsComplete = true;

        if (mobileNum === '') {
            Alert.showToastAlert('warning', 'Mobile No. is required');
            formIsComplete = false;

        }
        if (mobileNum !== '') {
            if (mobileNum.length < 10) {
                Alert.showToastAlert('warning', 'Incorrect Mobile No.');
                formIsComplete = false;
            }
        }
        if (formIsComplete) {
            const data = { mobile_no: mobileNum }

            agent.Login.login(data).then((res) => {
                if (!res.status) {
                    Alert.showToastAlert('error', res.message);
                    history.push('/register');
                }
                else {
                    Alert.showToastAlert('success', res.message);
                    setCreated(true);
                }
            }).catch((err) => console.error(err))
        }
    }
    function LogIn() {
        let formIsComplete = true;
        if (OTP === '') {
            Alert.showToastAlert('warning', 'OTP is required');
            formIsComplete = false;
        }
        if (formIsComplete) {
            const data = {
                customer_otp: OTP,
                mobile_no: mobileNum,
            }

            agent.Login.loginOtp(data).then((res) => {
                if (!res.status) {
                    Alert.showToastAlert('error', res.message);
                }
                else {
                    localStorage.setItem("token", res.token)
                    Alert.showToastAlert('success', res.message);
                    history.push('/user-dashboard/my-subscriptions');
                }
            }).catch((err) => console.error(err))
        }
    }
    return (
        <Fragment>
            <MetaTags>
                <title>Ksheerdham |
                    Login</title>
                <meta
                    name="description"
                    content="Login"
                />
            </MetaTags>
            <LayoutOne>
                <div className="container pt-2">
                    <div className="row ">
                        <div className="col-md-7 col-xs-12 d-none d-md-block">
                            <div id="login-intro">
                                <div className="logo_login">
                                    <img src={logo} alt="Ksheerdham" />
                                </div>
                                <div className="title">
                                    Welcome to Ksheerdham!
                                </div>
                                <div className="description">
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter.typeString('Ksheerdham is committed to deliver  A2 Gir Cow Milk & Milk Products in its natural form.')
                                                .deleteAll()
                                                .start();
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-xs-12 login">
                            <div id="login-form-wrapper">
                                <div id="login-form">
                                    <div className="title form-title">LOGIN TO YOUR ACCOUNT</div>
                                    {!isLogin ?
                                        <div className="coupon_info">
                                            <div className="register my-3">
                                                <Link to="/register" className="text-primary"> Need an account?</Link>
                                            </div>

                                            <div>
                                                <p className="input_fields input_name">
                                                    <label>Mobile<span className="required">*</span></label>
                                                    <input
                                                        type="number"
                                                        onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
                                                        placeholder="Mobile Number"
                                                        onChange={({ target }) => {
                                                            setMobileNum(target.value);
                                                        }} value={mobileNum} disabled={created}
                                                    />
                                                </p>

                                                {created && <p className="input_fields input_name">
                                                    <label>OTP<span className="required">*</span></label>
                                                    <input
                                                        type="number"
                                                        placeholder="Enter OTP"
                                                        onChange={({ target }) => {
                                                            setOTP(target.value);
                                                        }} value={OTP}
                                                    />
                                                </p>}

                                                <div className="d-flex mt-3 justify-content-center">
                                                    <input type="button" name="send" onClick={() => { created ? LogIn() : GetOtp() }}
                                                        className="submit-contact submitBnt mx-2" value="Login" />

                                                </div>
                                            </div>

                                        </div> :
                                        <>
                                            <div className="register">
                                                <div className="sub-title">
                                                    Welcome {decoded.name}
                                                </div>
                                                <div className="sub-title my-3">
                                                    {decoded.email}
                                                </div>
                                            </div>
                                            <div className="d-flex mt-5 justify-content-center">
                                                <input type="button" id="submit" name="send" onClick={() => history.push('/user-dashboard/my-subscriptions')} className="submit-contact submitBnt mx-2" value="Portal" />
                                                <input type="button" id="submit" name="send" onClick={() => { setIsLogin(false); localStorage.removeItem("token") }} className="cancel-contact submitBnt" value="Log Out" />
                                            </div>
                                        </>}

                                </div>

                            </div>

                        </div>

                    </div>
                    {/* container */}
                </div>




            </LayoutOne>
        </Fragment>

    );
};

export default Login;