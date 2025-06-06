import { baseUrl } from "./index"


export const getCart = async () => {
    const response = await fetch(`${baseUrl}/cart`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    // console.log(response)
    if(response.ok){
        return response
    }
}

export const createCart = async (productId, quantity) => {
    const response = await fetch(`${baseUrl}/cart`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ productId, quantity })
    })
    // console.log(response)
    if(response.ok){
        return response
    }
}

export const updateCart = async (productId, quantity) => {
    const response = await fetch(`${baseUrl}/cart`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ productId, quantity })
    })
    // console.log(response)
    if(response.ok){
        return response
    }
}
export const removeCart = async (productId) => {
    const response = await fetch(`${baseUrl}/ cart`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ productId })
    })
    // console.log(response)
    if(response.ok){
        return response
    }
}