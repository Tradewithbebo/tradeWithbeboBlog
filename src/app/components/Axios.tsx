import axios from "axios";

const baseUrl = 'https://beboapi.onrender.com/' || 'http://localhost:3000/';

export async function AxiosPost(url: string, dataObject: any) {
    try {
      console.log(`Making POST request to: ${baseUrl}${url}`);
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
  