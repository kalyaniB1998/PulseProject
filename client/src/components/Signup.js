import React, { useRef, useState } from 'react'

import { Link } from 'react-router-dom'

function Signup() {
  let firstNameInputRef=useRef();
  let lastNameInputRef=useRef();
  let mobileNumberInputRef=useRef();
  let cityInputRef=useRef();
  let profilePicInputRef=useRef();
  let emailInputRef=useRef();
  let passwordInputRef=useRef();
  let [profilePicURL,setProfilePicURL]=useState("./images/Profile-pic.jpg");

  let sendSignupDataToServerFormData=async()=>{
    let dataToSend=new FormData();
        dataToSend.append("firstName",firstNameInputRef.current.value);
        dataToSend.append("lastName",lastNameInputRef.current.value);
        dataToSend.append("mobileNumber",mobileNumberInputRef.current.value);
        dataToSend.append("city",cityInputRef.current.value);
        dataToSend.append("profilePic",profilePicInputRef.current.value);
        dataToSend.append("email",emailInputRef.current.value);

        for(let i=0;i<profilePicInputRef.current.files.length;i++){
        dataToSend.append("password",passwordInputRef.current.file[i]);
      }
    let reqOptions={
      method:"POST",
      body:dataToSend,
    };
    
    let JSONData=await fetch("http://localhost:5555/signup",reqOptions);
    let JSOData=await JSONData.json();

    alert(JSOData.msg);
     console.log(JSOData);
  }

  return (
    <div className='App'>
      
      <form>
      <div>
           <h2>Signup</h2>
      </div>
      <div>
        <input ref={firstNameInputRef} className="login" type="Name" placeholder="First Name"/>
      </div>
      <div>
        <input ref={lastNameInputRef} className="login" type="Name" placeholder="Last Name"/>
      </div>
      <div>
        <input ref={mobileNumberInputRef} className="login" type="number" placeholder="Mobile No"/>
      </div>
      <div>
        <input ref={cityInputRef} className="login" type="name" placeholder="City/Town"/>
      </div>
      <div>
            <select className='login'>
                <option value="choose your state">choose your state</option>
                <option value="Ap">Andhra pradesh</option>
                <option value="telangana">Telangana</option>
                <option value="mp">Madhya pradesh</option>
                <option value="up">Uttar pradesh</option>
            </select>
        </div>
        <div>
          <input ref={profilePicInputRef} className='login' type="file" placeholder="Image"
          onChange={()=>{
            let selectedImageURL=URL.createObjectURL(profilePicInputRef.current.files[0])

            setProfilePicURL(selectedImageURL)
          }}
          />
          <br></br>
          <img className='profilepic' src={profilePicURL}></img>
          <br></br>
          <br></br>
          
        </div>
        <div>
          <h5>Enter your account details:</h5>
        </div>
        <div>
          <input ref={emailInputRef} className="login" type="email" placeholder="email Address"/> 
        </div>
        <div>
           <input ref={passwordInputRef} className="login" type="password" placeholder="password"/>
        </div>
        <div>
           <button 
           onClick={()=>{
              sendSignupDataToServerFormData();

           }}
           className='password' type='button'>Submit</button>
        </div>
      </form>
      <br/>
      <Link to="/">Login</Link>
  </div>
  )
}

export default Signup;