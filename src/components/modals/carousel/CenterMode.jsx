import React, { Component } from "react";
import { ReactComponent as ArrowLeft } from 'svg/arrows/arrow_left.svg'
import { ReactComponent as ArrowRight } from 'svg/arrows/arrow_right.svg'
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {

    function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <button className="carousel__prev" onClick={onClick}>
            <ArrowLeft />
        </button>
    );
    }
      
    function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <button className="carousel__next" onClick={onClick}>
            <ArrowRight />
        </button>
    );
    }

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      slidesToShow: 3,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    
    return (
      <div>
        <Slider {...settings}>
            {this.props.items.map(image => {
                return (
                    <div className='carousel__image-item' key={image.id}>
                        <span className={`carousel__${image.name}`}></span>
                    </div>
                )
            })}
        </Slider>
      </div>
    );
  }
}