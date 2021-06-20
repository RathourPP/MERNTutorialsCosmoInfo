import {useState} from 'react';
const CounterIncrement=()=>{
    
    let [likes,setLikes]=useState(0);
    let [disLikes,setDisikes]=useState(0);

    const incrementLikes=()=>{
        likes=likes+1;
        setLikes(likes);
    }

    const decrementLikes=()=>{
        disLikes=disLikes+1;
        setDisikes(disLikes);
    }

     return(
        <div className="container">
        <div className="row">
        <div className="col-md-12">
        <h4>Technologies Listed</h4>
        <div className="table-responsive"> 
         <table  className="table table-bordred table-striped">
                    <thead>
                            <tr>
                                <th>Technology Name</th>
                                <th>Likes</th>
                                <th>DisLikes</th>
                            </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td>MERN</td>
                                <td><span name="mernLikes">{likes}</span></td>
                                <td><span name="mernDisLikes">{disLikes}</span></td>
                                <td><button className="btn btn-primary btn-xs" onClick={incrementLikes} >Likes</button></td>
                                <td><button className="btn btn-danger btn-xs" onClick={decrementLikes} >Dislikes</button></td>
                            </tr>
                    </tbody>
              
      </table>
      
        <div className="clearfix"></div>             
        </div>    
        </div>
        </div>
        </div>
     )
 }

 export default CounterIncrement;