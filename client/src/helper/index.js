import {API} from "../backend";

export const signup = (user) => {
    return  fetch(`${API}register`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)

    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}

export const signin = (user) => {
    return  fetch(`${API}login`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)

    })
    .then(response => {
        
        return response.json();

    })
    .catch(err => console.log(err))
}

export const authenticate = (data,next) =>{
    if(typeof window !== "undefined"){
        localStorage.setItem("jwt",JSON.stringify(data))
        // console.log(data.access_token);
        next();
    }
}

export const signout = (next,token) => {
    if(typeof window !== "undefined"){
        localStorage.removeItem("jwt")
        next();
        return fetch(`${API}logout`,{
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
                Authorization:`Bearer ${token}`
            }
            
        })
        .then(response=>{
            console.log("signout success");
            //return response.json();
        })
        .catch(err=>console.log(err))
        // return fetch(`${API}signout`,{
        //     method:"GET"
            
        // })
        // .then(response=>{
        //     console.log("signout success");
        //     //return response.json();
        // })
        // .catch(err=>console.log(err))
    }
}




export const isAuthenticated = () => {
    if (typeof window === "undefined") {
      return false;
    }
    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"));
    } else {
      return false;
    }
  };


  export const getEmployeeData = () => {
    return  fetch(`${API}crm/getEmployeeData`,{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        }

    })
    .then(response => {
        
        return response.json();
        
    })
    .catch(err => console.log(err))
}



export const addEmpData = (empdata,token) => {
    return  fetch(`${API}crm/addEmployee`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(empdata)

    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}