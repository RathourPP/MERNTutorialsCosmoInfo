import React,{Component} from 'react';
import '../styles/common.css';
import{Input} from 'reactstrap'

class Registration extends Component{

  constructor(props){
    super(props);
    this.state={
      firstName:'',
      lastName:'',
      email:'',
      contact:''
    }
  }

  changeHandler=(e)=>{
    const{name,value}=e.target;
    this.setState({[name]:value,key:name});
  }

  render(){
    const{firstName,lastName,email,contact}=this.state;
    return(
      <div className="container register-form">
            <div className="form">
                <div className="note">
                    <p>This is a simpleRegister Form made using Boostrap.</p>
                </div>

                <div className="form-content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <Input type="text" name="firstName" className="form-control" value={firstName} onChange={this.changeHandler} placeholder="Enter FirstName"/>
                            </div>
                            <div className="form-group">
                            <Input type="text" name="lastName" className="form-control" value={lastName} onChange={this.changeHandler} placeholder="Enter LastName"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <Input type="text" name="email" className="form-control" value={email} onChange={this.changeHandler} placeholder="Enter Email"/>
                            </div>
                            <div className="form-group">
                            <Input type="text" name="contact" className="form-control" value={contact} onChange={this.changeHandler} placeholder="Enter Contact"/>
                            </div>
                        </div>
                    </div>
                    <button type="button" onClick={()=>{console.log('Button Clicked')}} className="btnSubmit">Submit</button>
                </div>
            </div>
        </div>
      )
  }
}

export default Registration;