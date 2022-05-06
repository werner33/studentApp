import React from 'react';

import StudentCard from '../studentCard/StudentCard';

import './StudentList.scss';

const StudentList = ({students}) => {

    students.sort((studentA, studentB) => {
        if(studentA.company == '') return 1;
        return studentA.company >  studentB.company ? 1 : -1;
    });

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