import {useState, useEffect} from "react"
import axios from "axios"
import User from "./User"

function UserList(){
    const [listOfUser,setListOfUser]=useState([])
    useEffect(
        ()=>{
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res)=>setListOfUser(res.data))
            .catch((err)=>console.log(err))
        }
    ,[])
    return(
        <div>
            <h1>Users list:</h1>
            <div id="thelist">
                {listOfUser.map((el,index)=><User user={el} key={index}/>)}
            </div>
        </div>

    )
}

export default UserList