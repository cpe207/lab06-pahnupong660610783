// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  /* Your code here */
  try {
    const todoresp = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const userresp = await axios.get(`https://jsonplaceholder.typicode.com/users/${todoresp.data.userId}`);
    return {
      owner: `${userresp.data.name}`,
      title: `${todoresp.data.title}`,
      completed: todoresp.data.completed
    }; 
    } catch (err) {
      return "INVALID TODO ID";
    }
  };

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;

//ภานุพงศ์ แก้วประมูล 660610783
