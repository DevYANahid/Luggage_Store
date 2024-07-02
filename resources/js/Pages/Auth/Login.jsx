import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <div className="inner-menu-login not-connected container ">
            <div className="inside">
                <div className="container-home">

                    <div>
                        <div className="social-button-group mb-5">
                            <button className="social-button-login margin-r-15"><i className="social-icon facebook fs-18"></i>Continue with Facebook</button>
                            <button className="social-button-login"><i className="social-icon google"></i>Continue with Google</button>
                        </div>
                    </div>
                    <div className="d-none d-md-block">
                        <div className="login-or">
                            Or via email
                        </div>
                        {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
                        <form onSubmit={submit} name="loginForm" noValidate role="form" autoComplete="off">
                            <div className="login-form-v2">

                                <div className="email mb-3">
                                    <InputLabel htmlFor="email" value="Email :" />
                                    <input id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={(e) => setData('email', e.target.value)} className="form-style-v2" />
                                    <div className="text-left" style={{ display: "none" }}> </div>
                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                                <div className="position-relative">
                                    <InputLabel htmlFor="password" value="Password :" />
                                    <input id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        autoComplete="current-password"
                                        onChange={(e) => setData('password', e.target.value)} className="form-style-v2" />
                                    <InputError message={errors.password} className="mt-2" />
                                    <div className="input-icon-right-container">
                                        <div className="nanny-icon input-icon-right opened-eye"></div>
                                    </div>
                                    <div className="text-left" style={{ display: "none" }}> </div>
                                </div>
                            </div>
                            <div className="login-subtitle font-weight-bold color-nanny underline cursor-pointer">
                                {canResetPassword && (
                                    <Link href={route('password.request')}> Forgot Password?</Link>
                                )}

                            </div>

                            <div className="flex items-center justify-end mt-4">


                                <PrimaryButton className="nanny-btn-login" disabled={processing}>
                                    Log in
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                    <input value="Login" type="button" className="margin-t-10 nanny-btn-login d-md-none" />
                    <div className="login-subtitle">
                        <Link href={route('register')}> No account? <spen className="color-nanny cursor-pointer">Register</spen></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


