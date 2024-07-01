// import { useEffect } from 'react';
// import GuestLayout from '@/Layouts/GuestLayout';
// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import { Head, Link, useForm } from '@inertiajs/react';

// export default function Register() {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         name: '',
//         email: '',
//         password: '',
//         password_confirmation: '',
//     });

//     useEffect(() => {
//         return () => {
//             reset('password', 'password_confirmation');
//         };
//     }, []);

//     const submit = (e) => {
//         e.preventDefault();

//         post(route('register'));
//     };

//     return (
//         <GuestLayout>
//             <Head title="Register" />

//             <form onSubmit={submit}>
//                 <div>
//                     <InputLabel htmlFor="name" value="Name" />

//                     <TextInput
//                         id="name"
//                         name="name"
//                         value={data.name}
//                         className="mt-1 block w-full"
//                         autoComplete="name"
//                         isFocused={true}
//                         onChange={(e) => setData('name', e.target.value)}
//                         required
//                     />

//                     <InputError message={errors.name} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <InputLabel htmlFor="email" value="Email" />

//                     <TextInput
//                         id="email"
//                         type="email"
//                         name="email"
//                         value={data.email}
//                         className="mt-1 block w-full"
//                         autoComplete="username"
//                         onChange={(e) => setData('email', e.target.value)}
//                         required
//                     />

//                     <InputError message={errors.email} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <InputLabel htmlFor="password" value="Password" />

//                     <TextInput
//                         id="password"
//                         type="password"
//                         name="password"
//                         value={data.password}
//                         className="mt-1 block w-full"
//                         autoComplete="new-password"
//                         onChange={(e) => setData('password', e.target.value)}
//                         required
//                     />

//                     <InputError message={errors.password} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

//                     <TextInput
//                         id="password_confirmation"
//                         type="password"
//                         name="password_confirmation"
//                         value={data.password_confirmation}
//                         className="mt-1 block w-full"
//                         autoComplete="new-password"
//                         onChange={(e) => setData('password_confirmation', e.target.value)}
//                         required
//                     />

//                     <InputError message={errors.password_confirmation} className="mt-2" />
//                 </div>

//                 <div className="flex items-center justify-end mt-4">
//                     <Link
//                         href={route('login')}
//                         className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                     >
//                         Already registered?
//                     </Link>

//                     <PrimaryButton className="ms-4" disabled={processing}>
//                         Register
//                     </PrimaryButton>
//                 </div>
//             </form>
//         </GuestLayout>
//     );
// }


import Navbar from '@/Components/Frontend_Components/Navbar'
import React from 'react'

