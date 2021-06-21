import { useState } from "react"
import { Input,Button } from "reactstrap"
import '../styles/list.css'

export default()=>{

  const[employee,setEmployee]=useState([
    {id:1,name:"Prabal Pratap Singh",city:"Lucknow",state:"Uttar Pradesh"},
    {id:2,name:"Yashwendra Pratap Singh",city:"Ayodhya",state:"Uttar Pradesh"},
    {id:3,name:"Mohit",city:"Faizabad",state:"Uttar Pradesh"},
    {id:4,name:"Saurabh",city:"Raebareli",state:"Uttar Pradesh"}
  ])

  const[message,setMessage]=useState('');

  const[name,setName]=useState('');

  const searchHandler=(e)=>{
      setName(e.target.value);
  }

  const deleteEmployeeHandler=(id)=>{
    const newEmployee=employee.filter((item)=>item.id!==id);
    setEmployee(newEmployee);
    setMessage(`You Deleted Record With Id = ${id}`);
  }

  const searchOnClick=(name)=>{
    const newEmployee=employee.filter((item)=>item.name===name);
    setEmployee(newEmployee);
  }

  const clearSearch=()=>{
    const newEmployee=[
      {id:1,name:"Prabal Pratap Singh",city:"Lucknow",state:"Uttar Pradesh"},
      {id:2,name:"Yashwendra Pratap Singh",city:"Ayodhya",state:"Uttar Pradesh"},
      {id:3,name:"Mohit",city:"Faizabad",state:"Uttar Pradesh"},
      {id:4,name:"Saurabh",city:"Raebareli",state:"Uttar Pradesh"}
    ]
    setEmployee(newEmployee);
    setName('');
  }

 return(
  <div className="container">
  <div className="row">
      <div className="col-md-8">
          <div className="panel panel-primary">
              <div className="panel-heading">
               <Input placeholder="Search" value={name} onChange={searchHandler}/>
               <Button onClick={()=>searchOnClick(name)}>Search</Button>
               <button onClick={()=>clearSearch()}>Clear</button>
              </div>
              <div className="panel-body">
                  <ul className="list-group">
                      <li className="list-group-item">
                          {
                            employee && employee.map((item,index)=>{
                              return(
                              <table key={index}>
                                <tbody>
                                  <tr>
                                    <td>{item.name}</td>
                                    <td style={{width:"5px"}}></td>
                                    <td><span style={{color:"red",cursor:"pointer"}} onClick={()=>deleteEmployeeHandler(item.id)}>Delete</span></td>
                                  </tr>
                                </tbody>
                              </table>
                              )
                            })
                          }
                      </li>
                  </ul>
              </div>
              <div className="panel-footer">
                  <div className="row">
                      <div className="col-md-6">
                          <h6>
                             <span className="label label-info">{message}</span></h6>
                      </div>
                     
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
 )
}