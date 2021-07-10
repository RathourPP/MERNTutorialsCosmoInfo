import React,{Component} from 'react';
import {Input} from 'reactstrap';

class Registration extends Component{
    render(){
        return(
            <div className="container">
            <h2>Welcome To Registration Page</h2>
            <div className="card">
              <div className="card-body">
                  <table className="table table-responsive table-hover">
                      <tr>
                          <td>Email Id</td>
                          <td>
                              <Input placeholder="Enter Email Id" className="form-control"/>
                          </td>
                      </tr>
                      <tr>
                          <td>Passowrd</td>
                          <td>
                              <Input placeholder="Enter Pssword" className="form-control"/>
                          </td>
                      </tr>
                      <tr>
                          <td>Login</td>
                         
                      </tr>
                  </table>
              </div>
            </div>
          </div>
        )
    }
}

export default Registration;