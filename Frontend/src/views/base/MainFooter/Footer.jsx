import React from "react";
import "./footer.scss";
function Footer() {
  return (
    <>
      <footer id="heroFooter">
        <div className="footerCtr">
          <div className="ftrContact">
            <h1>Contact us</h1>
            <h6><i class="fa-solid fa-location-dot"></i> 8th floor, 379 Hudson St, New York, NY 10018</h6>
            <p><i class="fa-solid fa-phone"></i> (+1) 96 716 6879</p>
            <span><i class="fa-solid fa-envelope"></i> contact@site.com</span>
            <div><i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-square-instagram"></i>
            <i class="fa-brands fa-telegram"></i>
            </div>
          </div>
          <div className="ftrTime">
            <h1>Opening times</h1>
            <p>09:30 AM – 11:00 PM</p>
            <span>Every day</span>
            
          </div>
          <div className="ftrGal">
            <h1>Gallery</h1>
            <div className="ftrGallery">
              <div>
                <img
                  src="https://preview.colorlib.com/theme/pato/images/photo-gallery-01.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-02.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://preview.colorlib.com/theme/pato/images/photo-gallery-03.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://preview.colorlib.com/theme/pato/images/photo-gallery-05.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://preview.colorlib.com/theme/pato/images/photo-gallery-06.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://preview.colorlib.com/theme/pato/images/photo-gallery-07.jpg"
                  alt=""
                />
              </div>
              {/* <div>
                <img
                  src="https://preview.colorlib.com/theme/pato/images/photo-gallery-10.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://preview.colorlib.com/theme/pato/images/photo-gallery-11.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://preview.colorlib.com/theme/pato/images/slide1-01.jpg"
                  alt=""
                />
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
