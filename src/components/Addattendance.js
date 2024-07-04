// import React, { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom';
// import axios from "axios";

// function AddAttendance() {
//   const params = useParams();
//   const superId = localStorage.getItem('userId');
//   const [workers, setWorkers] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchWorkers = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/addattendance/${params.id}/workers`);
//         setWorkers(response.data.workers);
//       } catch (error) {
//         console.error("Error fetching workers:", error);
//       }
//     };
//     fetchWorkers();
//   }, [params.id]);

//   const markAttendance = async (workerId, attendance) => {
//     try {
//       const response = await axios.get(`http://localhost:8000/partiengineer/${superId}`);
//       const SupervisorId = response.data.engineer._id;

//       await axios.post(`http://localhost:8000/mark-attendance/${params.id}/${SupervisorId}`, {
//         workerId,
//         attendance,
//         date: new Date().toISOString().split('T')[0], // Today's date
//       });

//       alert("Attendance marked successfully!");
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         alert("Attendance for this worker on this date already exists.");
//       } else {
//         console.error("Error marking attendance:", error);
//         setError("Failed to mark attendance. Please try again later.");
//       }
//     }
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Mark Attendance</th>
//           </tr>
//         </thead>
//         <tbody>
//           {workers.map((worker) => (
//             <tr key={worker._id}>
//               <td>{worker.name}</td>
//               <td>
//                 <button onClick={() => markAttendance(worker._id, "present")}>Present</button>
//                 <button onClick={() => markAttendance(worker._id, "absent")}>Absent</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {error && <p>{error}</p>}
//     </div>
//   );
// }

// export default AddAttendance;


import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

function AddAttendance() {
  const params = useParams();
  const superId = localStorage.getItem('userId');
  const [workers, setWorkers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/addattendance/${params.id}/workers`);
        setWorkers(response.data.workers);
      } catch (error) {
        console.error("Error fetching workers:", error);
      }
    };
    fetchWorkers();
  }, [params.id]);

  const markAttendance = async (workerId, attendance) => {
    try {
      const response = await axios.get(`http://localhost:8000/partiengineer/${superId}`);
      const SupervisorId = response.data.engineer._id;

      await axios.post(`http://localhost:8000/mark-attendance/${params.id}/${SupervisorId}`, {
        workerId,
        attendance,
        date: new Date().toISOString().split('T')[0], // Today's date
      });

      alert("Attendance marked successfully!");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Attendance for this worker on this date already exists.");
      } else {
        console.error("Error marking attendance:", error);
        setError("Failed to mark attendance. Please try again later.");
      }
    }
  };

  return (
    <div className="container">
      <h2 className="text-white mt-5"><b>Mark Attendance</b></h2>
      <table className="table table-striped mt-3">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Mark Attendance</th>
          </tr>
        </thead>
        <tbody>
          {workers.map((worker) => (
            <tr key={worker._id}>
              <td>{worker.name}</td>
              <td>
                <button className="btn btn-success m-2" onClick={() => markAttendance(worker._id, "present")}>
                  Present
                </button>
                <button className="btn btn-danger" onClick={() => markAttendance(worker._id, "absent")}>
                  Absent
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
}

export default AddAttendance;
