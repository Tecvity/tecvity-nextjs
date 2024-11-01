"use client";
import Image from "next/image";
import Slider from "react-slick";

const ImageSlider = ({ itemImages }) => {

  const sliderOptions = {
    arrows: true,
    autoplay: true,
    infinite: itemImages.length > 1,
    prevArrow: (
      <button type="button" className="slick-prev slick-arrow">
        <i className="fas fa-arrow-left"></i>
      </button>
    ),
    nextArrow: (
      <button type="button" className="slick-next slick-arrow">
        <i className="fas fa-arrow-right"></i>
      </button>
    ),
  };

  return (
    <Slider className="row global-carousel default" {...sliderOptions}>
      {itemImages.map((image, index) => (
        <div key={index} className="col-xl-12">
          <div className="project-inner-thumb mb-80 wow img-custom-anim-top animated">
            <Image
              width={1296}
              height={700}
              className="w-100"
              src={image}
              alt={`slide-${index}`}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
