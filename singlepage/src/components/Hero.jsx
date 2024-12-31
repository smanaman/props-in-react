import './Hero.css'

function Hero() {
    return(

<>

  
  <section className="hero">
    <div className="wrapper">
      <div className="content">
        <h2 className="hero__title">
          Responsive layouts don’t have to be a struggle
        </h2>
        <p className="hero__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <a
          className="hero__btn content__btn--primary"
          target="_blank"
          href="https://courses.kevinpowell.co/conquering-responsive-layouts"
        >
          Learn more
        </a>
      </div>
      <img className="hero__img" src="//unsplash.it/1000/1000" alt="" />
    </div>
  </section>
  <section className="services">
    <div className="wrapper">
      <div className="services__main">
        <h2>Some title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          eligendi assumenda dolore, cumque quaerat animi incidunt accusamus
          facilis, voluptatum expedita omnis aut eaque voluptates, adipisci at
          debitis. Ad, harum numquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          cum, quod dicta, esse dignissimos non tempore sequi saepe accusantium
          porro nam. Nulla modi ex iure ullam corporis aliquid nesciunt minus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          cum, quod dicta, esse dignissimos non tempore sequi saepe accusantium
          porro nam. Nulla modi ex iure ullam corporis aliquid nesciunt minus!
        </p>
      </div>
      <div className="services__aside">
      <img className='photo' src="https://cdn.pixabay.com/photo/2023/05/29/22/29/seattle-8027337_1280.jpg" alt="" />
      </div>
    </div>
  </section>
</>

  




    )
}
export default Hero