
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import HospitalForm from './HospitalForm';

const ModalForm = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <React.Fragment>
      <Button color="danger" onClick={toggle}>Add Shift</Button>
      <Modal isOpen={modal} toggle={toggle} size="lg" >
        <ModalHeader toggle={toggle}>Shift Form</ModalHeader>
        <ModalBody>
        <HospitalForm />  
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

export default ModalForm;