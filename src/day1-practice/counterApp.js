import { Component, Fragment } from "react";
import Button from "./Button";

//Statefull Component
class CounterApp extends Component{
  //componentDidMount
  constructor(){
    super()
    this.state = {
      count: 0
    }
  }

  //ComponentDidUpdate /ComponentWillUpdate
  //ES6 arrow function
  increase = () => {
    this.setState({ //method dari class component untuk merubah state
      count: this.state.count + 1
    })
  }

  decrease = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render(){
    const {count} = this.state //destructuring

    //return JSX
    return(
      <Fragment> 
        <Judul count={count}/>
        <Button func={this.increase} color="blue" sym="+"/>
        <Button func={this.decrease} color="green" sym="-"/>
      </Fragment>
    )
  }
}

//arrow function -> membuat stateless component -> es6
//Stateless component
const Judul = (props) => {
  return(
    <h1>{props.count}</h1>
  )
}

export default CounterApp