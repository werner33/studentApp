import React from 'react';

import './StudentCard.css';

const StudentCard = ({student}) => {

    return (
        <div className="studentCard" data-testid="studentCard"> 
            <div className="studentCard__name">
                Student name: {student?.firstName} {student?.lastName}
            </div>
            <div>
                Company: {student?.company}
            </div>
        </div>
    );
}

export default StudentCard;