const Register = () => {
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
                                                                <form id="payment-login-form-desktop" name="newAccountForm" noValidate autoComplete="off">
                                                                    <div>
                                                                        <div className="form-group-v2">
                                                                            <div className="form-item-v2 margin-r-15">
                                                                                <input
                                                                                    placeholder="First name"
                                                                                    type="text"
                                                                                    name="firstname"
                                                                                    required
                                                                                    className="form-style-v2"
                                                                                />
                                                                                <div className="text-left" style={{ display: 'none' }}></div>
                                                                            </div>
                                                                            <div className="form-item-v2">
                                                                                <input
                                                                                    placeholder="Last name"
                                                                                    type="text"
                                                                                    name="lastname"
                                                                                    required
                                                                                    className="form-style-v2"
                                                                                />
                                                                                <div className="text-left" style={{ display: 'none' }}></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group-v2">
                                                                            <div className="form-item-v2">
                                                                                <input
                                                                                    placeholder="Email"
                                                                                    autoCorrect="off"
                                                                                    autoCapitalize="off"
                                                                                    spellCheck="false"
                                                                                    type="email"
                                                                                    name="email"
                                                                                    required
                                                                                    className="form-style-v2"
                                                                                />
                                                                                <div className="text-left" style={{ display: 'none' }}></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group-v2">
                                                                            <div className="form-item-v2">
                                                                                <input
                                                                                    id="emailConfirmation"
                                                                                    placeholder="Enter your email again"
                                                                                    autoCorrect="off"
                                                                                    autoCapitalize="off"
                                                                                    spellCheck="false"
                                                                                    type="email"
                                                                                    name="emailConfirmation"
                                                                                    required
                                                                                    className="form-style-v2"
                                                                                />
                                                                                <div className="text-left" style={{ display: 'none' }}></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group-v2">
                                                                            <div className="form-item-v2 position-relative">
                                                                                <input
                                                                                    placeholder="Password"
                                                                                    autoComplete="off"
                                                                                    autoCorrect="off"
                                                                                    autoCapitalize="off"
                                                                                    spellCheck="false"
                                                                                    name="loginPassword"
                                                                                    required
                                                                                    type="password"
                                                                                    className="form-style-v2"
                                                                                />
                                                                                <div className="input-icon-right-container">
                                                                                    <div className="nanny-icon input-icon-right opened-eye"></div>
                                                                                </div>
                                                                                <div className="text-left" style={{ display: 'none' }}></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="d-none form-group-v2">
                                                                            <div className="form-item-v2">
                                                                                <span className="link-action mb-2">Je possède un code de parrainage</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="mb-3 mt-3">
                                                                            <div className="form-item">
                                                                                <input
                                                                                    id="newslettersAcceptedpayment-login-form-desktop"
                                                                                    name="newslettersAccepted"
                                                                                    type="checkbox"
                                                                                />
                                                                                <label
                                                                                    htmlFor="newslettersAcceptedpayment-login-form-desktop"
                                                                                    className="fs-15"
                                                                                    style={{ marginLeft: '10px' }}
                                                                                >
                                                                                    I subscribe to the Nannybag newsletters
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <input type="submit" className="nanny-btn-login" value="Register" />
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
                                                                            <form
                                                                                id="payment-form-login"
                                                                                name="newAccountForm"
                                                                                noValidate
                                                                                autoComplete="off"
                                                                            >
                                                                                <div>
                                                                                    <div className="form-group-v2">
                                                                                        <div className="form-item-v2 margin-r-15">
                                                                                            <input
                                                                                                placeholder="First name"
                                                                                                type="text"
                                                                                                name="firstname"
                                                                                                required
                                                                                                className="form-style-v2"
                                                                                            />
                                                                                            <div className="text-left" style={{ display: 'none' }}></div>
                                                                                        </div>
                                                                                        <div className="form-item-v2">
                                                                                            <input
                                                                                                placeholder="Last name"
                                                                                                type="text"
                                                                                                name="lastname"
                                                                                                required
                                                                                                className="form-style-v2"
                                                                                            />
                                                                                            <div className="text-left" style={{ display: 'none' }}></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group-v2">
                                                                                        <div className="form-item-v2">
                                                                                            <input
                                                                                                placeholder="Email"
                                                                                                autoCorrect="off"
                                                                                                autoCapitalize="off"
                                                                                                spellCheck="false"
                                                                                                type="email"
                                                                                                name="email"
                                                                                                required
                                                                                                className="form-style-v2"
                                                                                            />
                                                                                            <div className="text-left" style={{ display: 'none' }}></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group-v2">
                                                                                        <div className="form-item-v2">
                                                                                            <input
                                                                                                id="emailConfirmation"
                                                                                                placeholder="Enter your email again"
                                                                                                autoCorrect="off"
                                                                                                autoCapitalize="off"
                                                                                                spellCheck="false"
                                                                                                type="email"
                                                                                                name="emailConfirmation"
                                                                                                required
                                                                                                className="form-style-v2"
                                                                                            />
                                                                                            <div className="text-left" style={{ display: 'none' }}></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group-v2">
                                                                                        <div className="form-item-v2 position-relative">
                                                                                            <input
                                                                                                placeholder="Password"
                                                                                                autoComplete="off"
                                                                                                autoCorrect="off"
                                                                                                autoCapitalize="off"
                                                                                                spellCheck="false"
                                                                                                name="loginPassword"
                                                                                                required
                                                                                                type="password"
                                                                                                className="form-style-v2"
                                                                                            />
                                                                                            <div className="input-icon-right-container">
                                                                                                <div className="nanny-icon input-icon-right opened-eye"></div>
                                                                                            </div>
                                                                                            <div className="text-left" style={{ display: 'none' }}></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="d-none form-group-v2">
                                                                                        <div className="form-item-v2">
                                                                                            <span className="link-action mb-2">
                                                                                                Je possède un code de parrainage
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="mb-3 mt-3">
                                                                                        <div className="form-item">
                                                                                            <input
                                                                                                id="newslettersAcceptedpayment-form-login"
                                                                                                name="newslettersAccepted"
                                                                                                type="checkbox"
                                                                                            />
                                                                                            <label
                                                                                                htmlFor="newslettersAcceptedpayment-form-login"
                                                                                                className="fs-15"
                                                                                                style={{ marginLeft: '10px' }}
                                                                                            >
                                                                                                I subscribe to the Nannybag newsletters
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <input type="submit" className="nanny-btn-login visible" value="Register" />
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