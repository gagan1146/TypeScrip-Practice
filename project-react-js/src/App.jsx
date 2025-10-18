// ...existing code...
import './App.css'
import {useState,useEffect} from 'react';
import axios from 'axios';
function App() {
  const [data,setData]=useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const response = await axios.get("https://randomuser.me/api?results=5");
        setData(response.data.results);
      }catch(error){
        console.error("Error",error);
      }
    };
    fetchData();
  },[])
  return (
    <>
    <div className="container mt-4">
      <h2 className="mb-3">Random Users</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Gender</th>
              <th>Email</th>
              <th>Name</th>
              <th>Profile Picture</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((user,index)=>(
                <tr key={index}>
                  <td>{user.gender}</td>
                  <td>{user.email}</td>
                  <td>{user.name.first} {user.name.last}</td>
                  <td>
                    <img src={user.picture.medium} alt="Profile" className="rounded-circle" width="48" height="48" />
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default App;
// ...existing code...