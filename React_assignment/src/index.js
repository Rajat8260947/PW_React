
import React from 'react';
import ReactDOM from 'react-dom/client';

import Person from './person';


import Button from './button';

import Header from './header';


import List from './list';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Person name ="John" age="30" />
    {/* <Button  text="click me" onClick={()=>
      console.log("Button Clicked")}/>
     */}
     <Button text="Click me!" onClick={() => alert("Button clicked")} />
    
     

     <Header title="GITA AUTONOMOUS COLLEGE"/>


     <List items={['apple', 'banana', 'orange']} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
