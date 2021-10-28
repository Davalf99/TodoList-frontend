import axios from "axios";

//const url = "http://localhost:8080/";
// axios.get(url+'test2', {params:{
//     test:'david'
//   }})
//   .then((response) => {
//     console.log(response.data);
//     setTest(response.data)
//   });

export default axios.create({
    baseURL: 'http://localhost:8080/'
});