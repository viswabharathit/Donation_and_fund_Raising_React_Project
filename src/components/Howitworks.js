import React, { useState } from "react";
import i1 from '../assets/images/c1.png';
import i2 from '../assets/images/c2.png';
import i3 from '../assets/images/c3.png';
import i4 from '../assets/images/c4.png';
import i5 from '../assets/images/c5.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faQuestionCircle, faRupee } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

function HowItWorks() {

  const [raiseAmount, setRaiseAmount] = useState('');
  const [patientName, setPatientName] = useState('');
  const [relationship, setRelationship] = useState('');


  const [data, setData] = useState(false);
  const toggle = () => {
    setData(true);
  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    agreedToTerms: false,
  });
  
  function changePage() {
    // Change the page URL to a new location
    window.location.href = '/';
}
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange1 = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleCheckboxChange1 = (e) => {
    setFormData({
      ...formData,
      agreedToTerms: e.target.checked,
    });
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    // Add your form validation and submission logic here

    // Example: Validate the name field
    if (formData.name.trim() === '') {
      setErrors({ ...errors, name: 'Name is required' });
      return;
    } else {
      setErrors({ ...errors, name: '' });
    }

    // Example: Validate the email field
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors({ ...errors, email: 'Invalid email address' });
      return;
    } else {
      setErrors({ ...errors, email: '' });
    }


    // Example: Validate the phone field
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setErrors({ ...errors, phone: 'Invalid phone number' });
      return;
    } else {
      setErrors({ ...errors, phone: '' });
    }

    // Example: Submit the form data
    console.log('Form Data:', formData);
  };

  return (
    <>
      <div className="h1div">
        <h1 className="howh1">Raising Funds was never this easy. Start a fundraiser in 5 minutes!</h1>
      </div>
      <div>
        <div className="pic-ctn">
          <img src={i1} alt="" className="pic" />
          <img src={i2} alt="" className="pic" />
          <img src={i3} alt="" className="pic" />
          <img src={i4} alt="" className="pic" />
          <img src={i5} alt="" className="pic" />
        </div>

        <div>
          <h1 className="steps">Start a Fundraiser in three simple steps</h1>
        </div>

        <div className="howfooter">

          <div classname="footerh3">
            <h3 className="footerstart">START YOUR MEDICAL FUND RAISER RIGHT WAY</h3>
          </div>
          <div className="howinput">
            <input
              type="text"
              placeholder="How much do you want to raise?"
              value={raiseAmount}
              onChange={(e) => setRaiseAmount(e.target.value)}
            />

            <input
              type="text"
              placeholder="Patient's full name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
            <select
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)} className="howdrop">
              <option value="" disabled hidden>
                The patient is my
              </option>
              <option value="friend">Friend</option>
              <option value="sibling">Sibling</option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
              <option value="self">Self</option>
              <option value="colleague">Colleague</option>
            </select>
            <div className="divstart">
              <button className="getstarted" onClick={toggle}><FontAwesomeIcon icon={faArrowCircleRight}/>GET STARTED</button>
            </ div>
        </div>
        {data ? (
        <div className="modal-container">
          <div className="modal">
            <h2 className='hand'>Be the hand that lifts others up.</h2>
            <form role="form" id="contact-form" onSubmit={handleSubmit1}>
              {/* name field */}
              <div className="form-group">
                <div id="nameError" className="sr-only" role="alert">
                  {errors.name && <div className="alert alert-danger">{errors.name}</div>}
                </div>
                <label htmlFor="form-name-field" className="sr-only">Name</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faRupee} />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={formData.name}
                    onChange={handleChange1}
                    placeholder="Amount required"
                  />
                </div>
              </div>
              {/* email field */}
              <div className="form-group">
                <div id="emailError" className="sr-only" role="alert">
                  {errors.email && <div className="alert alert-danger">{errors.email}</div>}
                </div>
                <label htmlFor="form-email-field" className="sr-only">Email</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faQuestionCircle} />
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={handleChange1}
                    placeholder="Title for fund raising"
                  />
                </div>
              </div>
              {/* phone field */}
              <div className="form-group">
                <div id="phoneError" className="sr-only" role="alert">
                  {errors.phone && <div className="alert alert-danger">{errors.phone}</div>}
                </div>
                <label htmlFor="form-phone-field" className="sr-only">Phone</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faQuestionCircle} />
                    </span>
                  </div>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange1}
                    placeholder="Fund raising story"
                  />
                </div>
              </div>
              <div className="checkbox">
                  <input
                    type="checkbox"
                    id="checkbox-form"
                    checked={formData.agreedToTerms}
                    onChange={handleCheckboxChange1}
                    /> 
              </div>
              <div  classname="agree">
                    I agree to terms and conditions.
              </div>
              <button type="submit" className="btn-default" onClick={changePage}>
                <FontAwesomeIcon icon={faLock} /> Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        ''
      )}

        </div>
        </div>
      </>
      );
    }
    export default HowItWorks;


