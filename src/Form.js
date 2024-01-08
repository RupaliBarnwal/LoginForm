import { useState } from "react";


const Form =()=>{
    const [userName, setUserName] =useState("");
    const [surName, setSurName] =useState("");
    const [textarea, setTextarea] = useState(
        "The content of a textarea goes in the value attribute"
      );
      const [birthDate, setBirthDate] =useState("");
      const [gender, setGender] =useState("");
      const [mobile, setMobile] =useState("");
      const [email, setEmail] =useState("");

      const handleTextArea = (event) => {
        setTextarea(event.target.value)
      }

    const handleName=(e)=>{
        setUserName(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Hi I am" + surName + " "+ userName +"." + "I was born on " + birthDate );
        e.target.reset();
    }
    const handleSurName=(e)=>{
        setSurName(e.target.value)
    }
    const handleBirthDate=(e)=>{
        setBirthDate(e.target.value)
    }
    const handleGender=(e)=>{
        setGender(e.target.value)
    }
    const handleMobile=(e)=>{
        setMobile(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    
    return (
        <div className="container">
        <form  onSubmit={handleSubmit}>
            <div className="info">
            <label> Full Name*:</label>
                <input type="text" required name ="username" value={userName} onChange={handleName}/>
            </div>
            <div className="info">
            <label> SurName:</label>
                <select value={surName} onChange={handleSurName}>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
                </select>
            </div>
            
            
    <div className="info">
    <label>BirthDate</label>
    <input type='date'
      placeholder='Enter BirthDate'
      value={birthDate} onChange={handleBirthDate}
      name='birthdate'
    />
    </div>
  
           
    <div className="info">
    <label>Please Select Gender : </label>
      <label>
        <input type='radio' name='gender' onChange={handleGender} value='Male'
          checked={gender === "Male"}
        />
        Male
      </label>
      <label >
        <input type='radio' name='gender'onChange={handleGender} value='Female'
          checked={gender === "Female"} />
        Female
      </label>
    </div>

    <div className="info">
            <label> Mobile Number:</label>
                <input type="text" name ="mobile" value={mobile} onChange={handleMobile}/>
            </div>
            <div className="info">
            <label> Email:</label>
                <input type="text" name ="email" value={email} onChange={handleEmail}/>
            </div>
    <div className="info">
            <label>Message:</label>
                <textarea value={textarea} onChange={handleTextArea}/>
            </div>
            {/* <input type="reset" value="Reset Form"  /> */}
            <input type="submit"/>
        </form>
        </div>
    )
}

export default Form;