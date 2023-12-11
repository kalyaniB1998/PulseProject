import React from 'react'

function Signup() {
  return (
    <div className='App'>
<form>
        <h1 className="v">Signup</h1>
        <input class="login" type="Name" placeholder="First Name"/>
        <br/>
        <br/>
        <input class="login" type="Name" placeholder="Last name"/>
        <br/>
        <br/>
        <input class="password" type="number" placeholder="Mobile No"/>
        <br/>
        <br/>
        <input class="password" type="name" placeholder="City/Town"/>
        <br/>
        <br/>
        <div>
            <select>
                <option value="choose your state">Choose your states</option>
                <option value="Ap">Andhra pradesh</option>
                <option value="telangana">Telangana</option>
                <option value="mp">Madya pradesh</option>
                <option value="up">Uttar pradesh</option>
            </select>
        </div>
        <br/>
        <br/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPoHljTV9c5ViwxQOf7TwqybNnhGh_FNY0hg&usqp=CAU"/>
        <input class="password" type="file" placeholder="profile pic"/>
        <br/>
        <br/>
        <h5>Enter your account details:</h5>
        <input class="login" type="email" placeholder="email Address"/>
         <br/>
         <br/>
         <input class="password" type="password" placeholder="password"/>
          <br/>
          <br/>
       <button>Submit</button>

</form>

    </div>
  )
}

export default Signup