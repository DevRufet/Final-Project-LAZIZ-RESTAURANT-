import React from "react";
import "./about.scss";
function About() {
  return (
    <>
      <section id="heroAbout">
        <h1>ABOUT US</h1>
      </section>
      <section className="aboutStory">
        <div>
          <h1>Italian Restaurant</h1>
          <p>OUR STORY</p>
          <span>
            Fusce at risus eget mi auctor pulvinar. Suspendisse maximus
            venenatis pretium. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Aliquam purus purus,
            lacinia a scelerisque in, luctus vel felis. Donec odio diam,
            dignissim a efficitur at, efficitur et est. Pellentesque semper est
            ut pulvinar ullamcorper. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Nulla et leo
            accumsan, egestas velit ac, fringilla tortor. Sed varius justo sed
            luctus mattis
          </span>
        </div>
      </section>
      <section className="aboutVideo">
        <div>
          <h1>Discover</h1>
          <p>OUR VIDEO</p>
          <button>
            <i class="fa-solid fa-play"></i>
          </button>
        </div>
      </section>
      <section id="aboutEat">
        <div className="aboutEatItem">
          <div className="eatItems">
            <h1>Delicious</h1>
            <p>RECIPES</p>
            <span>
              Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.
              Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi,
              ac facilisis ligula sem id neque.
            </span>
          </div>
          <div className="eatImg1">
            <img src="" alt="" />
          </div>
        </div>
        <div className="aboutEatItem">
          <div className="eatImg2">
            <img src="" alt="" />
          </div>
          <div className="eatItems">
            <h1>Romantic</h1>
            <p>RESTAURANT</p>
            <span>
              Fusce iaculis, quam quis volutpat cursus, tellus quam varius eros,
              in euismod lorem nisl in ante. Maecenas imperdiet vulputate dui
              sit amet vestibulum. Nulla quis suscipit nisl.
            </span>
          </div>
        </div>
      </section>
      <section className="aboutImgItems"></section>
      <section className="aboutChef">
        <h1>Meet Our</h1>
        <p>CHEF</p>
        <div className="chefItems">
          <div className="chefItem1">
            <div>
              <img src="https://preview.colorlib.com/theme/pato/images/avatar-02.jpg" alt="" />
            </div>
            <h1>Peter Hart</h1>
            <p>Chef</p>
            <span>Donec porta eleifend mauris ut effici-tur. Quisque non velit vestibulum, lob-ortis mi eget, rhoncus nunc</span>
          </div>
          <div className="chefItem2">
            <div>
              <img src="https://preview.colorlib.com/theme/pato/images/avatar-03.jpg" alt="" />
            </div>
            <h1>Joyce Bowman</h1>
            <p>Chef</p>
            <span>Donec porta eleifend mauris ut effici-tur. Quisque non velit vestibulum, lob-ortis mi eget, rhoncus nunc</span>
          </div>
          <div className="chefItem3">
            <div>
              <img src="https://preview.colorlib.com/theme/pato/images/avatar-05.jpg" alt="" />
            </div>
            <h1>Jame Ward</h1>
            <p>Chef</p>
            <span>Donec porta eleifend mauris ut effici-tur. Quisque non velit vestibulum, lob-ortis mi eget, rhoncus nunc</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
