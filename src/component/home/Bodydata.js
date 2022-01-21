import React from "react";
// import musicImage from "../../images/music_image.jpg";
import { NavLink } from "react-router-dom";



function Bodydata() {
  return (
    <>
      <div class="header_hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-10 mx-auto">
              <div class="header_hero__text">
                <h2>
                  <span>todoApp</span> <span>For Everyone.</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet. Aut earum iure non exercitationem
                  eaque qui odit quam ut sapiente sit libero dicta qui nulla
                  consequatur. Non quia voluptatum sed voluptas cupiditate qui
                  fuga voluptate.<br/><br/>don't have an account?
                </p>
                <NavLink to={{pathname:"/register"}}>
                <div class="header_text__btn">
                  <a alt="download">
                    Register now
                  </a>
                  {/* <a href="#" alt="start 30 days free trial">
                    start 30 days free trial
                  </a> */}
                </div>
                </NavLink>
              </div>
            </div>
            {/* <div class="col-lg-6 col-10 mx-auto">
              <figure class="header_hero__img">
                <img src={musicImage} />
              </figure>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Bodydata;
