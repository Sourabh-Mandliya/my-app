import React, { useState } from "react";
import Axios from "axios";
import { Form, Input, Button, Label, FormGroup, Row, Col, Table } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';

import "./HospitalForm.css";

const HospitalForm = () => {
        const [weekday, setWeekday] = useState("");
        const [startDate, setStartDate] = useState("");
        const [repeatType, setRepeatType] = useState("");
        const [shift, setShift] =useState("Morning Shift - 5am to 9am");
        const [startTime, setStartTime] =useState("");
        const [endTime , setEndTime] =useState("");
        
        const url = "http://0c4992d4f89b.ngrok.io/form/all/?format=api/fd816dbf5041ae75f53a8216953e3da203a38ac5"; 
   
        const notify = () => toast.warning("Fill all required Fields !",{autoClose:3000});

           async function  callApi(){
           await Axios.post(url,{startDate, repeatType, shift, startTime, endTime, weekday})
           .then(response =>{
               console.log(response);
           }).catch(err =>{
               console.log(err);
           })

        }

        const handleStartDate =(e)=>{
            setStartDate(e.target.value);
            console.log(e.target.value);
        }

        const handleReapettype =(e)=>{
            setRepeatType(e.target.value);
            console.log(e.target.value);
        }

        const handleShift =(e)=>{
            setShift(e.target.value);
            console.log(e.target.value);
        }

        const handleStartTime =(e)=>{
            setStartTime(e.target.value);
            console.log(e.target.value);
        }

        const handleEndTime =(e)=>{
            setEndTime(e.target.value);
            console.log(e.target.value);
        }

        const handleOptionChange = (e)=>{
            setWeekday(e.target.value);
            console.log(e.target.value);
        }

        
        const handleData =(e)=>{
            if(weekday === "" || startDate === "" || startTime === "" || endTime === "" || shift === "" || repeatType === "")
                notify();
            else
                callApi();
        }

    return (
        <div id="container">
            <h5>Select Start Date and Shift Time</h5>
            <p >each row represents a shift</p>
            <br />
            <Form name="shiftForm">
                <FormGroup row>
                    <Label sm={3} md={3} lg={3} >Select Start Date</Label>
                    <Col sm={9}><Input type="date" required  onChange={handleStartDate}></Input></Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={3} md={3} lg={3} >Select Repeat Type</Label>
                    <Col sm={9}>
                        <Input type="select" required  onChange={handleReapettype}>
                            <option value={'None'} >None</option>
                            <option value={'Daily'}>Daily</option>
                            <option value={"Weekly"}>Weekly</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={3} md={3} lg={3}>Select Shift</Label>
                    <Col sm={9}>
                        <Input type="select" required onChange={handleShift}> 
                            <option>Morning Shift - 5am to 9am</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={3} md={3} lg={3}>Select Start Time</Label>
                    <Col sm={9}> <Input type="time"  required   onChange={handleStartTime}></Input></Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={3} md={3} lg={3} >Select End Time</Label>
                    <Col sm={9}> <Input type="time" required onChange={handleEndTime}></Input></Col>
                </FormGroup>
                <div class="table-responsive table-weekday" >
                    <h5>Please select the day of the week</h5>
                    <br />
                    <Table>
                        <thead>
                            <tr>
                                <th>MON</th>
                                <th>TUE</th>
                                <th>WED</th>
                                <th>THU</th>
                                <th>FRI</th>
                                <th>SAT</th>
                                <th>SUN</th>
                            </tr>    
                        </thead>
                        <tbody>
                            <tr>
                                <td ><Input type="radio" value="MON" onChange={handleOptionChange} checked={weekday==="MON"}></Input></td>
                                <td><Input type="radio" value="TUE" onChange={handleOptionChange} checked={weekday==='TUE'}></Input></td>
                                <td><Input type="radio" value="WED" onChange={handleOptionChange} checked={weekday==="WED"}></Input></td>
                                <td><Input type="radio" value="THU" onChange={handleOptionChange} checked={weekday==="THU"}></Input></td>
                                <td><Input type="radio" value="FRI" onChange={handleOptionChange} checked={weekday==="FRI"}></Input></td>
                                <td><Input type="radio" value="SAT" onChange={handleOptionChange} checked={weekday==="SAT"}></Input></td>
                                <td><Input type="radio" value="SUN" onChange={handleOptionChange} checked={weekday==="SUN"}></Input></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <br />
                <Row>
                    <Col sm={3} md={3} lg={3}>
                        <Input type="checkbox"></Input>
                        <Label>Week Days Only</Label>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm={9} md={9} lg={9} />
                    <Col>  
                        <Button color="primary" style={{ borderRadius: "15px" }} onClick={handleData}><strong>ADD+</strong></Button> 
                    </Col>
                </Row>
            </Form>
            <ToastContainer />
        </div>
    )
}

export default HospitalForm;