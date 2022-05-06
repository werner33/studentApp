import { render } from '@testing-library/react';
import StudentCard from '../StudentCard';

const studentData = {
  city: "Fushë-Muhurr",
  company: "Yadel",
  email: "iorton0@imdb.com",
  firstName: "Ingaberg",
  grades: ["78", "100", "92", "86", "89", "88", "91", "87"],
  id: "1",
  lastName: "Orton",
  pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg",
  skill: "Oracle"
}

describe('Student Card Component', () => {


  it('student card renders properly', () => {
    const {getByTestId} = render(<StudentCard />);
    expect(getByTestId('studentCard')).toBeInTheDocument();
  });

  it('shows the student name label with first and last name', () => {
    const {getByText} = render(<StudentCard student={studentData} />);
    expect(getByText("Ingaberg Orton")).toBeInTheDocument();
  })

  // new it block
  // assering that 'Company: Yadel' is in the document

  // it('shows the student\'s company label and name', () => {
  //   const {getByText} = render(<StudentCard student={studentData} />);
  //   expect(getByText("Company: Yadel")).toBeInTheDocument();
  // })

});