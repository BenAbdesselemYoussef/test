import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
import General from './General';
const App = props => {
  const [personsState,setPersonsState] = useState({
    persons : [
      {name:"Youssef", age:23},
      {name:"Yassine", age:18},
      {name:"Meriam", age:30}
    ]
  });
  const [otherState, setOtherState] = useState({
    otherState : 'something'
  });

  console.log(personsState,otherState);

  const switchNameHandler = (Newname) => {
    //console.log('clicked')
    //IMPORTANT DONT DO THIS : this.state.persons[0].name = 'Joseph';
    setPersonsState({persons : [
      {name:Newname, age:23},
      {name:"Yassine", age:18},
      {name:"Meriam", age:29}
    ]})
  }
  
  return (<div>
    <General></General>
    </div>
    
    
    )
}

export default App;
