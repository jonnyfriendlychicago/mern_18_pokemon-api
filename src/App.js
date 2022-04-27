import logo from './logo.svg';
import './App.css';
// import React, {useState, useEffect} from 'react'; 
import React from 'react'; 
import { NavItem } from 'react-bootstrap';
import SwapiCallCmp from './components/SwapiCallCmp';

function App() {
  
  // const Example = (props) => {

    // const [people, setPeople] = useState([]);
 
    // useEffect(() => {
    //   console.log("useEffect in the house!")
    //     fetch('https://swapi.dev/api/people/')
    //         .then(response => response.json())
    //         .then(response => setPeople(response.results))
    // }, []);
  
  return (
    <SwapiCallCmp />
    // <div className="App">
    //   {/* {people.length > 0 && people.map((person, index)=>{
    //             return (<div key={index}>{person.name}</div>)
    //         })} */}

    //   {/* below is ternary swap-in for above;  */}
    //   { people ? 
    //       people.map (
    //                   (person, index) => {
    //                                       return (<div key={index}> {person.name}</div> )
    //                                                                                       }
    //                                                                                         ) : (null) }
    // </div>
  );
}

export default App;
