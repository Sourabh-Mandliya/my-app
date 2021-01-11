
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import HospitalForm from './HospitalForm';

const ModalForm = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>HospitalForm</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}  size="lg" >
        <ModalHeader toggle={toggle}>HospitalForm</ModalHeader>
        <ModalBody>
        <HospitalForm />  
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalForm;