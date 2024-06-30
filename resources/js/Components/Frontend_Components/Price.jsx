import React from 'react'

const Price = () => {
    return (
    <>
            <div class="home-v2 home-rates">
                <div class="container-home">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <h2><span class="color-nanny">Size doesn’t matter</span> to us.
                            </h2>
                            <h3>Our prices are the same, regardless of the size of your
                                luggage.</h3>
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <p class="rates-info-title">
                                        2x cheaper
                                    </p> <span class="rates-info-content">Than in any train
                                        station</span>
                                </div>
                                <div class="col-12 col-md-6">
                                    <p class="rates-info-title">
                                        Available 24/7
                                    </p> <span class="rates-info-content">To meet all your
                                        expectations</span>
                                </div>
                            </div>
                            <div class="hide-tablet"><button class="nanny-button rework big">
                                Book luggage storage
                            </button></div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="rates-bg">
                                <div>
                                    <div class="change-currency-box">
                                        <div>
                                            <div class="cursor-pointer change-currency-button">
                                                <div class="position-relative d-flex justify-content-between w-100">
                                                    <div class="txt-overflow-1">
                                                        Price in <span class="country">Europe
                                                            (EUR)</span></div>
                                                    <div class="nanny-icon double-arrow-up-down">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tablet"></div>
                                        </div>
                                    </div>
                                    <div class="starting-at">
                                        Starting from
                                    </div>
                                    <div><span class="price-rates">
                                        4,50 €
                                    </span></div>
                                </div>
                               
                                <picture class="bag-picture hide-tablet">
                                    <source type="image/webp" srcset="./assets/images/client-3.jpg" />
                                        <img title="Luggage Storage from4.5 €" alt="Nannybag" src="./assets/images/client-3.jpg"
                                            class="bag-picture hide-tablet" />
                                </picture>
                                    </div>
                            </div>
                        </div>
                        <div class="tablet"><button class="nanny-button rework big">
                            Book luggage storage
                        </button>
                        </div>
                    </div>
                </div>
            </>
            )
}

            export default Price