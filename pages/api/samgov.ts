import axios from "axios";
import  cookies  from "js-cookie";
// cookies.set("api_key", "rRmP3VjBWI3KyPtWL5ncoz4XyrjPAwPnGfyDJ9Je");
const api_key = cookies.get("api_key");

export const Sam = async (query:string) => {
    const res =  await axios.get(`https://api.sam.gov/prod/opportunities/v2/search?limit=1000&api_key=${api_key}&postedFrom=01/01/2025&postedTo=05/03/2025&ptype=a&deptname=general&title=${query}`)
    return res
  };