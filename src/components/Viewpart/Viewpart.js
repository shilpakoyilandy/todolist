import React from 'react'
import Starrating from '../starrating/Starrating'
import { DeleteForeverOutlined } from '@material-ui/icons'
import {useState} from 'react'
function Viewpart(props) {
    const deleteitem=(a)=>{
    props.remove(a)
   
  }
  const[rate,setRate]=useState("")
   const rating=(r)=>{
       setRate({rate})
   }
  return (
    <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Work</th>
                            <th scope="col">data</th>
                            <th scope="col">Star Rating</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.todos.map((wrk, i) => 
                        {return (
                    
                            <tr key={i}>
                                <th scope="row"><input type="checkbox" /></th>
                                <td>{wrk.work}</td>
                                <td>{wrk.date}</td>
                                <td><Starrating p={rating}/></td>
                                <td><span onClick={() => deleteitem(i)} style={{ color: "red" }}><DeleteForeverOutlined /></span></td>
                            </tr>
        
                          ) })}        
                         </tbody>
                </table>
            </div>
  )
}

export default Viewpart

