import React, {useEffect, useState} from 'react';

import StudentList from '../../components/studentList/StudentList';
import StudentForm from '../../components/studentForm/StudentForm';

import './StudentManagement.scss';

function StudentManagement(props) {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        refreshStudents();
        
    }, []);

    const refreshStudents = () => {
        let url = "https://acceleratorprojectapril.herokuapp.com/students";

        fetch(url)
        .then(response => response.json())
        .then(data => {    
            setStudents(data);
        });
    }

    return (
        <div className="studentManagement">
            <StudentForm refreshStudents={refreshStudents}/>
            <StudentList students={students} />
        </div>
    );
}

export default StudentManagement;