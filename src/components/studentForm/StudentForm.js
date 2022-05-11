import React, {useState} from 'react';

import TextField from '@mui/material/TextField';
import HalfWidthButton from '../../modifiedMaterialComponents/HalfWidthButton';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';

import './StudentForm.scss';

// const HalfWidthButton = styled(Button)({

//     width: '50%'

// });

function StudentForm({refreshStudents, studentData, setStudentData, method='POST'}) {

    const [firstName, setFirstName] = useState(studentData?.first_name || '');
    const [lastName, setLastName] = useState(studentData?.last_name || '');
    const [email, setEmail] = useState(studentData?.email || '');
    const [company, setCompany] = useState(studentData?.company|| '');
    const [city, setCity] = useState(studentData?.city|| '');
    const [skill, setSkill] = useState(studentData?.skill ||'');
    const [pic, setPic] = useState(studentData?.pic ||'');

    const [notification, setNotification] = useState('');
    const [error, setError] = useState(false);


    const createNewStudent = () => {
        // prepare our request body

        let requestOptions = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({firstName, lastName, email, company, city, skill, pic})
        }

        let url = 'https://acceleratorprojectapril.herokuapp.com/students';

        if(method === 'PUT'){
            url += `/${studentData.id}`;
        }

        // post the request with fetch
        fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {

            setError(false);
            setTimeout(function(){ setNotification('')}, 3000);

            if(method === 'POST'){
                //     clear out Form
                setFirstName('');
                setLastName('');
                setCompany('');
                setSkill('');
                setCity('');
                setPic('');
                //     let userknow student is created 
                setNotification('New user created');
                //     update student list 
                refreshStudents();
            } else {
                setNotification('User updated');
                setStudentData(data);
            }
            
        }).catch(err => {
            setError(true);
            setNotification('There was an error, please try again.');
            setTimeout(function(){ setNotification('')}, 3000);
        }); 
    }  

    

    return (
        <div className="studentForm">
            <h2 className="studentForm__title">Student Form</h2>
            <div className="studentForm__notification" style={{ "color" : error ? "red" : "green"}}>{notification}</div>
            <div className="studentForm__inputContainer">
                <TextField 
                    id="first-name" 
                    label="First Name" 
                    variant="outlined" 
                    value={firstName} 
                    onChange={(e)=>setFirstName(e.target.value)}
                />
            </div>
           
            
            <div className="studentForm__inputContainer">
                <TextField 
                id="last-name" 
                label="Last Name" 
                variant="outlined" 
                value={lastName} 
                onChange={(e)=>setLastName(e.target.value)}
            />
            </div>
            <div className="studentForm__inputContainer">
                <label >Email:</label>
                <input 
                    value={email} 
                    className="studentForm__input" 
                    placeholder='bob@myemail.com'
                    onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="studentForm__inputContainer">
                <label >Company:</label>
                <input  
                    value={company} 
                    className="studentForm__input" 
                    placeholder='Google'
                    onChange={(e)=>setCompany(e.target.value)} />
            </div>
            <div className="studentForm__inputContainer">
                <label >City:</label>
                <input 
                    value={city} 
                    className="studentForm__input" 
                    placeholder='Atlanta'
                    onChange={(e)=>setCity(e.target.value)} />
            </div>
            <div className="studentForm__inputContainer">
                <label >Skill:</label>
                <input  
                    value={skill} 
                    className="studentForm__input" 
                    placeholder='Waffle making'
                    onChange={(e)=>setSkill(e.target.value)} />
            </div>
            <div className="studentForm__inputContainer">
                <label>Pic:</label>
                <input 
                    value={pic} 
                    className="studentForm__input" 
                    placeholder='https://www.placeholder.com/100x100'
                    onChange={(e)=>setPic(e.target.value)} />
            </div>
            <HalfWidthButton 
                variant="contained"
                size="large"
                onClick={() => createNewStudent()}
            >
                Submit
            </HalfWidthButton>
        </div>
    );
}

export default StudentForm;