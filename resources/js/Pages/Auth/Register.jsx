import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Navbar from '@/Components/Frontend_Components/Navbar'
import React from 'react'

const Register = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <>
            <Navbar />
            <div id="__nuxt">
                <div id="__layout">
                    <div >
                        <div className="position-relative tunnel-layout map">
                            <div className="background-action desktop"></div>
                            <div className="v2 booking minHeight100 extra-payment">
                                <div className="content-row extras">
                                    <div className="content-lg row payment-content">
                                        <div className="col-lg-12 col-12 mb-3 pr-xl-5">
                                            <div>
                                                <a className="back-button"><span className="nanny-icon left-icon"></span></a>
                                                <h1>Registration For Booking</h1>
                                            </div>
                                            <hr className="tablet top-separator" />
                                            <div>
                                                {/* Desktop Form */}
                                                <div className="hide-tablet desktop payment-form-login">
                                                    <div>
                                                        <h2>Login or register to book</h2>
                                                        <div>
                                                            <div className="social-button-group">
                                                                <button className="social-button-login margin-r-15">
                                                                    <i className="social-icon facebook fs-18"></i>
                                                                    Register with Facebook
                                                                </button>
                                                                <button className="social-button-login">
                                                                    <i className="social-icon google"></i>
                                                                    Register with Google
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="d-none d-md-block">
                                                            <div className="login-or">Or via email</div>
                                                            <div>
                                                                <form onSubmit={submit} id="payment-login-form-desktop" name="newAccountForm" noValidate autoComplete="off">
                                                                    <div>
                                                                        <div className="form-group-v2">
                                                                            <div className="form-item-v2 margin-r-15">
                                                                            <InputLabel htmlFor="name" value="Name" />
                                                                                <input
                                                                                    id="name"
                                                                                    name="name"
                                                                                    value={data.name}
                                                                                    autoComplete="name"
                                                                                    isFocused={true}
                                                                                    onChange={(e) => setData('name', e.target.value)}
                                                                                    required
                                                                                    className="form-style-v2"
                                                                                />
                                                                                <InputError message={errors.email} className="mt-2" />
                                                                                <div className="text-left" style={{ display: 'none' }}></div>
                                                                            </div>
                                                                            <div className="form-item-v2">
                                                                            <InputLabel htmlFor="email" value="Email" />
                                                                                <input
                                                                                    id="email"
                                                                                    type="email"
                                                                                    name="email"
                                                                                    value={data.email}
                                                                                    autoComplete="username"
                                                                                    onChange={(e) => setData('email', e.target.value)}
                                                                                    required
                                                                                    className="form-style-v2"
                                                                                />
                                                                                <InputError message={errors.email} className="mt-2" />
                                                                                <div className="text-left" style={{ display: 'none' }}></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group-v2">
                                                                            <div className="form-item-v2">
                                                                            <InputLabel htmlFor="password" value="Password" />
                                                                                <input
                                                                                    id="password"
                                                                                    type="password"
                                                                                    name="password"
                                                                                    value={data.password}

                                                                                    autoComplete="new-password"
                                                                                    onChange={(e) => setData('password', e.target.value)}
                                                                                    required
                                                                                    className="form-style-v2"
                                                                                />
                                                                                <InputError message={errors.password} className="mt-2" />
                                                                                <div className="text-left" style={{ display: 'none' }}></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group-v2">
                                                                            <div className="form-item-v2">
                                                                            <InputLabel htmlFor="confirmPassword" value="ConfirmPassword" />
                                                                                <input
                                                                                    id="password_confirmation"
                                                                                    type="password"
                                                                                    name="password_confirmation"
                                                                                    value={data.password_confirmation}

                                                                                    autoComplete="new-password"
                                                                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                                                                    required
                                                                                    className="form-style-v2"
                                                                                />
                                                                                <InputError message={errors.password_confirmation} className="mt-2" />
                                                                                <div className="text-left" style={{ display: 'none' }}></div>
                                                                            </div>
                                                                        </div>
                                                                        <PrimaryButton className="nanny-btn-login" disabled={processing}>Register</PrimaryButton>
                                                                        

                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <input type="button" value="Register" className="margin-t-10 nanny-btn-login d-md-none" />
                                                        <div className="login-subtitle">
                                                            Already have a Nannybag account?{' '}
                                                            <span className="font-weight-bold color-nanny underline cursor-pointer">Login</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Mobile Form */}
                                                <div className="tablet mobile-form payment-mobile-form-login">
                                                    <div id="mobile-modal" className="mobile-modal">
                                                        <div className="mobile-modal-dialog">
                                                            <div className="mobile-modal-content">
                                                                <div className="mb-4 header-mobile-modale">
                                                                    <a className="back-button-modal no-slot">
                                                                        <span className="nanny-icon left-icon lg"></span>
                                                                    </a>
                                                                    <div className="top-fixed-mobile-modal">
                                                                        <a className="back-button-modal">
                                                                            <span className="nanny-icon left-icon"></span>
                                                                        </a>
                                                                        <div className="d-flex justify-content-between mt-p">
                                                                            <div>Back</div>
                                                                            <div>
                                                                                <div>
                                                                                    <span className="font-weight-bold color-nanny underline cursor-pointer">
                                                                                        Login
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="title-modal"></div>
                                                                </div>
                                                                <div>
                                                                    <h2 className="h2-mobile-head">Register</h2>
                                                                    <div>
                                                                        <div className="social-button-group">
                                                                            <button className="social-button-login margin-r-15">
                                                                                <i className="social-icon facebook fs-18"></i>
                                                                                Register with Facebook
                                                                            </button>
                                                                            <button className="social-button-login">
                                                                                <i className="social-icon google"></i>
                                                                                Register with Google
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-none d-md-block d-block">
                                                                        <div className="login-or">Or via email</div>
                                                                        <div>
                                                                        <form onSubmit={submit} id="payment-login-form-desktop" name="newAccountForm" noValidate autoComplete="off">
                                                                    <div>
                                                                        <div className="form-group-v2">
                                                                            <div className="form-item-v2 margin-r-15">
                                                                            <InputLabel htmlFor="name" value="Name" />
                                                                                <input
                                                                                    id="name"
                                                                                    name="name"
                                                                                    value={data.name}
                                                                                    autoComplete="name"
                                                                                    isFocused={true}
                                                                                    onChange={(e) => setData('name', e.target.value)}
                                                                                    required
                                                                                    className="form-style-v2"
                                                                                />
                                                                                <InputError message={errors.email} className="mt-2" />
                                                                                <div className="text-left" style={{ display: 'none' }}></div>
                                                                            </div>
                                                                            <div className="form-item-v2">
                                                                            <InputLabel htmlFor="email" value="Email" />
                                                                                <input
                                                                                    id="email"
                                                                                    type="email"
                                                                                    name="email"
                                                                                    value={data.email}
                                                                                    autoComplete="username"
                                                                                    onChange={(e) => setData('email', e.target.value)}
                                                                                    required
                                                                                    className="form-style-v2"
                                                                                />
                                                                                <InputError message={errors.email} className="mt-2" />
                                                                                <div className="text-left" style={{ display: 'none' }}></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group-v2">
                                                                            <div className="form-item-v2">
                                                                            <InputLabel htmlFor="password" value="Password" />
                                                                                <input
                                                                                    id="password"
                                                                                    type="password"
                                                                                    name="password"
                                                                                    value={data.password}

                                                                                    autoComplete="new-password"
                                                                                    onChange={(e) => setData('password', e.target.value)}
                                                                                    required
                                                                                    className="form-style-v2"
                                                                                />
                                                                                <InputError message={errors.password} className="mt-2" />
                                                                                <div className="text-left" style={{ display: 'none' }}></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group-v2">
                                                                            <div className="form-item-v2">
                                                                            <InputLabel htmlFor="confirmPassword" value="ConfirmPassword" />
                                                                                <input
                                                                                    id="password_confirmation"
                                                                                    type="password"
                                                                                    name="password_confirmation"
                                                                                    value={data.password_confirmation}

                                                                                    autoComplete="new-password"
                                                                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                                                                    required
                                                                                    className="form-style-v2"
                                                                                />
                                                                                <InputError message={errors.password_confirmation} className="mt-2" />
                                                                                <div className="text-left" style={{ display: 'none' }}></div>
                                                                            </div>
                                                                        </div>
                                                                        <PrimaryButton className="nanny-btn-login" disabled={processing}>Register</PrimaryButton>
                                                                        

                                                                    </div>
                                                                </form>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mobile-modal-bottom">
                                                                        <div className="login-payment-form-bottom">
                                                                            <input
                                                                                form="payment-form-login"
                                                                                type="submit"
                                                                                className="nanny-btn-login"
                                                                                value="Register"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="spacing"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="background-action"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register