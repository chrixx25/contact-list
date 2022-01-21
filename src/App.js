import React, { useState } from 'react';

const App = () => {
  const [contact, setContact] = useState({ first_name: '', last_name: '', middle_name: '', email: '', mobile_no: '' });
  const [contacts, setContacts] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { first_name, last_name, middle_name, email, mobile_no } = contact;

    if (first_name && last_name && middle_name && email && mobile_no) {
      const new_contact = { ...contact, id: new Date().getTime().toString() };

      setContacts([...contacts, new_contact]);
      setContact({ first_name: '', last_name: '', middle_name: '', email: '', mobile_no: '' });
    }
  };

  return (
    <div className='container'>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='first_name'>First Name : </label>
            <input
              type='text'
              id='first_name'
              name='first_name'
              value={contact.first_name}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='last_name'>Last Name : </label>
            <input
              type='text'
              id='last_name'
              name='last_name'
              value={contact.last_name}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='middle_name'>Middle Name : </label>
            <input
              type='text'
              id='middle_name'
              name='middle_name'
              value={contact.middle_name}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='mobile_no'>Contact No. : </label>
            <input
              type='text'
              id='mobile_no'
              name='mobile_no'
              value={contact.mobile_no}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={contact.email}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn' onClick={handleSubmit}>
            Add Contact
          </button>
        </form>

        {contacts.map((contact) => {
          const { id, first_name, last_name, middle_name, email, mobile_no } = contact;
          return (
            <div className='item' key={id}>
              <h4>{first_name} {middle_name ? `${middle_name} ` : ''}{last_name}</h4>
              <p>{email}</p>
              <p>{mobile_no}</p>
            </div>
          );
        })}
      </article>
    </div>
  );
}

export default App;
