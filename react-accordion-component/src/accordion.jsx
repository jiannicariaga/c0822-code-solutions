import React from 'react';

export default class Accordion extends React.Component {
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
    return (
      <div className='accordion-wrapper'>
        <div className='accordion-item'>
          <h3 className='label' onClick={this.toggleContent}>Hypertext Markup Language</h3>
          <div className='content'>
            <p>
              Hypertext Markup Language (HTML) is the standard markup Language
              for creating web pages and web applications. With Cascading Style
              Sheets (CSS) and JavaScript, it forms a triad of cornerstone
              technologies for the World Wide Web.
            </p>
          </div>
        </div>
        <div className='accordion-item'>
          <h3 className='label' onClick={this.toggleContent}>Cascading Style Sheets</h3>
          <div className='content'>
            <p>
              Cascading Style Sheets (CSS) is a style sheet language used for
              describing the presentation of a document written in a markup
              language like HTML. CSS is a cornerstone technology of the World
              Wide Web alongside HTML and JavaScript.
            </p>
          </div>
        </div>
        <div className='accordion-item'>
          <h3 className='label' onClick={this.toggleContent}>JavaScript</h3>
          <div className='content'>
            <p>
              JavaScript, often abbreviated as JS, is a high-level, interpreted
              programming language that conforms to the ECMAScript
              specification. JavaScript has curly-bracket syntax, dynamic
              typing, prototype-based object-orientation, and first-class
              functions.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
