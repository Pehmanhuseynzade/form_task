import { BASE_URL } from "./BASE_URL";
import axios from "axios"

//types

export const gettypes = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/types`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const gettypesDelete = async(id)=>{
    await axios.delete(`${BASE_URL}/types/${id}`)
}

export const gettypespost = async(payload)=>{
    await axios.post(`${BASE_URL}/types`,payload)
}

//company

export const getcategory = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/category`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getcategoryDelete = async(id)=>{
    await axios.delete(`${BASE_URL}/category/${id}`)
}

export const getcategorypost = async(payload)=>{
    await axios.post(`${BASE_URL}/category`,payload)
}

//info

export const getinfo = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/userinfo`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getuserinfoDelete = async(id)=>{
    await axios.delete(`${BASE_URL}/userinfo/${id}`)
}

export const getuserinfopost = async(payload)=>{
    await axios.post(`${BASE_URL}/userinfo`,payload)
}

//POST
export const getpostinfo = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/post`)
    .then((res)=>{
         globalData = res.data
    })
    return globalData
}

export const getpostDelete = async(id)=>{
    await axios.delete(`${BASE_URL}/post/${id}`)
}

export const getpost = async(payload)=>{
    await axios.post(`${BASE_URL}/post`,payload)
}

