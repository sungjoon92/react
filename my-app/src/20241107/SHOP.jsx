import React from "react";
import "./SHOP.css";
import apparel from "../assets/apparel.png";
import appare2 from "../assets/apparel2.jpg";
import appare3 from "../assets/apparel3.jpg";
function SHOP() {
  return (
    <div>
      {/* <!-- header start --> */}
      <header>
        <div class="header-top flex space-between">
          <h1 class="logo">APPAREL SHOP</h1>
          <nav>
            <ul class="flex space-between">
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">PRODUCTS</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="header-img">
          <img src={apparel} alt="" />
        </div>
      </header>
      {/* <!-- header end --> */}

      {/* <!-- main start --> */}
      <main>
        {/* <!-- section1 start --> */}
        <section class="section1 flex space-around">
          <div>
            <img src={appare2} alt="" />
          </div>
          <div>
            <h2>About Our Company</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam magnam quaerat nisi est, repellendus nesciunt maiores
              sed dolorem distinctio, laborum perferendis ullam culpa hic minima
              quas reiciendis at sint quod, possimus unde enim ea. Dolore,
              aspernatur? Nemo delectus illum nam dolor at cupiditate vero
              similique, totam esse rem a accusamus rerum aperiam voluptates vel
              aliquid asperiores dolorum molestias, architecto mollitia. Ex
              ratione quis assumenda nobis hic omnis debitis dicta? Iusto
              perspiciatis nulla corporis cum qui.
            </p>
          </div>
        </section>
        {/* <!-- section1 end --> */}

        {/* <!-- section2 start --> */}
        <section class="section2">
          <h2>Cntact Us</h2>
          <div class="content-box flex space-around">
            <div class="input-box">
              <form action="" class="flex space-around">
                <label for="name">Username</label>
                <input type="text" />
                <label for="email">Email</label>
                <input type="text" />
                <input type="submit" id="submit" name="submit" />
              </form>
            </div>
            <div class="img-box">
              <img src={appare3} alt="" />
            </div>
          </div>
        </section>
        {/* <!-- section2 end --> */}

        {/* <!-- section3 start --> */}
        <section class="section3">
          <h2>More</h2>
          <div class="more-box">
            <ul class="flex space-around">
              {/* <!-- mail --> */}
              <li>
                <a href="">
                  <img src="../html/assets/mail.png" alt="" />
                  <span>Email Address</span>
                  <span>hphker@hphk.kr</span>
                </a>
              </li>

              {/* <!-- telephone --> */}
              <li>
                <a href="">
                  <img src="../html/assets/telephone.png" alt="" />
                  <span>Phone Number</span>
                  <span>010-1234-5678</span>
                </a>
              </li>

              {/* <!-- circle --> */}
              <li>
                <a href="">
                  <img src="../html/assets/circle.png" alt="" />
                  <span>Location</span>
                  <span>서울특별시 도곡동</span>
                </a>
              </li>

              {/* <!-- clock --> */}
              <li>
                <a href="">
                  <img src="../html/assets/clock.png" alt="" />
                  <span>Working Hours</span>
                  <span>9am ~ 6pm</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
        {/* <!-- section3 end --> */}
      </main>
      {/* <!-- main end --> */}
      <hr />

      {/* <!-- footer start --> */}
      <footer>Copyright 2022 By Happy Hacking LnC. All Rights Reserved</footer>
      {/* <!-- footer end --> */}
    </div>
  );
}

export default SHOP;
