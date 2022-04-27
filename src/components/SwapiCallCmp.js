// import './App.css';
import React, {useState, useEffect} from 'react'; 

const SwapiCallCmp = (props) => {
    const [people, setPeople] = useState([]);
 
    useEffect(() => {
      console.log("useEffect in the house!")
        // fetch('https://swapi.dev/api/people/')
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10000000000000")
            .then(response => response.json())
            .then(response => setPeople(response.results))
            .catch((err) => {console.log(err);})
    }, []);
  
  return (
    <div className="App">
      {/* {people.length > 0 && people.map((person, index)=>{
                return (<div key={index}>{person.name}</div>)
            })} */}

      {/* below is ternary swap-in for above;  */}
      { people ? 
          people.map (
                      (person, index) => {
                                          return (<div key={index}> {person.name} 
                                          {/* <br></br> <img src="{person.url}" alt=""></img> */}
                                          </div> )
                                                                                          }
                                                                                            ) : (null) }
    </div>
  )
}

export default SwapiCallCmp;
