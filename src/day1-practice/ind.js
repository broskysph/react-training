let state = {
  count: 2
}

const {count} = state

// console.log('ini object ', count) 

// class Komponen1 {
//   constructor(){
//     super()
//     this.state = {
//       name: "Rudi"
//     }
//   }
//   //state
//   render(){
//     return(
//       <div></div>
//     )
//   }
// }

//function -> stateless, 
// function Komopnen2(){
//   // const [state, setState] = useState("Rudi")

//   //ngakses
//   return(
//     <div></div>
//   )
// }

function hello(){
  return `Helllo world`
}

console.log(hello())