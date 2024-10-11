import axios from "axios";

const baseUrl = 'http://157.230.179.244/' 

export async function AxiosPost(url: string, dataObject: any) {
    try {
      // console.log(`Making POST request to: ${baseUrl}${url}`);
      const res = await axios.post(`${baseUrl}${url}`, dataObject, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (err) {
      throw err;
    }
  }
  export async function AxiosGet(url:string) {
    // const auth = JSON.parse(localStorage.getItem("stk-apk"));
    // const token = !auth ? "" : auth.authToken;
    // const authConfig = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   }
    // };
  
    try {
      // const res = await axios.get(`${baseUrl}${url}`);
      const res = await axios.get(`${baseUrl}${url}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (err) {
      throw err;
    }
    
  }
  