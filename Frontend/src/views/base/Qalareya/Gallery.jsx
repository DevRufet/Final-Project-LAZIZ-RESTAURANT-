import React, { useState } from "react";
import "./gallery.scss";
import { Helmet } from "react-helmet-async";
function Gallery() {
  const [img1, setImg1] = useState(true);
  const [img2, setImg2] = useState(true);
  const [img3, setImg3] = useState(true);
  const [img4, setImg4] = useState(true);
  const [img5, setImg5] = useState(true);
  function setus1() {
    setImg1(!img1);
    setImg2(false);
    setImg3(false);
    setImg4(false);
    setImg5(false);
  }
  function setus2() {
    setImg2(!img2);
    setImg1(false);
    setImg3(false);
    setImg4(false);
    setImg5(false);
  }
  function setus3() {
    setImg3(!img3);
    setImg1(false);
    setImg2(false);
    setImg4(false);
    setImg5(false);
  }
  function setus4() {
    setImg4(!img4);
    setImg1(false);
    setImg2(false);
    setImg3(false);
    setImg5(false);
  }
  function setus5() {
    setImg5(!img5);
    setImg1(false);
    setImg2(false);
    setImg3(false);
    setImg4(false);
  }

  return (
    <>
      <Helmet>
        <title>Gallery</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section id="heroGalleryImg">
        <h1>GALLERY</h1>
      </section>
      <section id="heroGalleryView">
        <div className="galleryViewCtr">
          <button onClick={() => setus1()}>All Photo</button>
          <button onClick={() => setus2()}>Interior</button>
          <button onClick={() => setus3()}>Events</button>
          <button onClick={() => setus4()}>Food</button>
          <button onClick={() => setus5()}>Vip Guests</button>
        </div>
        {img1 && (
          <div className="galleryImgCtr1">
            <div>
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-13.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-14.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-15.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-16.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-17.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-18.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-19.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-20.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-21.jpg"
                alt=""
              />
            </div>
          </div>
        )}
        {img2 && (
          <div className="galleryImgCtr1">
            <div>
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-13.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-14.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-15.jpg"
                alt=""
              />
            </div>
          </div>
        )}
        {img3 && (
          <div className="galleryImgCtr1">
            <div>
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-16.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-17.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-18.jpg"
                alt=""
              />
            </div>
          </div>
        )}
        {img4 && (
          <div className="galleryImgCtr1">
            <div>
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-13.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-14.jpg"
                alt=""
              />
            </div>

            <div>
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-21.jpg"
                alt=""
              />
            </div>
          </div>
        )}
        {img5 && (
          <div className="galleryImgCtr1">
            <div>
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-13.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-14.jpg"
                alt=""
              />
            </div>

            <div>
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-21.jpg"
                alt=""
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Gallery;
