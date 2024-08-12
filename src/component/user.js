// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Form() {
//   const [contacts, setContacts] = useState([]);
//   const [newContact, setNewContact] = useState({ name: '', email: '', mobile: '' });
//   const navigate = useNavigate();

//   useEffect(() => {
    
//   }, []);

//   const handleInputChange = (e) => {
//     setNewContact({ ...newContact, [e.target.name]: e.target.value });
//   };

//   const handleAddContact = () => {
//     axios.post('https://mindfullness-57i6.vercel.app/api/contacts', newContact)
//       .then(response => {
//         setContacts([...contacts, response.data]);
//         setNewContact({ name: '', email: '', mobile: '', });
//       })
//       .catch(error => console.error(error));
//     navigate('/enr');
//   };

//   return (
//     <div className="mx-auto my-8 container">
//       <h1 className="text-3xl font-bold mb-4">Fill Your details</h1>

//       <div className="mt-8">
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={newContact.name}
//           onChange={handleInputChange}
//           className="input-field mb-4 p-2 border border-gray-300 rounded w-full"
//         />
//         <input
//           type="text"
//           name="email"
//           placeholder="Email"
//           value={newContact.email}
//           onChange={handleInputChange}
//           className="input-field mb-4 p-2 border border-gray-300 rounded w-full"
//         />
//         <input
//           type="text"
//           name="mobile"
//           placeholder="Mobile"
//           value={newContact.mobile}
//           onChange={handleInputChange}
//           className="input-field mb-4 p-2 border border-gray-300 rounded w-full"
//         />
       
//         <button
//           className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
//           onClick={handleAddContact}
//         >
//          Saved
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Form;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import im from './6310507.jpg';
import Nav from './nav';

function Form() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', email: '', mobile: '' });
  const navigate = useNavigate();

  useEffect(() => {
    // Optionally fetch existing contacts or perform other initial setup
  }, []);

  const handleInputChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleAddContact = () => {
    const { name, email, mobile } = newContact;

    if (!name || !email || !mobile) {
      alert("All fields are required.");
      return;
    }

    axios.post('https://rcebookresbe.vercel.app/api/contacts', newContact)
      .then(response => {
        setContacts([...contacts, response.data]);
        setNewContact({ name: '', email: '', mobile: '' });
        navigate('/enr');
      })
      .catch(error => console.error(error));
  };

  return (
    <>
      <Nav />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <img src={im} alt="Form Image" />
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Share Details</h2>
            <div className="relative mb-4">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newContact.name}
                onChange={handleInputChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newContact.email}
                onChange={handleInputChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="mobile" className="leading-7 text-sm text-gray-600">Phone Number</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile"
                value={newContact.mobile}
                onChange={handleInputChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <button
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={handleAddContact}
            >
              Submit
            </button>
            <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Form() {
//   const [contacts, setContacts] = useState([]);
//   const [newContact, setNewContact] = useState({ name: '', email: '', mobile: '', issue: '' });

//   useEffect(() => {
//     axios.get('/api/contacts')
//       .then(response => setContacts(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   const handleInputChange = (e) => {
//     setNewContact({ ...newContact, [e.target.name]: e.target.value });
//   };

//   const handleAddContact = () => {
//     axios.post('/api/contacts', newContact)
//       .then(response => {
//         setContacts([...contacts, response.data]);
//         setNewContact({ name: '', email: '', mobile: '', issue: '' });
//       })
//       .catch(error => console.error(error));
//   };

//   const handleUpdateContact = (id) => {
//     axios.put(`/api/contacts/${id}`, newContact)
//       .then(response => {
//         setContacts(contacts.map(contact => (contact._id === id ? response.data : contact)));
//         setNewContact({ name: '', email: '', mobile: '', issue: '' });
//       })
//       .catch(error => console.error(error));
//   };

//   const handleDeleteContact = (id) => {
//     axios.delete(`/api/contacts/${id}`)
//       .then(() => setContacts(contacts.filter(contact => contact._id !== id)))
//       .catch(error => console.error(error));
//   };

//   return (
//     <div className="container mx-auto my-8">
//       <h1 className="text-3xl font-bold mb-4">MERN CRUD App</h1>
//       <ul className="mb-4">
//         {contacts.map(contact => (
//           <li key={contact._id} className="mb-2 p-2 border border-gray-300 rounded">
//             <span className="mr-2 inline-block">{contact.name}</span>
//             <span className="mr-2 inline-block">{contact.email}</span>
//             <span className="mr-2 inline-block">{contact.mobile}</span>
//             <span className="mr-2 inline-block">{contact.issue}</span>
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
//               onClick={() => handleUpdateContact(contact._id)}
//             >
//               Update
//             </button>
//             <button
//               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//               onClick={() => handleDeleteContact(contact._id)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//       <div className="flex flex-wrap items-center">
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={newContact.name}
//           onChange={handleInputChange}
//           className="mr-2 mb-2 p-2 border border-gray-300 rounded"
//         />
//         <input
//           type="text"
//           name="email"
//           placeholder="Email"
//           value={newContact.email}
//           onChange={handleInputChange}
//           className="mr-2 mb-2 p-2 border border-gray-300 rounded"
//         />
//         <input
//           type="text"
//           name="mobile"
//           placeholder="Mobile"
//           value={newContact.mobile}
//           onChange={handleInputChange}
//           className="mr-2 mb-2 p-2 border border-gray-300 rounded"
//         />
//         <input
//           type="text"
//           name="issue"
//           placeholder="Issue"
//           value={newContact.issue}
//           onChange={handleInputChange}
//           className="mr-2 mb-2 p-2 border border-gray-300 rounded"
//         />
//         <button
//           className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//           onClick={handleAddContact}
//         >
//           Add Contact
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Form;