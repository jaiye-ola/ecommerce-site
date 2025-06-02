import { baseUrl} from "./index"
export const  getCart = async (data) =>{
          const response = await fetch(`$baseUrl/cart`,{
            mehod: "GET",
            headers:{
                "Content-Type": "application/json"
            }
          })
          if (response.ok) {
            return
          }

}        