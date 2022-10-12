import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='question-section'>
            <h2>Questions :</h2>
            <br />
            <div className='question'>
                <p className='section'>Question : What is purpose of react router ?</p>
                <p>Answer :React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any route inside the router file, the user will be redirected to that particular route. React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications. </p>

            </div>
            <br />

            <div className='question'>
                <p className='section'>Question : How does react context API work?</p>
                <p>Answer : The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.Context provides a way to pass data through the component tree without having to pass props down manually at every level. </p>

            </div>
            <br />

            <div className='question'>
                <p className='section'>Question : What do you mean by react useRef hook ?</p>
                <p>Answer : The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialized to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.</p>

            </div>
        </div>
    );
};

export default Blog;