import React from 'react';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ContactRows = ({ data, handleShow }) => {
    const dispatch = useDispatch();

    const deleteContact = id => {
        dispatch({ type: 'DELETE_CONTACT', payload: id });
    }

    if (data.length > 0)
        return (
            data.map(({ id, first_name, last_name, middle_name, email, mobile_no }) =>
                <tr key={id}>
                    <td>{id}</td>
                    <td>
                        <Button className="me-1 p-0" variant="primary" size="sm" onClick={() => handleShow(id)}>
                            <FaPencilAlt className='m-1' />
                        </Button>
                        <Button className="me-1 p-0" variant="danger" size="sm" onClick={() => deleteContact(id)}>
                            <FaTrash className='m-1' />
                        </Button>
                    </td>
                    <td>{first_name} {middle_name ? `${middle_name} ` : ''}{last_name}</td>
                    <td>{email}</td>
                    <td>{mobile_no}</td>
                </tr>)
        );

    return (
        <tr>
            <td className="text-center" colSpan="5">NO RECORD</td>
        </tr>
    );
};

export default ContactRows;
