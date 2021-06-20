export default({employeeList})=>{
    return(
        <div className="table-responsive"> 
        {
          employeeList && employeeList.map((item,index)=>{
            return(
              <table  className="table table-bordred table-striped" key={index}>
              <thead>
                <tr key={index}>
                     <th>User Id</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Contact</th>
                     <th>Pincode</th>
                </tr>
                     </thead>
                  <tbody>
                  
                  <tr key={index}>
                
                      <td>{item.UserId}</td>
                      <td>{item.Name}</td>
                      <td>{item.Email}</td>
                      <td>{item.Contact}</td>
                      <td>{item.Pincode}</td>
                     
                  </tr>
                  
                 
                  </tbody>
        
</table>
            )
          })
        }
             

<div className="clearfix"></div>

                
  </div>
    )
}