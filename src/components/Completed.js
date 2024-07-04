// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import jsPDF from 'jspdf';

// function Completed() {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     fetchCompletedProjects();
//   }, []);

//   const fetchCompletedProjects = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/completed');
//       setProjects(response.data);
//     } catch (error) {
//       console.error('Error fetching completed projects:', error);
//     }
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();

//     let yPos = 10;

//     projects.forEach(project => {
//       doc.text(20, yPos, `Name: ${project.name}`);
//       doc.text(20, yPos + 10, `Location: ${project.location}`);
//       doc.text(20, yPos + 20, `Description: ${project.description}`);
//       // Add more details as needed

//       yPos += 30; // Move down for the next project
//     });

//     doc.save('completed_projects.pdf');
//   };

//   return (
//     <div>
//       <h2>Completed Projects</h2>
//       <button onClick={generatePDF}>Generate PDF</button>
//       <ul>
//         {projects.map(project => (
//           <li key={project._id}>
//             <h3>{project.name}</h3>
//             <p>Location: {project.location}</p>
//             <p>Description: {project.description}</p>
//             {/* Add more details as needed */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Completed;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import { useNavigate } from 'react-router-dom';

function Completed() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetchCompletedProjects();
  }, []);

  const fetchCompletedProjects = async () => {
    try {
      const response = await axios.get('http://localhost:8000/completed');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching completed projects:', error);
    }
  };


  const Back = ()=>{
    navigate('/engineer')
    
  }

  const generatePDF = () => {
    const doc = new jsPDF();

    let yPos = 10;

    projects.forEach(project => {
      doc.text(20, yPos, `Name: ${project.name}`);
      doc.text(20, yPos + 10, `Location: ${project.location}`);
      doc.text(20, yPos + 20, `Description: ${project.description}`);
      // Add more details as needed

      yPos += 30; // Move down for the next project
    });

    doc.save('completed_projects.pdf');
  };

  return (
    <div className="container mt-4">
      <button className='btn btn-danger' onClick={Back}>Back</button>
      <h2 className="mb-4 text-center text-white"><b>Completed Projects</b></h2>
      <button className="btn btn-primary mb-3" onClick={generatePDF}>Generate PDF</button>
      <div className="row">
        {projects.map(project => (
          <div key={project._id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{project.name}</h3>
                <p className="card-text">Location: {project.location}</p>
                <p className="card-text">Description: {project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Completed;
