import React, { useState, useEffect } from "react";
import { Form, Input, Button, Label, FormGroup, Row, Col, Table } from "reactstrap";

import "./HospitalForm.css";

const HospitalForm = () => {
        const [weekday, setWeekday] = useState("");

        const handleOptionChange = (e)=>{
            setWeekday(e.target.value);
        }

    return (
        <div id="container">
            <h5>Select Start Date and Shift Time</h5>
            <p >each row represents a shift</p>
            <br />
            <Form>
                <FormGroup row>
                    <Label sm={3} md={3} lg={3} >Select Start Date</Label>
                    <Col sm={9}><Input type="date" required></Input></Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={3} md={3} lg={3} >Select Repeat Type</Label>
                    <Col sm={9}>
                        <Input type="select" required>
                            <option value={'None'} >None</option>
                            <option value={'Daily'}>Daily</option>
                            <option value={"Weekly"}>Weekly</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={3} md={3} lg={3}>Select Shift</Label>
                    <Col sm={9}>
                        <Input type="select" required>
                            <option value="Morning Shift - 5am to 9am">Morning Shift - 5am to 9am</option>

                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={3} md={3} lg={3}>Select Start Time</Label>
                    <Col sm={9}> <Input type="time"  required></Input></Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={3} md={3} lg={3} >Select End Time</Label>
                    <Col sm={9}> <Input type="time" required></Input></Col>
                </FormGroup>
                <div class="table-responsive table-weekday" >
                    <h5>Please select the day of the week</h5>
                    <br />
                    <Table>
                        <thead>
                            <th>MON</th>
                            <th>TUE</th>
                            <th>WED</th>
                            <th>THU</th>
                            <th>FRI</th>
                            <th>SAT</th>
                            <th>SUN</th>
                        </thead>
                        <tbody>
                            <td ><Input type="radio" value="MON" onChange={handleOptionChange} checked={weekday==="MON"}></Input></td>
                            <td><Input type="radio" value="TUE" onChange={handleOptionChange} checked={weekday==='TUE'}></Input></td>
                            <td><Input type="radio" value="WED" onChange={handleOptionChange} checked={weekday==="WED"}></Input></td>
                            <td><Input type="radio" value="THU" onChange={handleOptionChange} checked={weekday==="THU"}></Input></td>
                            <td><Input type="radio" value="FRI" onChange={handleOptionChange} checked={weekday==="FRI"}></Input></td>
                            <td><Input type="radio" value="SAT" onChange={handleOptionChange} checked={weekday==="SAT"}></Input></td>
                            <td><Input type="radio" value="SUN" onChange={handleOptionChange} checked={weekday==="SUN"}></Input></td>
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
                        <Button color="primary" style={{ borderRadius: "15px" }}><strong>ADD+</strong></Button> 
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default HospitalForm;