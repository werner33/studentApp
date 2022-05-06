import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';

import StudentDetail from '../../components/studentDetail/StudentDetail';
import StudentForm from '../../components/studentForm/StudentForm';

import './StudentProfile.scss';

function StudentProfile() {

    let params = useParams();

    let studentId = params.id;

    const [studentData, setStudentData] = useState({});

    useEffect(() => {


        let url = `https://acceleratorprojectapril.herokuapp.com/students/${studentId}`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            setStudentData(data.student);
        })

    }, []);

    return (
        <div className="studentProfile">
            <h2>Student Profile</h2>
            {Object.keys(studentData).length &&
                <div className="studentProfile__components">
                    <StudentDetail studentData={studentData} />
                    <StudentForm studentData={studentData} setStudentData={setStudentData} method="PUT" />
                </div>
            }
             <div  className="studentDetail__goBack">
                <Link to='/'>
                    Go back
                </Link>
            </div>
           
        </div>
    );
}

export default StudentProfile;