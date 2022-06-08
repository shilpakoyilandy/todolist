import React, { Component } from 'react'
import classes from "./addpart.module.css"
import { ArrowForward } from '@material-ui/icons'
export default class Addpart extends Component {
    constructor(props){
        super(props)
        this.state={work:"",date:""}
     }
     todoadd=()=>{
        this.props.list(this.state)
        this.setState({work:"" ,date:""})
        console.log("work",this.state.work)
     }
  render() {
    
    return (
        <div id="myDIV" className={classes.header}>
		<h2>My To Do List</h2><br/>
		<div className="row"style={{display:"flex"}}><div className='col-md-8'>
            <input type="text" 
            className={classes.txtbox} placeholder="Title..." onChange={(e)=>this.setState({work:e.target.value})}value={this.state.work}   /></div>
     <div className='col-md-2'>  
     <input type="date" onChange={(e)=>this.setState({date:e.target.value})}value={this.state.date}  /></div>
       <div className='col-md-2'> <span ><ArrowForward onClick={this.todoadd}/></span></div>
        </div>
		
	</div>
    )
  }
}
