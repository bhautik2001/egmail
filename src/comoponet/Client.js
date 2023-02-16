import React from 'react'

function Client() {
  return (
    <>
  <div id="testimonial" className="clients">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
            <h2>testimonial</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="clients_red">
    <div className="container">
      <div
        id="testimonial_slider"
        className="carousel slide"
        data-ride="carousel"
      >
        {/* Indicators */}
        <ul className="carousel-indicators">
          <li
            data-target="#testimonial_slider"
            data-slide-to={0}
            className=""
          />
          <li
            data-target="#testimonial_slider"
            data-slide-to={1}
            className="active"
          />
          <li
            data-target="#testimonial_slider"
            data-slide-to={2}
            className=""
          />
        </ul>
        {/* The slideshow */}
        <div className="carousel-inner">
          <div className="carousel-item">
            <div className="testomonial_section">
              <div className="full testimonial_cont">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 pa_right">
                    <div className="testomonial_img">
                      <figure>
                        <img src="images/tes.jpg" alt="#" />
                      </figure>
                      <i>
                        <img src="images/test_con.png" alt="#" />
                      </i>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 pa_left">
                    <div className="cross_inner">
                      <h3>
                        Jomono
                        <br />
                        <strong className="ornage_color">review</strong>
                      </h3>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="testomonial_section">
              <div className="full center"></div>
              <div className="full testimonial_cont ">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 pa_right">
                    <div className="testomonial_img">
                      <figure>
                        <img src="images/tes.jpg" alt="#" />
                      </figure>
                      <i>
                        <img src="images/test_con.png" alt="#" />
                      </i>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 pa_left">
                    <div className="cross_inner">
                      <h3>
                        Jomono
                        <br />
                        <strong className="ornage_color">review</strong>
                      </h3>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div id="testomonial" className="testomonial_section">
              <div className="full center"></div>
              <div className="full testimonial_cont ">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 pa_right">
                    <div className="testomonial_img">
                      <figure>
                        <img src="images/tes.jpg" alt="#" />
                      </figure>
                      <i>
                        <img src="images/test_con.png" alt="#" />
                      </i>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 pa_left">
                    <div className="cross_inner">
                      <h3>
                        Jomono
                        <br />
                        <strong className="ornage_color">review</strong>
                      </h3>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Client
