import React,{useContext} from "react";
import { FetchDataContext } from "./FetchData";

function DisplayData(){
    const {datas,setDatas}=useContext(FetchDataContext)
    return(
        <div style={{display:"flex",flexDirection:"column",justifyContent:"Center",alignItems:"center"}}>
            <h1 style={{color:"whitesmoke"}}> User Details</h1>
        {/* <table border="1" style={{borderCollapse:"collapse",border:"2px solid black"}}>
      <thead>
       <tr>
          <th>ID</th>
           <th>First Name</th>
           <th>Email</th>
           <th>Age</th>
         </tr>
     </thead>
       <tbody>
        {datas.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </table> */}
         {datas.map((user) => (
          <div style={{border:"1px solid white",borderRadius:"10px",width:"400px",margin:"20px",color:"whitesmoke"}}>
        <ul  key={user.id}>
   
           <li>ID:{user.id}</li> 
         <li>Name: {user.firstName}</li> 
          <li>Email: {user.email}</li>
          <li>Age: {user.age}</li> 
            
            </ul>
          </div>
              ))}
        </div>
    )
}
export default DisplayData;