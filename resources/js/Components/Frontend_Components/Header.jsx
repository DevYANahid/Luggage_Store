import React from 'react'

const Header = () => {
  return (
       <header class="section__container header__container">
        <div class="header__image__container">
            <div class="header__content">
                <h1>Book luggage
                    storage</h1>
                <p>Anywhere, anytime</p>
            </div>
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
            <div class="booking__container">
                <form>
                    <div class="form__group">
                        <div class="input__group">
                            <input type="text" />
                            <label>Location</label>
                        </div>
                        <p>Enter Your Location</p>
                    </div>
                    <div class="form__group">
                        <div class="input__group">
                            <input type="text" />
                            <label>
                                Drop-off</label>
                        </div>
                        <p>Add date</p>
                    </div>
                    <div class="form__group">
                        <div class="input__group">
                            <input type="text" />
                            <label>
                                Pick-up</label>
                        </div>
                        <p>Add date</p>
                    </div>
                    <div class="form__group">
                        <div class="input__group">
                            <input type="text" />
                            <label>Bag</label>
                        </div>
                        <p>Add Number of Bag</p>
                    </div>
                </form>
                <button  class="btn"><a href={route('storage')}><i class="ri-search-line"></i></a></button>
            </div>
        </div>
    </header>  
    
  )
}

export default Header