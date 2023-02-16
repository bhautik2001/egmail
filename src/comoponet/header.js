import React from 'react'

function Navbar() {
  return (
    <>
  {/* Hello world */}
  <header>
    {/* header inner */}
    <div className="header-top">
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-3 col logo_section">
              <div className="full">
                <div className="center-desk">
                  <div className="logo">
                    <a href="index.html">
                      <img src="images/logo.png" alt="#" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-10 col-lg-8 col-md-8 col-sm-9">
              <div className="menu-area">
                <div className="limit-box">
                  <nav className="main-menu ">
                    <ul className="menu-area-main">
                      <li className="active">
                        {" "}
                        <a href="index.html">Home</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#about">About</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#vegetable">Vegetable</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#testimonial">Testomonial</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#contact">Contact Us</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#contact">Login/signup</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          <img src="icon/icon_b.png" alt="#" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end header inner */}
    {/* end header */}
    <section className="slider_section">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to={0} className="active" />
          <li data-target="#myCarousel" data-slide-to={1} />
          <li data-target="#myCarousel" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container-fluid padding_dd">
              <div className="carousel-caption">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="text-bg">
                      <span>Welcome To Shree</span>
                      <h1>Vegetables and Fruits Shop</h1>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal{" "}
                      </p>
                      <form className="Vegetable">
                        <input
                          className="Vegetable_fom"
                          placeholder="Vegetable or Fruits"
                          type="text"
                          name=" Vegetable"
                        />
                        <button className="Search_btn">Search</button>
                      </form>
                      <a href="#">Contact Us</a> <a href="#">Vegetable</a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="images_box">
                      <figure>
                        <img src="images/fruit2.webp"/>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container-fluid padding_dd">
              <div className="carousel-caption">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="text-bg">
                      <span>Welcome To Shree</span>
                      <h1>Vegetables Shop</h1>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal{" "}
                      </p>
                      <form className="Vegetable">
                        <input
                          className="Vegetable_fom"
                          placeholder="Vegetable"
                          type="text"
                          name=" Vegetable"
                        />
                        <button className="Search_btn">Search</button>
                      </form>
                      <a href="#">Contact Us</a> <a href="#">Vegetable</a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="images_box">
                      <figure>
                        <img src="images/fruit3.jpg" style={{width:'90%'}} />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container-fluid padding_dd">
              <div className="carousel-caption ">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="text-bg">
                      <span>Welcome To Shree</span>
                      <h1>Vegetables Shop</h1>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal{" "}
                      </p>
                      <form className="Vegetable">
                        <input
                          className="Vegetable_fom"
                          placeholder="Vegetable"
                          type="text"
                          name=" Vegetable"
                        />
                        <button className="Search_btn">Search</button>
                      </form>
                      <a href="#">Contact Us</a> <a href="#">Vegetable</a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="images_box">
                      <figure>
                        <img src="images/fruit4.jpg" style={{width:'90%'}} />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#myCarousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#myCarousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </section>
  </header>
</>

  )
}

export default Navbar
