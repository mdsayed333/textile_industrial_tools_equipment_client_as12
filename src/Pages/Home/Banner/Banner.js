import React from "react";

const Banner = () => {
  return (
    <div>
        <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img alt="" style={{height: '80vh'}} src="https://i.ibb.co/nzhbWfY/car-wash.jpg" class="w-full"/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
  <img alt="" style={{height: '80vh'}} src="https://i.ibb.co/nzhbWfY/car-wash.jpg" class="w-full"/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
  <img alt="" style={{height: '80vh'}} src="https://i.ibb.co/nzhbWfY/car-wash.jpg" class="w-full"/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
  <img alt="" style={{height: '80vh'}} src="https://i.ibb.co/nzhbWfY/car-wash.jpg" class="w-full"/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;
