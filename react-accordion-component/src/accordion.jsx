import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openTopic: null
    };
    this.toggleContent = this.toggleContent.bind(this);
    this.buildAccordion = this.buildAccordion.bind(this);
  }

  buildAccordion(props) {

  }

  toggleContent(event) {
    const accordionItems = document.querySelectorAll('.label');
    const openAccordionItem = document.querySelector('.open');

    accordionItems.forEach(accordionItem => {
      if (accordionItem.classList.contains('open')) {
        accordionItem.classList.remove('open');
      }
    });

    if (!event.target.classList.contains('open')) {
      event.target.classList.add('open');
    }

    if (event.target === openAccordionItem) {
      event.target.classList.remove('open');
    }
  }

  render() {
    const topics = this.props.topics;
    const accordionItems = topics.map(topic => {
      return (
        <div className='accordion-item' key={topic.label}>
          <h3 className='label' onClick={this.buildAccordion}>{topic.label}</h3>
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
