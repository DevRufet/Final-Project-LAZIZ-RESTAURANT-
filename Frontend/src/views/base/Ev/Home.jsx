import React from "react";
import { Helmet } from "react-helmet-async";
import "./home.scss";
function Home() {
  return (
    <>
      <Helmet>
        <title>Ev</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="sliderAll">
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img
                src="https://preview.colorlib.com/theme/pato/images/slide1-01.jpg"
                class="d-block w-100"
                alt=""
              />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                src="https://preview.colorlib.com/theme/pato/images/master-slides-02.jpg"
                class="d-block w-100"
                alt=""
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://preview.colorlib.com/theme/pato/images/master-slides-01.jpg"
                class="d-block w-100"
                alt=""
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="sliderAbout">
        <h1>Welcome to</h1>
        <p>LAZİZ RESTAURANT</p>
      </div>
      <section id="heroItalian">
        <div className="heroItalianCtr">
          <div className="italianItems">
            <h1>Italian Restaurant</h1>
            <p>WELCOME</p>
            <span>
              Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.
              Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi,
              ac facilisis ligula sem id neque.
            </span>
          </div>
          <div className="italianImg">
            <img
              src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section id="heroDiscover">
        <div>
          <h1>Discover</h1>
          <p>LAZİZ RESTAURANT</p>
        </div>
      </section>
      <section id="heroFoods">
        
        <div className="foodsCtr">
          <div>
            <div>
              <img
                src="https://preview.colorlib.com/theme/pato/images/intro-01.jpg"
                alt=""
              />
            </div>
            <span>ROMANTIC RESTAURANT</span>
            <p>
              Phasellus lorem enim, luctus ut velit eget, con-vallis egestas
              eros.
            </p>
          </div>
          <div>
            <div>
              <img
                src="https://preview.colorlib.com/theme/pato/images/intro-02.jpg"
                alt=""
              />
            </div>
            <span>DELICIOUS FOOD</span>
            <p>
              Aliquam eget aliquam magna, quis posuere risus ac justo ipsum nibh
              urna
            </p>
          </div>
          <div>
            <div>
              <img
                src="https://preview.colorlib.com/theme/pato/images/intro-04.jpg"
                alt=""
              />
            </div>
            <span>RED WINES YOU LOVE</span>
            <p>
              Sed ornare ligula eget tortor tempor, quis porta tellus dictum.
            </p>
          </div>
        </div>
      </section>
      <section id="heroMenu">
      <h1>DISCOVER</h1>
      <span>OUR MENU</span>
        <div className="menuCtr">
          <div className="menuCtrImg">
            <div className="menuCtrImg1"><button>LUNCH</button></div>
            <div className="menuCtrImg2"><button>DINNER</button></div>
            <div className="menuCtrAll">
              <div className="menuCtrImg3"><button>DRINK</button></div>
              <div className="menuCtrImg4"><button>STARTERS</button></div>
            </div>
          </div>
          <div className="menuCtrImgs">
            <div className="menuCtrImg5"><button>HAPPY HOUR</button></div>
            <div className="menuCtrImg6"><button>DESSERT</button></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
