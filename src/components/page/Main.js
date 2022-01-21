import React, { useState, useEffect } from 'react'
import { Container, Table, Col, Row, Button } from 'react-bootstrap';
import Header from '../layout/Header';
import AddContactModal from './AddContactModal';
import EditContactModal from './EditContactModal';
import ContactRows from './ContactRows';
import { FaPlus } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Main = () => {
    const contacts = useSelector((state) => state);
    const [id, setId] = useState();

    const [showAdd, setShowAdd] = useState(false);
    const handleAddClose = () => setShowAdd(false);
    const handleAddShow = () => setShowAdd(true);

    const [showEdit, setShowEdit] = useState(false);
    const handleEditClose = () => setShowEdit(false);
    const handleEditShow = (contact_id) => {
        setId(contact_id);
        setShowEdit(true);
    };

    return (
        <main>
            <Header />
            <Container>
                <div className="mt-5 p-3 bg-body rounded shadow-sm">
                    <Row>
                        <Col lg={2}>
                            <Button variant="dark w-100" onClick={handleAddShow}><FaPlus /> CONTACT</Button>
                        </Col>
                    </Row>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Actions</th>
                                <th>Full Name</th>
                                <th>Mobile No.</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ContactRows data={contacts} handleShow={handleEditShow} />
                        </tbody>
                    </Table>
                </div>
            </Container>
            <AddContactModal
                show={showAdd}
                handleClose={handleAddClose} />
            {id && <EditContactModal
                show={showEdit}
                handleClose={handleEditClose}
                contact_id={id} />}

        </main>
    );
}

export default Main;