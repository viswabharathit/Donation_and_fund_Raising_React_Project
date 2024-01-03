import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    fundNeedFor: '',
    hospitalisation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="regclass">
      <div className="container">
        <div className="form">
          <h2>Need Money Urgently?</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
              />

              <select
                name="fundNeedFor"
                value={formData.fundNeedFor}
                onChange={handleChange}
                required
              >
                <option value="">Select Fund Need For</option>
                <option value="medical_expenses">Medical Expenses</option>
                <option value="surgery">Surgery</option>
              </select>

              <select
                name="hospitalisation"
                value={formData.hospitalisation}
                onChange={handleChange}
                required
              >
                <option value="">Select Hospitalisation</option>
                <option value="public_hospital">Public Hospital</option>
                <option value="private_hospital">Private Hospital</option>
              </select>
                <Link to = "/"><button className='buttonstyle2'>Start a Fundraiser</button></Link>
                <div className='already'>
                <p className='parastyle1'>Already signed in?</p>
                <Link to ="/login"><button className='buttonstyle1'>Login in</button></Link>
                </div>
            </div>

           
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;