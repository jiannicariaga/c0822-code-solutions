import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openTopic: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const label = event.target.textContent;
    if (label === this.state.openTopic) {
      this.setState({ openTopic: null });
    } else {
      this.setState({ openTopic: label });
    }
  }

  render() {
    const topics = this.props.topics;
    const accordionItems = topics.map(topic => {
      const display = this.state.openTopic === topic.label ? 'open' : '';
      return (
        <div className='accordion-item' key={topic.label}>
          <h3 className={`label ${display}`} onClick={this.handleClick}>
            {topic.label}
          </h3>
          <div className='content'>
            <p>{topic.content}</p>
          </div>
        </div>
      );
    });

    return (
      <div className='accordion-wrapper'>
        {accordionItems}
      </div>
    );
  }
}
