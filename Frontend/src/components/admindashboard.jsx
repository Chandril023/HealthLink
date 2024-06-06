import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminDashboard() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('payments');
  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem('token');
    window.location.href = '/';
  };
  

  return (
    <div className='admin-dashboard'>
      <nav className='admin-dashboard-navbar'>
        <ul>
          <li onClick={() => setActiveSection('payments')}>Payments</li>
          <li onClick={() => setActiveSection('registrations')}>Doctors</li>
          <li onClick={() => setActiveSection('updations')}>Updations</li>
          <li onClick={() => setActiveSection('points')}>Points</li>
        </ul>
      </nav>
      <div className='content'>
        <h2>Admin Dashboard</h2>
        {activeSection === 'payments' && (
          <>
            <h3>Generate Payment Token</h3>
            <div className="row">
              <h4>Account</h4>
              <div className="input-group input-group-icon">
               
                <div className="input-icon"><i className="fa fa-user"></i></div>
              </div>
              <div className="input-group input-group-icon">
                <input
                  type="text"
                  placeholder="IN-GAME-ID"
                />
                <div className="input-icon"><i className="fa fa-key"></i></div>
              </div>
              <button >Generate</button>
            </div>
            <h3>Payment Token Database</h3>
       
          </>
        )}
        {activeSection === 'points' && (
          <>
            <h3>Master Points Database</h3>
            
          </>
        )}
        {activeSection === 'updations' && (
          <>
            <h2>Update the Doctors database</h2>
            <>
            <h2>Doctor Updation</h2>
            <form id="contact-form" role="form">
<div class="controls">
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="form_name">Doctor Name *</label>
                <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter the Doctors Name *" required="required" data-error="Name is required."/>
                
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="form_speciality">Speciality*</label>
                <input id="form_speciality" type="text" name="surname" class="form-control" placeholder="Please enter speciality*" required="required" data-error="Speciality is required."/>
                                                </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="degree">Degree Specifications *</label>
                <input id="degree" type="test" name="degree" class="form-control" placeholder="Please enter your Degree Specifications *" required="required" data-error="Degree Specifications are required."/>     
            </div>
            <div class="form-group">
                <label for="department">Department*</label>
                <input id="department" type="text" name="surname" class="form-control" placeholder="Please enter department name*" required="required" data-error="Department is required."/>
                                                </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="form_day">Please select Date*</label>
                <select id="form_day" name="need" class="form-control" required="required" data-error="Please enter your preferred day.">
                    <option value="" selected disabled>--Select A Day--</option>
                    <option >Monday</option>
                    <option >Tuesday</option>
                    <option >Wednesday</option>
                    <option >Thursday</option>
                    <option >Friday</option>
                    <option >Saturday</option>
                </select> 
                <label for="form_slot">Please select Time Slot*</label>
                <select id="form_slot" name="need" class="form-control" required="required" data-error="Please enter your preffered slot.">
                    <option value="" selected disabled>--Select A TIME SLOT--</option>
                    <option >Morning(9-12)</option>
                    <option >Afternoon(2-5)</option>
                    <option >Evening(6-9)</option>
                </select>       
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-3">
            <div class="form-group">
                <label for="form_number">Phone Number Details*</label>
                <textarea id="form_number" name="number" class="form-control" placeholder="Please enter your number here." rows="1" required="required" data-error="Please, leave us a number."></textarea
                    >
                </div>

            </div>
            <div class="col-md-3">
            <div class="form-group">
                <label for="form_number">Email*</label>
                <textarea id="form_email" type='email' name="number" class="form-control" placeholder="Please enter your number here." rows="1" required="required" data-error="Please, leave us a email."></textarea
                    >
                </div>

            </div>
  

        <div class="col-md-12">
        <p>
            <input type="submit" class="btn btn-success btn-send  pt-2 btn-block
                " value="Update Doc" / >
        </p>
    </div>

    </div>
</div>
</form>
          </>
          </>
        )}
        {activeSection === 'registrations' && (
          <>
            <h2>Doctor Register</h2>
            <form id="contact-form" role="form">

            

<div class="controls">

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="form_name">Doctor Name *</label>
                <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter the Doctors Name *" required="required" data-error="Name is required."/>
                
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="form_speciality">Speciality*</label>
                <input id="form_speciality" type="text" name="surname" class="form-control" placeholder="Please enter speciality*" required="required" data-error="Speciality is required."/>
                                                </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="degree">Degree Specifications *</label>
                <input id="degree" type="test" name="degree" class="form-control" placeholder="Please enter your Degree Specifications *" required="required" data-error="Degree Specifications are required."/>     
            </div>
            <div class="form-group">
                <label for="department">Department*</label>
                <input id="department" type="text" name="surname" class="form-control" placeholder="Please enter department name*" required="required" data-error="Department is required."/>
                                                </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="form_day">Please select Date*</label>
                <select id="form_day" name="need" class="form-control" required="required" data-error="Please enter your preferred day.">
                    <option value="" selected disabled>--Select A Day--</option>
                    <option >Monday</option>
                    <option >Tuesday</option>
                    <option >Wednesday</option>
                    <option >Thursday</option>
                    <option >Friday</option>
                    <option >Saturday</option>
                </select> 
                <label for="form_slot">Please select Time Slot*</label>
                <select id="form_slot" name="need" class="form-control" required="required" data-error="Please enter your preffered slot.">
                    <option value="" selected disabled>--Select A TIME SLOT--</option>
                    <option >Morning(9-12)</option>
                    <option >Afternoon(2-5)</option>
                    <option >Evening(6-9)</option>
                </select>       
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-3">
            <div class="form-group">
                <label for="form_number">Phone Number Details*</label>
                <textarea id="form_number" name="number" class="form-control" placeholder="Please enter your number here." rows="1" required="required" data-error="Please, leave us a number."></textarea
                    >
                </div>

            </div>
            <div class="col-md-3">
            <div class="form-group">
                <label for="form_number">Email*</label>
                <textarea id="form_email" type='email' name="number" class="form-control" placeholder="Please enter your number here." rows="1" required="required" data-error="Please, leave us a email."></textarea
                    >
                </div>

            </div>
  

        <div class="col-md-12">
        <p>
            <input type="submit" class="btn btn-success btn-send  pt-2 btn-block
                " value="Register Player" / >
        </p>
    </div>

    </div>
</div>
</form>
          </>
        )}
        <button onClick={handleLogout}>Sign Out</button>
      </div>
      <style jsx>{`
      .content{
        background: #ffff;
      }
        .admin-dashboard-navbar {
          background-color: #333;
          padding: 10px;
          width:auto;
        }
        .admin-dashboard-navbar ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: space-around;
        }
        .admin-dashboard-navbar ul li {
          color: white;
          cursor: pointer;
          padding: 10px 20px;
          transition: background-color 0.3s;
        }
        .admin-dashboard-navbar ul li:hover {
          background-color: #555;
        }
        .content {
          padding: 20px;
        }
        .row {
          margin-bottom: 20px;
        }
        .input-group {
          margin-bottom: 15px;
        }
        .input-group-icon {
          display: flex;
          align-items: center;
        }
        .input-group-icon input {
          padding: 10px;
          margin-right: 5px;
        }
        .input-icon {
          color: #555;
        }
        button {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}

export default AdminDashboard;
