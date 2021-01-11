import axios from "axios";
import React,{ useEffect,useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

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


return (
    <React.Fragment>
      <h3 style={{textAlign:"center"}}>Shifts Records</h3>
      <div class="container" style={{marginTop:"2%"}}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Weekday</th>
              <th scope="col">Shift</th>
              <th scope="col">Repeat-Type</th>
              <th scope="col">Start-Date</th>
              <th scope="col">Start-Time</th>
              <th scope="col">End-Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </React.Fragment>
)}

export default Shifts;