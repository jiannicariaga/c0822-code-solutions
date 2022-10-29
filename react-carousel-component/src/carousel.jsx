import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '../images/css.jpg',
      alt: 'CSS'
    };
  }

  render() {
    const image = this.props.images;
    const progressDots = image.map(image => {
      return (
        <span className='far fa-circle' key={image.id}></span>
      );
    });
    return (
      <div className='carousel'>
        <div className='row'>
          <div className='chevron col-10'>
            <span className='fas fa-chevron-left'></span>
          </div>
          <div className='hero col-80'>
            <img src={image[0].src} alt={image[0].alt}></img>
          </div>
          <div className='chevron col-10'>
            <span className='fas fa-chevron-right'></span>
          </div>
        </div>
        <div className='row'>
          <div className='progress-dots col-100'>
            {progressDots}
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
