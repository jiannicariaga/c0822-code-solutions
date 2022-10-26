import React from 'react';

export class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className='container'>

        <div className='row'>
          <div className='col-100'>
            <div className='row'>
              <div className='topic col-100'>
                <h3>Hypertext Markup Language</h3>
              </div>
            </div>
            <div className='row'>
              <div className='description col-100'>
                <p>
                  Hypertext Markup Language (HTML) is the standard markup Language
                  for creating web pages and web applications. With Cascading Style
                  Sheets (CSS) and JavaScript, it forms a triad of cornerstone
                  technologies for the World Wide Web.
                </p>
              </div>
            </div>
            </div>
          </div>

        <div className='row'>
          <div className='topic col-100'>
            <h3>Cascading Style Sheets</h3>
          </div>
          <div className='description col-100'>
            <p>
              Cascading Style Sheets (CSS) is a style sheet language used for
              describing the presentation of a document written in a markup
              language like HTML. CSS is a cornerstone technology of the World
              Wide Web alongside HTML and JavaScript.
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='col-100'>
            <div className='row'>
              <div clasName='topic col-100'>
                <h3>JavaScript</h3>
              </div>
            </div>
            <div className='row'>
              <div clasName='col-100'>
                <div className='description col-100'>
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
          </div>

        </div>
      </div>
    );
  }
}
