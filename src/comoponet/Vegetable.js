import React from 'react'

function Vegetable() {
  return (
    <div>
      <div id="vegetable" className="vegetable">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="titlepage">
          <h2>
            {" "}
            Fresh <strong className="llow">vegetable</strong>{" "}
          </h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 ">
        <div className="vegetable_shop">
          <h3>Best Vegetables Shop</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages andIt is a long established fact that a reader will be
            distracted{" "}
          </p>
        </div>
      </div>
      <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 ">
        <div className="vegetable_img">
          <figure>
            <img src="images/v1.jpg" alt="#" />
          </figure>
          <span>01</span>
        </div>
      </div>
      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 ">
        <div className="vegetable_img margin_top">
          <figure>
            <img src="images/v2.jpg" alt="#" />
          </figure>
          <span>02</span>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Vegetable
