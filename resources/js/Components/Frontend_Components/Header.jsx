import { Link } from '@inertiajs/react'
import React from 'react'

const Header = () => {
    return (
        <header class="section__container header__container">
            <div class="header__image__container">
                <div class="tablet container-home">
                    <div class="d-flex flex-grow-1 localization-top"><span
                        class="nanny-icon pin cursor-pointer desktop hide-tablet"></span>
                        <div class="w-100-24 autocompletion-module">
                            <div><input id="homeBarSearch" placeholder="Enter location" aria-label="Enter location"
                                type="search" aria-autocomplete="list" aria-controls="localizationAutocomplete-menu"
                                aria-labelledby="localizationAutocomplete place-input desktop hide-tablet"
                                autocomplete="off" name="text-random-search" autocorrect="off" autocapitalize="none"
                                spellcheck="false" class="localizationAutocomplete place-input desktop hide-tablet" />
                            </div>
                            <div class="tablet button-autocompletion scroll-view w-100">
                                Enter location
                                <span class="nanny-icon position"></span>
                            </div>
                            <div>
                                <div class="desktop hide-tablet"></div>
                                <div class="tablet"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="position-relative bags-shipment-header">
                    <div className="header-v3">
                        <div className="container-home title">
                            <div className="d-flex align-items-center trustpilot-header-block">
                                <div className="d-flex">
                                    <div className="trustpilot-image-profile-rond first"></div>
                                    <div className="trustpilot-image-profile-rond second"></div>
                                    <div className="trustpilot-image-profile-rond third"></div>
                                </div>
                                <div className="trustpilot-header-text hide-tablet">
                                    <span>Rated</span> 4.5/5 by over 20933 satisfied customers
                                </div>
                                <div className="trustpilot-header-text tablet">
                                    4.5/5 (20933)
                                </div>
                                <div className="trustpilot-header-logo">
                                    <a id="profile-link" target="_blank" href="https://fr.trustpilot.com/review/nannybag.com?utm_medium=trustbox&utm_source=MicroStar" className="tp-link">
                                        <svg viewBox="0 0 126 31" xmlns="http://www.w3.org/2000/svg" style={{ height: '100%', width: '100%', left: '0px', top: '0px' }}>
                                            <title>Trustpilot</title>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <h1>Luggage <span className="color-nanny">transport</span>,<br className="hide-tablet" /> anywhere in Europe</h1>
                            <p className="bags-shipment-subtitle">Drop off and send your luggage to over <span>100,000</span> parcel shops.</p>
                            <p className="send-notice">
                                Available shipping routes: France to France | France to Europe | Europe to France
                            </p>
                        </div>
                        <section className="hide-tablet">
                            <div>
                                <div className="container-home desktop hide-tablet">
                                    <div>
                                        <div className="outer-box-search bags-shipment desktop hide-tablet">
                                            {/* Autocompletion Box for City of Departure */}
                                            <div className="box-search autocompletion-box">
                                                <div className="d-flex flex-grow-1 localization-top">
                                                    <span className="nanny-icon pin cursor-pointer desktop hide-tablet"></span>
                                                    <div className="w-100-24 autocompletion-module input-autocomplete">
                                                        <div>
                                                            <input
                                                                id="pickUpLocation"
                                                                placeholder="City of departure"
                                                                aria-label="City of departure"
                                                                type="search"
                                                                aria-autocomplete="list"
                                                                aria-controls="localizationAutocomplete-menu"
                                                                aria-labelledby="localizationAutocomplete place-input desktop hide-tablet"
                                                                autoComplete="off"
                                                                name="text-random-search"
                                                                autoCorrect="off"
                                                                autoCapitalize="none"
                                                                spellCheck="false"
                                                                className="localizationAutocomplete place-input desktop hide-tablet"
                                                            />
                                                        </div>
                                                        <div className="ellipsis tablet mobile-input-location" style={{ width: '100%' }}>
                                                            City of departure
                                                        </div>
                                                        <div>
                                                            <div className="desktop hide-tablet"></div>
                                                            <div className="tablet"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Autocompletion Box for City of Arrival */}
                                            <div className="box-search autocompletion-box">
                                                <div className="d-flex flex-grow-1 localization-top">
                                                    <span className="nanny-icon pin cursor-pointer desktop hide-tablet"></span>
                                                    <div className="w-100-24 autocompletion-module input-autocomplete">
                                                        <div>
                                                            <input
                                                                id="deliveryLocation"
                                                                placeholder="City of arrival"
                                                                aria-label="City of arrival"
                                                                type="search"
                                                                aria-autocomplete="list"
                                                                aria-controls="localizationAutocomplete-menu"
                                                                aria-labelledby="localizationAutocomplete place-input desktop hide-tablet"
                                                                autoComplete="off"
                                                                name="text-random-search"
                                                                autoCorrect="off"
                                                                autoCapitalize="none"
                                                                spellCheck="false"
                                                                className="localizationAutocomplete place-input desktop hide-tablet"
                                                            />
                                                        </div>
                                                        <div className="ellipsis tablet mobile-input-location" style={{ width: '100%' }}>
                                                            City of arrival
                                                        </div>
                                                        <div>
                                                            <div className="desktop hide-tablet"></div>
                                                            <div className="tablet"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Luggage Box */}
                                            <div className="box-search luggage-box">
                                                <div className="search-luggage-v3">
                                                    <div className="search-input-bar">
                                                        <div className="flex-center">
                                                            <span className="nanny-icon luggage"></span>
                                                        </div>
                                                        <div className="flex-center">
                                                            <div className="luggage-button-box">
                                                                <span className="nanny-icon minus-lug disabled"></span>
                                                            </div>
                                                            <div className="number">1</div>
                                                            <div className="luggage-button-box">
                                                                <span className="nanny-icon plus-lug"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Submit Button */}
                                            <Link href={route('storage')}
                                                disabled="disabled"
                                                className="nanny-button rework big h-60 bags-shipment disabled pt-4"
                                            >
                                                Starting from 35 €
                                                <i className="nanny-icon chevron-right-white"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

        </header>

    )
}

export default Header