import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setname] = useState("")
  const [age, setage] = useState(0)
  const [username, setusername] = useState("")
  useEffect(() => {
    return () => {
      const datas = axios.get("http://localhost:3001/").then((res) => {
        res.data;
        setUsers(res.data);
      });
      console.log(datas);
    };
  }, []);
  const createUser =()=>{
    axios.post("http://localhost:3001/create",{name:name,age:age,username:username}).then(res=>{
      setUsers([...users,{name:name,age:age,username:username}]);

    })
  }
    return (
    <>
      <div>
        <div>
          {users.map((e) => {
            return (
              <h1>
                {e.name},{e.age},{e.username}
              </h1>
            );
          })}
        </div>
        <div>
          <input type="text" placeholder="Name..." onChange={e =>setname(e.target.value)} />
          <input type="number" placeholder="Age..." onChange={e =>setage(e.target.value)}/>
          <input type="text" placeholder="Username..."onChange={e =>setusername(e.target.value)} />
          <button onClick={createUser}>submit</button>
          <h1>Hello world</h1>
        </div>
      </div>
    </>
  );
}

export default App;
