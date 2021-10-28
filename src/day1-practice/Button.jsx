//es5 -> stateless
export default function Button({color, func, sym}){ //destructuring
  // const {color, func, sym} = props

  return(
    <button style={{background:color}} onClick={func}>{sym}</button>
  )
}