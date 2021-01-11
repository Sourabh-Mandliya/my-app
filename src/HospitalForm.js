import React, { useState, useEffect } from "react";
import { Form, Input, InputGroup, Button, Label, FormGroup, Row, Col, Container,Table } from "reactstrap";

import './HospitalForm.css';

const HospitalForm = () => {
    return (
        <Container style={{backgroundColor:"white",paddingTop:"2%",paddingLeft:"10%",paddingRight:"10%"}}>
            <h5 style={{textAlign:"left"}}>Select Start Date and Shift Time</h5>
            <p style={{textAlign:"left"}}>each row represents a shift</p>
            <br />
            <Form>
                <FormGroup row>
                    <Label sm={3} md={3} lg={3} ><strong>Select Start Date</strong></Label>
                    <Col sm={9}><Input type="date"></Input></Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={3} md={3} lg={3} ><strong>Select Repeat Type</strong></Label>
                    <Col sm={9}>  
                        <Input type="select">
                            <option value={'None'} >None</option>
                            <option value={'Daily'}>Daily</option>
                            <option value={"Weekly"}>Weekly</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={3} md={3} lg={3}><strong>Select Shift</strong></Label>
                    <Col sm={9}>    
                        <Input type="select">
                            <option>None</option>
                            <option value="Morning Shift - 5am to 9am">Morning Shift - 5am to 9am</option>
                            
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={3} md={3} lg={3}><strong>Select Start Time</strong></Label>
                    <Col sm={9}> <Input type="time"></Input></Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={3} md={3} lg={3} ><strong>Select End Time</strong></Label>
                    <Col sm={9}>   <Input type="time"></Input></Col>
                </FormGroup>
                <div class="table-responsive" style={{ border: "1px solid black",marginTop:"2%",padding:"2%",position:"relative" }}>
                <h5 style={{textAlign:"left",fontSize:"2vw"}}>Please select the day of the week</h5>
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
                        <td ><Input type="radio" name="day"></Input></td>
                        <td><Input type="radio" name="day"></Input></td>
                        <td><Input type="radio" name="day"></Input></td>
                        <td><Input type="radio" name="day"></Input></td>
                        <td><Input type="radio" name="day"></Input></td>
                        <td><Input type="radio" name="day"></Input></td>
                        <td><Input type="radio" name="day"></Input></td>
                    </tbody>
                </Table>
                </div>
                <br />
                <Row>
                    <Col sm={3} md={3} lg={3}>
                        <Input type="checkbox"></Input>
                        <Label><strong>Week Days Only</strong></Label>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col sm={9} md={9} lg={9} />
                    <Col>  <Button color="primary" style={{borderRadius:"15px"}}><strong>ADD+</strong></Button> </Col></Row>
            </Form>
            <br/>
        </Container>
    )
}

export default HospitalForm;