import React, {useState, useEffect} from 'react';

import StudentCard from '../studentCard/StudentCard';

import './StudentList.css';

const StudentList = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {

        let url = "https://acceleratorprojectapril.herokuapp.com/students";

        fetch(url)
        .then(response => response.json())
        .then(data => {    
            setStudents(data.students);
        });
    
      }, []);


    return (
        <div className="studentList">
            {students.map((student, index) => {
                return (
                    <StudentCard student={student} key={index} />
                )
            })}
        </div>
    )
}

export default StudentList;