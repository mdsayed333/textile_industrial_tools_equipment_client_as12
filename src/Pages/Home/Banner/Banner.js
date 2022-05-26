import React from "react";

const Banner = () => {
  return (
    <div>
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img alt="" style={{height: '80vh'}} src="https://i.ibb.co/fC6w2Qt/ricardo-gomez-angel-41-X6-Fw-Tw-Ph4-unsplash.jpg" className="w-full"/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img alt="" style={{height: '80vh'}} src="https://i.ibb.co/f8Prxy6/istockphoto-154368811-170667a.jpg" className="w-full"/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img alt="" style={{height: '80vh'}} src="https://i.ibb.co/3SBRJHq/carlos-irineu-da-costa-e-Mc0lpn1-P60-unsplash.jpg" className="w-full"/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <img alt="" style={{height: '80vh'}} src="https://i.ibb.co/47Bz6xv/agto-nugroho-1mn-XGDl3i-RY-unsplash.jpg" className="w-full"/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;
