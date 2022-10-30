import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageId: 1,
      intervalId: null
    };
    this.autoStepImage = this.autoStepImage.bind(this);
    this.stepImage = this.stepImage.bind(this);
  }

  autoStepImage() {
    this.state.imageId === this.props.images.length
      ? this.setState({ imageId: 1 })
      : this.setState({ imageId: this.state.imageId + 1 });
  }

  stepImage(event) {
    this.setState({ intervalId: clearInterval(this.state.intervalId) });
    if (event.target.id === 'back') {
      this.state.imageId === 1
        ? this.setState({ imageId: this.props.images.length })
        : this.setState({ imageId: this.state.imageId - 1 });
    } else if (event.target.id === 'next') {
      this.state.imageId === this.props.images.length
        ? this.setState({ imageId: 1 })
        : this.setState({ imageId: this.state.imageId + 1 });
    } else {
      this.setState({ imageId: Number(event.target.id) });
    }
    this.setState({ intervalId: setInterval(this.autoStepImage, 3000) });
  }

  componentDidMount() {
    this.setState({ intervalId: setInterval(this.autoStepImage, 3000) });
  }

  render() {
    const images = this.props.images;
    const imageId = this.state.imageId;
    const currentImage = images.find(images => images.id === imageId);
    const progressDots = images.map(images => {
      const dotStyle = images.id === currentImage.id ? 'fas' : 'far';
      return (
        <span
          id={images.id}
          className={`${dotStyle} fa-circle`}
          key={images.id}
          onClick={this.stepImage}>
        </span>
      );
    });
    const backgroundImage = { backgroundImage: `url(${currentImage.src})` };
    return (
      <div className='carousel' style={backgroundImage}>
        <div className='actions row'>
          <div className='chevron col-10'>
            <span
              id='back'
              className='fas fa-chevron-left'
              onClick={this.stepImage}>
            </span>
          </div>
          <div className='progress-dots col-80'>
            {progressDots}
          </div>
          <div className='chevron col-10'>
            <span
              id='next'
              className='fas fa-chevron-right'
              onClick={this.stepImage}>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
