import { Component } from "react";
import Slider from "react-slick";
import "./css/slick-theme.css"; 
import "./css/slick.css";

// import img1 from '../../../../assets/banner1.png';
// import img2 from '../../../../assets/banner2.png';
// import img3 from '../../../../assets/banner3.png';
// import img4 from '../../../../assets/banner4.png';


export default class CenterMode extends Component {
  render() {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
      <button
        {...props}
        className={
          "slick-prev slick-arrow" +
          (currentSlide === 0 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button"
      >
        {'<'}
      </button>
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
      <button
        {...props}
        className={
          "slick-next slick-arrow" +
          (currentSlide === slideCount - 1 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
      >
        {'>'}
      </button>
    );


    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <SlickArrowRight/>,
        prevArrow: <SlickArrowLeft/>
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            1
          </div>
          <div>
            2
          </div>
          <div>
            3
          </div>
          <div>
            4
          </div>
        </Slider>
      </div>
    );
  }
}