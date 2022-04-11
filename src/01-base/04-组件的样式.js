import React, { Component } from 'react'
import './css/01-index.css'

export default class APP extends Component {
  render() {

    return (
      <div>
        <button  onClick={ ()=>{
            console.log("click1","如果处理逻辑过多， 不推荐这种写法")
        }}>add1</button>

        <button  onClick={ this.handleClick2  }>add2</button>
        <button  onClick={ this.handleClick3  }>add3</button>
        <button  onClick={ ()=>{
            this.handleClick4() // 比较推荐
        }}>add4</button>
      </div>
      
    )
  }

  c = 33333

  handleClick2(){
    console.log(this)
    console.log("click2")
  }

  handleClick3 = ()=>{
    console.log(this)
    console.log("click3")
  }

  handleClick4 = ()=>{
    console.log(this)
      console.log("click4")
  }
}
