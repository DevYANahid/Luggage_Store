import React from 'react'

const ManLuggage = () => {
  return (
    <section class="section__container lounge__container">
            <div class="lounge__image">
                <img src="assets/images/hotel-1.jpg" alt="lounge" />
                <img src="assets/images/hotel-2.jpg" alt="lounge" />
            </div>
            <div class="lounge__content">
                <h2 class="section__header">Your Luggage Management</h2>
                <div class="lounge__grid">
                    <div class="lounge__details">
                        <h4>Experience Tranquility</h4>
                        <p>
                            Serenity Haven offers a tranquil escape, featuring comfortable
                            seating, calming ambiance, and attentive service.
                        </p>
                    </div>
                    <div class="lounge__details">
                        <h4>Elevate Your Experience</h4>
                        <p>
                            Designed for discerning travelers, this exclusive lounge offers
                            premium amenities, assistance, and private workspaces.
                        </p>
                    </div>
                    <div class="lounge__details">
                        <h4>A Welcoming Space</h4>
                        <p>
                            Creating a family-friendly atmosphere, The Family Zone is the
                            perfect haven for parents and children.
                        </p>
                    </div>
                    <div class="lounge__details">
                        <h4>A Culinary Delight</h4>
                        <p>
                            Immerse yourself in a world of flavors, offering international
                            cuisines, gourmet dishes, and carefully curated beverages.
                        </p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ManLuggage