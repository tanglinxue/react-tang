/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */

import React, { Component } from 'react'

export default class App extends Component {
    a = 100
    myref = React.createRef()
    state = {
      list:[{
        id:1,
        mytext:"aaa"
    },
    {
        id:2,
        mytext:"bbdsdb"
    },
    {
        id:3,
        mytext:"ccc"
    }]
    }
    render() {
        
        return (
            <div>
                <input ref={this.myref}/>
                <button  onClick={ ()=>{
                    console.log("click",this.myref.current.value)
                } }>add1</button>

                <ul>
                  {
                    this.state.list.map((item,index)=>
                      <li key={item.id}>{item.mytext}
                       <button onClick={()=>this.handleDelClick(index)}>del</button></li>
                    )
                  }
                </ul>
                {!this.state.list.length?<div>暂无代办事项</div>:null}
                <button onClick={this.handleClick2}>add2</button>
            </div>
        )
    }

    handleClick2 = ()=>{
        console.log("click2",this.myref.current.value)
        //不要直接修改状态，可能会造成不可预期的问题
        let newlist = [...this.state.list];
        newlist.push({
          id:Math.random()*100000000, //生成不同id的函数
          mytext:this.myref.current.value
        })
        this.setState({
          list:newlist
        })
    }

    
    handleDelClick(index){
      console.log("del-click",index)

      // 不要直接修改状态， 可能会造成不可预期的问题。

      let newlist = this.state.list.concat()

      newlist.splice(index,1)

      this.setState({
          list:newlist
      })
  }

}
