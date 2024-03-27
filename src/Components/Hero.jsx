

const Hero = () => {
  return (
    <main className="hero">
        <div className="hero-content">
            <h1>YOUR FEET DESERVES THE BEST</h1>
            <p>
                Your feet deserves the best and we're here to help you with our shoes. Your feet deserves the best and we're here to help you with our shoes.
            </p>
            <div className="hero-button">
                <button>Shop Now</button>
                <button className="secondary-button">Category</button>
            </div>

            <div className="shopping">
                <p>Also available on</p>
                <div className="brand-icon">
                    <img src="./Images/amazon.png" alt="amazon" />
                    <img src="./Images/flipkart.png" alt="flipkart" />
                </div>

            </div>

        </div>
        <div className="hero-image">
            <img src="./Images/hero.png" alt="shoe" />
        </div>
    </main>
  )
}

export default Hero