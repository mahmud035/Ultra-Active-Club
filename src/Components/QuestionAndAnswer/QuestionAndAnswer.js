import React from 'react';
import './QuestionAndAnswer.css';
import Accordion from 'react-bootstrap/Accordion';

const QuestionAndAnswer = () => {
  return (
    <div className="accordion-container">
      <Accordion className="w-50 mx-auto accordion-content">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How Does React Works?</Accordion.Header>
          <Accordion.Body>
            React is a declarative, efficient, and flexible JavaScript library
            for building user interfaces. ReactJS is an open-source,
            component-based front end library responsible only for the view
            layer of the application. It is maintained by Facebook. React uses a
            declarative paradigm that makes it easier to reason about your
            application and aims to be both efficient and flexible. It designs
            simple views for each state in your application, and React will
            efficiently update and render just the right component when your
            data changes. <br /> <br />
            <strong> How does it work:</strong> While building client-side apps,
            a team of Facebook developers realized that the DOM is slow (The
            Document Object Model (DOM) is an application programming interface
            (API) for HTML and XML documents. It defines the logical structure
            of documents and the way a document is accessed and manipulated.).
            So, to make it faster, React implements a virtual DOM that is
            basically a DOM tree representation in JavaScript. So when it needs
            to read or write to the DOM, it will use the virtual representation
            of it. Then the virtual DOM will try to find the most efficient way
            to update the browser’s DOM. Unlike browser DOM elements, React
            elements are plain objects and are cheap to create. React DOM takes
            care of updating the DOM to match the React elements. The reason for
            this is that JavaScript is very fast and it’s worth keeping a DOM
            tree in it to speed up its manipulation. Although React was
            conceived to be used in the browser, because of its design it can
            also be used in the server with Node.js.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="accordion-header">
            Difference between props and state in React.
          </Accordion.Header>
          <Accordion.Body>
            <h4>Props</h4>
            Props are read-only components. It is an object which stores the
            value of attributes of a tag and work similar to the HTML
            attributes. It allows passing data from one component to other
            components. It is similar to function arguments and can be passed to
            the component the same way as arguments passed in a function. Props
            are immutable so we cannot modify the props from inside the
            component <br /> <br /> <br />
            <h4>States</h4>
            The state is an updatable structure that is used to contain data or
            information about the component and can change over time. The change
            in state can happen as a response to user action or system event. It
            is the heart of the react component which determines the behavior of
            the component and how it will render. A state must be kept as simple
            as possible. It represents the component's local state or
            information. It can only be accessed or modified inside the
            component or by the component directly.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What does useEffect do except data fetching?
          </Accordion.Header>
          <Accordion.Body>
            The useEffect Hook allows us to perform side effects in our
            components. Such as:
            <ul>
              <li>Making a request to an API for data from a backend server</li>
              <li>Reading from local storage</li>
              <li>Registering and deregistering event listeners</li>
              <li>
                To interact with browser APIs (that is, to use document or
                window directly)
              </li>
              <li>
                Using unpredictable timing functions like setTimeout or
                setInterval
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default QuestionAndAnswer;
