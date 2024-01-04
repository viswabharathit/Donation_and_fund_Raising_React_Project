import React from 'react';
import { useState } from 'react';


import {Lock,Phone,CircleUser,Mail} from "lucide-react";
const Browsing = () => {

  const[data,setData] = useState(false);
  const toggle =()=>
  {
    setData(true);
  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    agreedToTerms: false,
  });

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
    <div className='divmeet'>
      <h1 className='bmeet'>Meet the Fund Raisers</h1>
    </div>
    {/* image1 */}
    <div className='patient1'>
        
    <div className="parent1">
      <div className="realcard1">
        <div className="content-box1">
          {/* <span className="card-title1">3 DAYS MORE</span> */}
          {/* <p className="card-content1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p> */}
          <span className="see-more1">See More</span>
        </div>
        <div className="date-box1">
          <span className="month1">JULY</span>
          <span className="date1">2</span>
        </div>
      </div>
    </div>

        <div>
            <h2 className='broh'>Help Mahalakshmi's Have A Better Chance At Life! Help Her Beat Breast Cancer!</h2>
            <p className='brop'>Hi All,I am Venkatachalam S, reaching out to you with a heavy heart and a plea for help. My beloved wife, Mahalakshmi V Iyer, is battling Breast Cancer, a relentless adversary that has taken a toll on her since its detection in July 2c. Despite her immense courage and resilience, Mahalakshmi is also facing the challenges of brain, lung, and lymph node metastasis.
            Recently, Mahalakshmi's treating oncologist prescribed a vital drug, Tucatinib (Tukysa), crucial for her treatment. The cost of importing this life-saving medication for a two-month supply is 15 lakhs. The proforma invoice for import is attached to this appeal, underscoring the urgency of our situation.</p>
            <button  onClick={toggle} className='brobutton'>CONTRIBUTE NOW</button>
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
                {/* <label htmlFor="form-name-field" className="sr-only">Name</label> */}
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <CircleUser/>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={formData.name}
                    onChange={handleChange1}
                    placeholder="Name"
                  />
                </div>
              </div>
              {/* email field */}
              <div className="form-group">
                <div id="emailError" className="sr-only" role="alert">
                  {errors.email && <div className="alert alert-danger">{errors.email}</div>}
                </div>
                {/* <label htmlFor="form-email-field" className="sr-only">Email</label> */}
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <Mail />
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={handleChange1}
                    placeholder="Email"
                  />
                </div>
              </div>
              {/* phone field */}
              <div className="form-group">
                <div id="phoneError" className="sr-only" role="alert">
                  {errors.phone && <div className="alert alert-danger">{errors.phone}</div>}
                </div>
                {/* <label htmlFor="form-phone-field" className="sr-only">Phone</label> */}
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <Phone />
                    </span>
                  </div>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange1}
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div class="tacbox">
  <input id="checkbox" type="checkbox" />
  <label for="checkbox"> I agree to these <a href="#">Terms and Conditions</a>.</label>
