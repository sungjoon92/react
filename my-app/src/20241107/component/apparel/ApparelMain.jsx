import React from "react";

function ApparelMain() {
  return (
    <main>
      {/* <!-- section1 start --> */}
      <section className="section1 flex space-around">
        <div>
          <img src={appare2} alt="" />
        </div>
        <div>
          <h2>About Our Company</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            magnam quaerat nisi est, repellendus nesciunt maiores sed dolorem
            distinctio, laborum perferendis ullam culpa hic minima quas
            reiciendis at sint quod, possimus unde enim ea. Dolore, aspernatur?
            Nemo delectus illum nam dolor at cupiditate vero similique, totam
            esse rem a accusamus rerum aperiam voluptates vel aliquid asperiores
            dolorum molestias, architecto mollitia. Ex ratione quis assumenda
            nobis hic omnis debitis dicta? Iusto perspiciatis nulla corporis cum
            qui.
          </p>
        </div>
      </section>
      {/* <!-- section1 end --> */}

      {/* <!-- section2 start --> */}
      <section className="section2">
        <h2>Cntact Us</h2>
        <div className="content-box flex space-around">
          <div className="input-box">
            <form action="" className="flex space-around">
              <label for="name">Username</label>
              <input type="text" />
              <label for="email">Email</label>
              <input type="text" />
              <input type="submit" id="submit" name="submit" />
            </form>
          </div>
          <div className="img-box">
            <img src={appare3} alt="" />
          </div>
        </div>
      </section>
      {/* <!-- section2 end --> */}

      {/* <!-- section3 start --> */}
      <section className="section3">
        <h2>More</h2>
        <div className="more-box">
          <ul className="flex space-around">
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
  );
}

export default ApparelMain;
