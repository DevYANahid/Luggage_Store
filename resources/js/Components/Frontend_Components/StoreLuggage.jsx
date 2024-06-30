import React from 'react'


const StoreLuggage = () => {
  return (
    <div class="nanny-map">
        <div class="info-panel">
        <div class="box">
            <div class="map-button map-list tablet"><span><span
                        class="nanny-icon list white"></span>List</span></div>
            <div class="top-part desktop hide-tablet">
            <div>
        <div className="info-part">
            <div className="inside-wave">
            <div className="title">
                <span>Booking is required</span>
                <br />
            </div>
            <div className="content">
                <span>No item will be accepted without an online reservation. No payment will be accepted on site.</span>
            </div>
            </div>
        </div>
        <div className="info-prices">
            <div className="left-part cursor-pointer">
            <div className="price-24">
                Starting from{' '}
                <span className="price-head">4,50&nbsp;€</span>
                <br />
                per bag/day
            </div>
            </div>
        </div>
        </div>
            </div>
            <div className="nanny-list">
                <div className="nanny-scroll">
                    <div className="nannies-container">
                        <div className="map-list-warning" style={{ display: 'none' }}>
                            Your booking cannot exceed 30 days
                        </div>
                        <div className="tablet header-mobile">
                            <b>0 luggage storage</b><br />
                            matches your research
                        </div>
                        <h2 className="color-nanny-dark desktop hide-tablet">
                            Discover more Nannies
                        </h2>
                        <div className="sub-title desktop hide-tablet">
                            Near Paris
                        </div>
                        {/* First Nanny Card */}
                        <div className="nanny-card-bg cursor-pointer">
                            <div className="nanny-card">
                                <div className="highly-block">
                                    <div className="high-inside">
                                        <span className="nanny-icon highly"></span>
                                    </div>
                                </div>
                                <div className="picture"><img src="./assets/images/client-1.jpg" alt="" /></div>
                                <div className="info">
                                    <div className="luggage-storage-title">
                                        Luggage storage
                                    </div>
                                    <div className="street tt">
                                        Quai De Gesvres, Paris
                                    </div>
                                    <div className="type">
                                        Tourist office
                                    </div>
                                    <div className="d-flex nanny-stars nanny-score-top">
                                        <div className="type-point">
                                            •
                                        </div>
                                        <div className="all-stars">
                                            <div className="nanny-icon yellow star"></div>
                                            <div className="nanny-icon yellow star" style={{ display: 'none' }}></div>
                                            <div className="nanny-icon yellow star" style={{ display: 'none' }}></div>
                                            <div className="nanny-icon yellow star" style={{ display: 'none' }}></div>
                                            <div className="nanny-icon yellow star" style={{ display: 'none' }}></div>
                                        </div>
                                        <div className="average">
                                            4.9/5
                                        </div>
                                        <div className="reviews-count">
                                            &nbsp;(662)
                                        </div>
                                    </div>
                                    <div className="is-open hide-tablet">
                                        <span className="open">Open</span>
                                        <span>Closes at 3:00 PM</span>
                                    </div>
                                    <div className="distance hide-tablet">
                                        <span className="nanny-icon walk"></span>
                                        <div className="txt-overflow-1">
                                            2 min <i className="nanny-icon chevron-right"></i> city center
                                        </div>
                                    </div>
                                    <div className="hide-tablet more-btn">
                                        <div className="more">
                                            <a>More information</a>
                                        </div>
                                        <button className="nanny-button rework book-now">
                                            Book now
                                        </button>
                                    </div>
                                </div>
                                <div className="tablet info-distance" style={{ display: 'none' }}>
                                    <div className="distance">
                                        <span className="nanny-icon walk"></span>
                                        <div>
                                            2 min <i className="nanny-icon chevron-right"></i> city center
                                        </div>
                                    </div>
                                    <div className="mobile-details-nanny">
                                        <div className="fl-b-auto">
                                            <p>Opening hours</p>
                                            <div className="is-open en">
                                                <span className="open">Open</span>
                                                <span>Closes at 3:00 PM</span>
                                            </div>
                                        </div>
                                        <div className="pl-42">
                                            <p>Rating</p>
                                            <div className="d-flex nanny-stars">
                                                <div className="type-point">
                                                    •
                                                </div>
                                                <div className="all-stars">
                                                    <div className="nanny-icon yellow star"></div>
                                                    <div className="nanny-icon yellow star" style={{ display: 'none' }}></div>
                                                    <div className="nanny-icon yellow star" style={{ display: 'none' }}></div>
                                                    <div className="nanny-icon yellow star" style={{ display: 'none' }}></div>
                                                    <div className="nanny-icon yellow star" style={{ display: 'none' }}></div>
                                                </div>
                                                <div className="average">
                                                    4.9/5
                                                </div>
                                                <div className="reviews-count">
                                                    &nbsp;(662)
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tablet txt-overflow-1 mt-10">
                                    <span className="mobile-details-nanny d-inline">
                                        <span className="is-open en">
                                            <span className="open">Open</span>
                                            <span>Closes at 3:00 PM</span>
                                        </span>
                                    </span>
                                    <span className="distance d-inline">
                                        <span>
                                            2 min <i className="nanny-icon chevron-right"></i> city center
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Second Nanny Card */}
                        <div className="nanny-card-bg cursor-pointer">
                            <div className="nanny-card">
                                <div className="highly-block">
                                    <div className="high-inside">
                                        <span className="nanny-icon highly"></span>
                                    </div>
                                </div>
                                <div className="picture"><img src="./assets/images/client-2.jpg" alt="" /></div>
                                <div className="info">
                                    <div className="luggage-storage-title">
                                        Luggage storage
                                    </div>
                                    <div className="street tt">
                                        Rue De La Verrerie, Paris
                                    </div>
                                    <div className="type">
                                        Shop
                                    </div>
                                    <div className="d-flex nanny-stars nanny-score-top">
                                        <div className="type-point">
                                            •
                                        </div>
                                        <div className="all-stars">
                                            <div className="nanny-icon yellow star"></div>
                                            <div className="nanny-icon yellow star" style={{ display: 'none' }}></div>
                                            <div className="nanny-icon yellow star" style={{ display: 'none' }}></div>
                                            <div className="nanny-icon yellow star" style={{ display: 'none' }}></div>
                                            <div className="nanny-icon yellow star" style={{ display: 'none' }}></div>
                                        </div>
                                        <div className="average">
                                            4.9/5
                                        </div>
                                        <div className="reviews-count">
                                            &nbsp;(1861)
                                        </div>
                                    </div>
                                    <div className="is-open hide-tablet">
                                        <span className="open">Open</span>
                                        <span>Closes at 7:30 PM</span>
                                    </div>
                                    <div className="distance hide-tablet">
                                        <span className="nanny-icon walk"></span>
                                        <div className="txt-overflow-1">
                                            3 min <i className="nanny-icon chevron-right"></i> city center
                                        </div>
                                    </div>
                                    <div className="hide-tablet more-btn">
                                        <div className="more">
                                            <a>More information</a>
                                        </div>
                                        <button className="nanny-button rework book-now">
                                            Book now
                                        </button>
                                    </div>
                                </div>
                                <div className="tablet info-distance" style={{ display: 'none' }}>
                                    <div className="distance">
                                        <span className="nanny-icon walk"></span>
                                        <div>
                                            3 min <i className="nanny-icon chevron-right"></i> city center
                                        </div>
                                    </div>
                                    <div className="mobile-details-nanny">
                                        <div className="fl-b-auto">
                                            <p>Opening hours</p>
                                            <div className="is-open en">
                                                <span className="open">Open</span>
                                                <span>Closes at 7:30 PM</span>
                                            </div>
                                        </div>
                                        <div className="pl-42">
                                            <p>Rating</p>
                                            <div className="d-flex nanny-stars">
                                                <div className="type-point">
                                                    •
                                                </div>
                                                <div className="all-stars">
                                                    <div className="nanny-icon yellow star"></div>
                                                    <div className="nanny-icon yellow star" style={{ display: 'none' }}></div>
                                                    <div className="nanny-icon yellow star" style={{ display: 'none' }}></div>
                                                    <div className="nanny-icon yellow star" style={{ display: 'none' }}></div>
                                                    <div className="nanny-icon yellow star" style={{ display: 'none' }}></div>
                                                </div>
                                                <div className="average">
                                                    4.9/5
                                                </div>
                                                <div className="reviews-count">
                                                    &nbsp;(1861)
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tablet txt-overflow-1 mt-10">
                                    <span className="mobile-details-nanny d-inline">
                                        <span className="is-open en">
                                            <span className="open">Open</span>
                                            <span>Closes at 7:30 PM</span>
                                        </span>
                                    </span>
                                    <span className="distance d-inline">
                                        <span>
                                            3 min <i className="nanny-icon chevron-right"></i> city center
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Loading animation (if needed) */}
                        <div className="loading-nanny-limit" style={{ display: 'none' }}>
                            <div className="uil-default-css">
                                {/* You can include loading animation here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </div>
        <div className="map-panel blurrable">
        
            <div className="map" style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="gm-style"
                    style={{
                        position: 'absolute',
                        zIndex: 0,
                        left: 0,
                        top: 0,
                        height: '100%',
                        width: '100%',
                        padding: 0,
                        borderWidth: 0,
                        margin: 0
                    }}>
                    <div
                        style={{
                            position: 'absolute',
                            zIndex: 0,
                            left: 0,
                            top: 0,
                            height: '100%',
                            width: '100%',
                            padding: 0,
                            borderWidth: 0,
                            margin: 0,
                            cursor: 'url("https://maps.gstatic.com/mapfiles/openhand_8_8.cur"), default'
                        }}>
                        <div
                            style={{
                                zIndex: 1,
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                width: '100%',
                                willChange: 'transform',
                                transform: 'translate(0px, 0px)'
                            }}>
                            <div style={{ position: 'absolute', left: 0, top: 0, zIndex: 0 }}>
                                <div style={{ position: 'absolute', zIndex: 985, transform: 'matrix(1, 0, 0, 1, -27, -31)' }}>
                                   
                                    <div style={{ position: 'absolute', left: '-256px', top: '0px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s' }}>
                                        <img
                                            draggable="false"
                                            alt=""
                                            role="presentation"
                                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i15!2i16597!3i11273!4i256!2m3!1e0!2sm!3i696444897!3m17!2sen-US!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjIxfHMuZTpsfHAudjpvZmYscy50OjJ8cy5lOmwudHxwLnY6b2ZmLHMudDozM3xwLnY6b2ZmLHMudDo0MHxzLmU6bC50fHAudjpvZmYscy50OjUxfHMuZTpsfHAudjpvZmY!4e0!5m1!1e3&amp;key=AIzaSyA85wtYI2N-IHedyJmwSvUOMx-PNNoKDwQ&amp;token=34332"
                                            style={{ width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none' }}
                                        />
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StoreLuggage