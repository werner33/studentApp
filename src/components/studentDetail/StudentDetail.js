import React from 'react';

import './StudentDetail.scss';

const StudentDetail = ({studentData}) => {

    return (
        <div className="studentDetail">     
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
        </div>
    )

}

export default StudentDetail;
