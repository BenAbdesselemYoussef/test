import React from 'react';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {prenom:"ines"};
      }
    render() {
      return <h1>Hello world {this.props.age} {this.state.prenom}<Youcef name={this.state.prenom} > </Youcef> <Youcef name="youcef" > </Youcef></h1>;
    }
  }

  export default Test ; 


   const Youcef=(props)=> {
    return (
        <div>
            this is component {props.name}
        </div>
    )
}
