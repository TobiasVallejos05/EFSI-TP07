import axios from "axios";

export const GetAllProducts= async () =>{
    return axios.get(`https://dummyjson.com/products`)
    .then(function(res){
        return res
    })
    .catch(function(err){
        throw err
    })
}

export const GetProductById= async (id) =>{
    return axios.get(`https://dummyjson.com/products/${id}`)
    .then(function(res){
        return res
    })
    .catch(function(err){
        throw err
    })
}