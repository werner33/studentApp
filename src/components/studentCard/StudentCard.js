import React from 'react';
import { Link } from "react-router-dom";

import './StudentCard.scss';

const StudentCard = ({student}) => {

    return (
        <div className="studentCard" data-testid="studentCard" > 
            <Link to={`student/${student?.id}`}>
                <div className="twoColumns">

                    <img  className="studentCard__image" src={student?.pic} />
                    
                    <div className="studentCard__info">
                        <div className="studentCard__name">
                            {student?.firstName} {student?.lastName}
                        </div>
                        <div className="studentCard__company">
                            Company: {student?.company}
                        </div>
                    </div>

                </div>

            </Link>
        </div>
    );
}

export default StudentCard;