</div>
              <button type="submit" className="btn-default">
                <Lock /> Proceed to pay
              </button>
            </form>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>

    {/* image2 */}
    <div className='patient1'>
        
    <div className="parent2">
      <div className="realcard2">
        <div className="content-box2">
          {/* <span className="card-title2">3 DAYS MORE</span>
          <p className="card-content2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p> */}
          <span className="see-more2">See More</span>
        </div>
        <div className="date-box2">
          <span className="month2">OCT</span>
          <span className="date2">23</span>
        </div>
      </div>
    </div>
    <div>
            <h2 className='broh'>Offer A Helping Hand To Support Soja Ks Treatment Against Stroke!</h2>
            <p className='brop'>Hi Everyone,I hope this message finds you well. My name is Shiju, and I am reaching out to you with a heavy heart to share the story of my relative, Mrs. Soja K.
            Mrs. Soja, a 44-year-old woman and a mother of two small kids, is currently facing a critical health situation. She suffered a stroke on the night of 7th November, which has left her with paralysis on half of her body. She is currently on a ventilator, and her condition is extremely critical.
            The family has already exhausted all resources to gather funds for her treatment, but they find themselves in a desperate situation. Mrs. Soja has undergone mechanical thrombectomy and DE compressive craniotomy at First Neuro Hospital, Mangalore, on 8th November 2023. The medical expenses have accumulated to a significant amount, and an additional 25 lakhs are needed to cover the ongoing treatment.</p>
            <button className='brobutton'>CONTRIBUTE NOW</button>
        </div>
    </div>

    {/* image3 */}
   <div className='patient1'>
    <div className="parent3 ">
      <div className="realcard3">
        <div className="content-box3">
          {/* <span className="card-title3">3 DAYS MORE</span>
          <p className="card-content3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p> */}
          <span className="see-more3">See More</span>
        </div>
        <div className="date-box3">
          <span className="month3">DEC</span>
          <span className="date3">25</span>
        </div>
      </div>
    </div>
      <div>
            <h2 className='broh'>Help Save The Life Of This Father Of A 7 Year Old Boy From Brain Stroke</h2>
            <p className='brop'>Dear Friends,I am Swagata Dasgupta Barmanray, reaching out to you with a heavy heart and a plea for help. My husband, Maitreya Barmanray, is battling a severe health crisis – Hemorrhagic Stroke/Cerebral Hemorrhage. He is currently undergoing treatment at Fortis Hospital, Noida.
            Our family has poured every ounce of strength into collecting funds for Maitreya's medical expenses. We've exhausted our savings and medical insurance coverage, but a daunting gap of Rs. 45,00,000 remains to settle the mounting bills. As the financial burden becomes overwhelming, we turn to you, our community, for support.</p>
            <button className='brobutton'>CONTRIBUTE NOW</button>
        </div>
    </div>



   {/* image4 */}
   <div className='patient1'>
    <div className="parent4 ">
      <div className="realcard4">
        <div className="content-box4">
          {/* <span className="card-title4">3 DAYS MORE</span>
          <p className="card-content4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p> */}
          <span className="see-more4">See More</span>
        </div>
        <div className="date-box4">
          <span className="month4">JULY</span>
          <span className="date4">29</span>
        </div>
      </div>
    </div>
      <div>
            <h2 className='broh'>Support Jasir Ahammed's Fight Against Small Bowel Gangrene Disease.</h2>
            <p className='brop'>Dear All,I am reaching out to you on behalf of my dear friend, Jasir Ahammed A, who is currently facing a formidable opponent – Small Bowel Gangrene Disease. This unforeseen challenge has turned his life upside down, and we are seeking your support to help him win this battle.
            Jasir's journey began 40 days ago when he was diagnosed with Small Bowel Gangrene Disease in Perinthalmanna, Kerala. The prescribed treatment is a Small Bowel Transplant, a vital intervention with a substantial cost of Rs 30 Lakhs.</p>
            <button className='brobutton'>CONTRIBUTE NOW</button>
        </div>
    </div>


    {/* image5 */}
    <div className='patient1'>
    <div className="parent5 ">
      <div className="realcard5">
        <div className="content-box5">
          {/* <span className="card-title5">3 DAYS MORE</span>
          <p className="card-content5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p> */}
          <span className="see-more5">See More</span>
        </div>
        <div className="date-box5">
          <span className="month5">JUNE</span>
          <span className="date5">29</span>
        </div>
      </div>
    </div>
      <div>
            <h2 className='broh'>My Little Boy Can’t Breathe, And I’m Helpless. Please Save Him For Me.</h2>
            <p className='brop'>Hi,My name is Siva Prasad, and today I come before you as a father seeking your help to save the life of my newborn son.
              Born on a sunny day on February 5, 2023, my son was the beacon of joy for our family. Little did we anticipate that this bundle of joy would soon find himself in the relentless grip of bronchopneumonia, leading to chronic lung disease. From the first moment, life chose to test his resilience, and by extension, ours.
              We need Rs. 40,00,000 to ensure our little warrior gets the medical attention he deserves. All we want is for this innocent little boy to be able to grow up.
            </p>
            <button className='brobutton'>CONTRIBUTE NOW</button>
        </div>
    </div>

    </>
  );
}

export default Browsing;
