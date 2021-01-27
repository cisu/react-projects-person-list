import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const Person = ({img, name, job, children}) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
    <article className='person'>
      <img src={url} alt='peron' />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className='person-list'>
      <Person img='34' name='john' job='developer' />
      <Person img='22' name='xaris' job='artist'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum
          amet odit reprehenderit dicta? Enim repellat laborum quaerat hic eius?
        </p>
      </Person>
      <Person img='65' name='george' job='super developer' />
    </section>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <PersonList />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
