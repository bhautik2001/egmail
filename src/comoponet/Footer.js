import React from 'react'

function Footer() {
  return (
    <div>
      <footr>
  <div className="footer ">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <a href="#" className="logo_footer">
            {" "}
            <img src="images/logo2.png" alt="#" />
          </a>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 ">
              <div className="address">
                <h3>Address </h3>
                <ul className="loca">
                  <li>
                    <a href="#" />
                    It is a long established fact
                    <br />
                    that a reader will be
                  </li>
                  <li>
                    <a href="#" />
                    (+71 1234567890){" "}
                  </li>
                  <li>
                    <a href="#" />
                    demo@gmail.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="address">
                <h3>Social Link</h3>
                <ul className="Menu_footer">
                  <li className="active">
                    {" "}
                    <a href="#">Twitter</a>{" "}
                  </li>
                  <li>
                    <a href="#">Facebook</a>{" "}
                  </li>
                  <li>
                    <a href="#">Instagram</a>{" "}
                  </li>
                  <li>
                    <a href="#">Linkdin</a>{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 ">
              <div className="address">
                <h3>Newsletter</h3>
                <form className="news">
                  <input
                    className="newslatter"
                    placeholder="Enter your email"
                    type="text"
                    name=" Enter your email"
                  />
                  <button className="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <p>
          Copyright © 2019 Design by{" "}
          <a href="https://html.design/">Free Html Templates </a>
        </p>
      </div>
    </div>
  </div>
</footr>

    </div>
  )
}

export default Footer
