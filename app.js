// npm init yaptım
// ardından npm install çalıstırdım.

import axios from "axios";
async function getData(userid){
const {data:users}= await axios("https://jsonplaceholder.typicode.com/users/" + userid)
const {data:posts}= await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userid)
return {"users":users,"posts":posts}
}

export default getData;