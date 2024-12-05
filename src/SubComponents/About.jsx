import React from "react";

const About = () => {
  return (
    <>
      <section id="aboutUs_Mini">
        <div className="first_container">
          <div className="content">
            <h1>ABOUT US</h1>
            <p>
              We're passionate about curating unforgettable travel experiences
              that ignite your wanderlust. With our expertise in , we offer
              personalized journeys tailored to your unique desires.
            </p>
            {/* <p>
              Our team of experienced travel experts is committed to ensuring
              your journey is seamless and enjoyable. We'll handle all the
              logistics, including flights, accommodations, transportation.
            </p>
            <p>
              we believe in sustainable tourism and responsible travel. We
              prioritize eco-friendly practices and support local communities.
              
            </p>*/}
            <p>
              Whether you're seeking adventure, relaxation, or cultural
              immersion, we have the perfect journey for you. 
            </p> 
          </div>
          <button>We strive to offer you best possible homes to stay!</button>
        </div>
        <div className="second_container">
          <div className="image_1">
            <img src="/people.jpg" alt="people" />
          </div>
          <div className="image_2">
            <img src="people2.jpg" alt="people2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
