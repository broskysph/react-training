import React, { Component } from 'react'
import Button from './stateless'

class StatefullExample extends Component {
  constructor(){
    super()
    this.state = {
      balance : 0
    }
  }

  addSaldo1000(){
    this.setState({
      balance: this.state.balance + 1000
    })
  }

  addSaldo5000(){
    this.setState({
      balance: this.state.balance + 5000
    })
  }

  tarikSaldo1000(){
    alert('Anday yakin?')
    this.setState({
      balance: this.state.balance - 1000
    })
  }

  render() {
    return (
      <div>
        Saldo anda adalah : Rp. {this.state.balance}
        <br />
        <hr />
        Apakah mau tambah saldo?
        <br />
        <button onClick={() => this.addSaldo1000()}>Tambbah Rp.1000</button>
        <button onClick={() => this.addSaldo5000()}>Tambbah Rp.5000</button>
        <hr />
        Apakah mau tarik saldo?
        <br/>
        {/* <button onClick={() => this.tarikSaldo1000()}>Tarik Rp.1000</button> */}
        <Button klik={() => this.tarikSaldo1000()} text={"Tarik Rp. 1000"}/>
      </div>
    )
  }
}

export default StatefullExample