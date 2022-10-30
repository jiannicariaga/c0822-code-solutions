import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageId: 1,
      intervalId: null
    };
    this.stepImage = this.stepImage.bind(this);
  }

  stepImage(event) {
    const imageId = this.state.imageId;
    const imagesArrLength = this.props.images.length;
    if (event.target.id === 'back') {
      if (imageId === 1) {
        this.setState({ imageId: imagesArrLength });
      } else {
        this.setState({ imageId: this.state.imageId - 1 });
      }
    } else if (event.target.id === 'next') {
      if (imageId === imagesArrLength) {
        this.setState({ imageId: 1 });
      } else {
        this.setState({ imageId: this.state.imageId + 1 });
      }
    } else {
      this.setState({ imageId: Number(event.target.id) });
    }
  }

  render() {
    const images = this.props.images;
    const imageId = this.state.imageId;
    const currentImage = images.find(images => images.id === imageId);
    const progressDots = images.map(images => {
      const dotType = (images.id === currentImage.id) ? 'fas' : 'far';
      return (
        <span
          id={images.id}
          className={`${dotType} fa-circle`}
          key={images.id}
          onClick={this.stepImage}>
        </span>
      );
    });
    return (
      <div className='carousel'>
        <div className='row'>
          <div className='chevron col-10'>
            <span
              id='back'
              className='fas fa-chevron-left'
              onClick={this.stepImage}>
            </span>
          </div>
          <div className='hero col-80'>
            <img
              src={currentImage.src}
              alt={currentImage.alt}>
            </img>
          </div>
          <div className='chevron col-10'>
            <span
              id='next'
              className='fas fa-chevron-right'
              onClick={this.stepImage}>
            </span>
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
