import React, {useState} from 'react';

import { Link, useNavigate } from "react-router-dom";

import './StudentDetail.scss';

const StudentDetail = ({studentData}) => {

    let navigate = useNavigate();

    const [message, setMessage] = useState('');

    const deleteStudent = () => {

        let requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }

        let url = `https://acceleratorprojectapril.herokuapp.com/students/${studentData.id}`;

        fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            setMessage(data.message);

            // redirect to home page
            setTimeout(function(){
                navigate('/');
            }, 3000);

        })


    }

    return (
        <div className="studentDetail">   
            {message && <div className="studentDetail__message">
                {message} You will be redirected to the home page in 3 seconds.
                Or <Link to='/'>click here</Link> to go to the home page.
            </div>} 
            <div className="studentDetail__infoCardTop">
                <img className="studentDetail__image" src={studentData.pic} />

                <div className="studentDetail__name">
                    {studentData.first_name} {studentData.last_name}
                </div>
            </div>

            <hr/>
            <div className="studentDetail__company">
                <span>Email:</span> {studentData.email}
            </div>
            <div className="studentDetail__company">
                <span>Company:</span> {studentData.company}
            </div>
            <div className="studentDetail__company">
                <span>City:</span> {studentData.city}
            </div>
            <div className="studentDetail__company">
                <span>Skill:</span> {studentData.skill}
            </div>

            <div className="studentDetail__deleteButton"
                onClick={() => deleteStudent()}>
                Delete
            </div>
        </div>
    )

}

export default StudentDetail;
