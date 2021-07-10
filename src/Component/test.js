import { useEffect, useState } from "react";


export default()=>{

    const[name,setName]=useState('');

    const clickHandler=()=>{
        setName('Hello, Yash');
    }

    useEffect(()=>{
        console.log('Use Effect Ran');
    },[])

    return(
        <>
    <span>Hello User</span>
    <button onClick={()=>clickHandler()}>Click Me</button>
    </>
    )
}