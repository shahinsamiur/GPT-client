// callApi.js
import axios from 'axios';

const callAPI = async (url, param) => {
  try {
    const response = await axios.post(url,param);
    console.log(response.data)
    return response.data; 
  } catch (error) {
    console.error(error);
   alert("something is wrong")
  }
};

export { callAPI };
