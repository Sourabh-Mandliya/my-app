import axios from "axios";
import React,{ useEffect,useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Data from "./Data.json";

const Shifts =()=>{
  const [totalShifts, setTotalShifts] = useState([]);
  const [message, setMessage] =useState("Fill all required Fields !");
  
  useEffect(()=>{
    callGetApi();
  },[]);

  const notify = (message) => toast.warning(message,{autoClose:3000}); // notify()not call yet

  async function callGetApi(){
    axios.get("http://0c4992d4f89b.ngrok.io/form/all/?format=api/fd816dbf5041ae75f53a8216953e3da203a38ac5")
    .then(response =>{ 
      console.log(response);
      setTotalShifts(response.data);
      
    }).catch(err => {
      console.log(err);
      setMessage(err);
      notify(err);
    })
  }
console.log(Data);
return (
    <React.Fragment>
      <h3 style={{textAlign:"center"}}>Shifts Records</h3>
      <div class="container" style={{marginTop:"2%"}}>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col" style={{textAlign:"center"}}>StartDate</th>
              <th scope="col" style={{textAlign:"center"}}>RepeatType</th>
              <th scope="col" style={{textAlign:"center"}}>Shift</th>
              <th scope="col" style={{textAlign:"center"}}>StartTime</th>
              <th scope="col" style={{textAlign:"center"}}>EndTime</th>
              <th scope="col" style={{textAlign:"center"}}>Weekday</th>
            </tr>
          </thead>
          <tbody>
            {
              Data.map((result,index)=>(
                <tr>
                  <th scope="row">{index+1}</th>
                  <td>{result.startDate}</td>
                  <td>{result.repeatType}</td>
                  <td>{result.shift}</td>
                  <td>{result.startTime}</td>
                  <td>{result.endTime}</td>
                  <td>{result.weekday}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </React.Fragment>
)}

export default Shifts;