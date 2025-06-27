import React,{useContext} from "react";
import { FetchDataContext } from "./FetchData";

function DisplayData(){
    const {datas,setDatas}=useContext(FetchDataContext)
    return(
        <div style={{display:"flex",flexDirection:"column",justifyContent:"Center",alignItems:"center"}}>
            <h1> User Details</h1>
        <table border="1" style={{borderCollapse:"collapse",border:"2px solid black"}}>
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
    </table>
        </div>
    )
}
export default DisplayData;