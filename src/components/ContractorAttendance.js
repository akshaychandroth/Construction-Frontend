



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import { useNavigate } from 'react-router-dom';
// function ContractorAttendance() {
//     const params = useParams();
//     const [attendanceRecords, setAttendanceRecords] = useState([]);
//     const [interval, setInterval] = useState('daily');
//     const [searchDate, setSearchDate] = useState('');
//     const [searchMonth, setSearchMonth] = useState('');
//     const navigate = useNavigate()

//     const fetchAttendanceRecords = async () => {
//         try {
//             let url = `http://localhost:8000/viewattendance/${params.id}?interval=${interval}`;
//             if (searchDate) {
//                 url += `&date=${searchDate}`;
//             } else if (searchMonth) {
//                 url += `&month=${searchMonth}`;
//             }
//             const response = await axios.get(url);
//             setAttendanceRecords(response.data);
//         } catch (error) {
//             console.error('Error fetching attendance records:', error);
//         }
//     };

//     useEffect(() => {
//         fetchAttendanceRecords();
//     }, [params.id, interval, searchDate, searchMonth]);

//     const handleIntervalChange = (e) => {
//         setInterval(e.target.value);
//     };

//     const handleSearchDateChange = (e) => {
//         setSearchDate(e.target.value);
//     };

//     const handleSearchMonthChange = (e) => {
//         setSearchMonth(e.target.value);
//     };

//     const generatePDF = () => {
//         const doc = new jsPDF();
//         doc.text("Attendance Records", 10, 10);

//         // Define columns
//         const columns = ["Worker ID", "Attendance", "Date"];
//         const rows = attendanceRecords.map(record => [record.workerid.name, record.attendance, record.date]);

//         doc.autoTable({
//             head: [columns],
//             body: rows,
//             startY: 20,
//         });

//         doc.save("attendance_records.pdf");
//     };

//     const handleReset = () => {
//         setSearchDate('');
//         setSearchMonth('');
//         fetchAttendanceRecords();
//     };


//     const Back = ()=>{
//         navigate('/contractor')
        
//     }

//     return (
//         <div className="container mt-4">
//             <button className='btn btn-primary' onClick={Back}>Back</button>
//             <div>
//                 <h2 className='text-center text-white mt-2'><b> Attendance Records</b></h2>

//                 <div className="row align-items-center mb-3 mt-4">
//                     <div className="col-auto">
//                         <select className="form-select" value={interval} onChange={handleIntervalChange}>
//                             <option value="daily">Daily</option>
//                             <option value="weekly">Weekly</option>
//                             <option value="monthly">Monthly</option>
//                         </select>
//                     </div>
//                     <div className="col-auto">
//                         <input type="date" className="form-control" value={searchDate} onChange={handleSearchDateChange} />
//                     </div>
//                     <div className="col-auto">
//                         <input type="month" className="form-control" value={searchMonth} onChange={handleSearchMonthChange} />
//                     </div>
//                     <div className="col-auto">
//                         <button className="btn btn-primary me-2" onClick={fetchAttendanceRecords}>Apply Filter</button>
//                         <button className="btn btn-primary me-2" onClick={handleReset}>Reset</button>
//                         <button className="btn btn-danger" onClick={generatePDF}>Generate PDF</button>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <table className="table table-striped mt-5">
//                     <thead>
//                         <tr>
//                             <th>Worker ID</th>
//                             <th>Attendance</th>
//                             <th>Date</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {attendanceRecords.map((record) => (
//                             <tr key={record._id}>
//                                 <td>{record.workerid.name}</td>
//                                 <td>{record.attendance}</td>
//                                 <td>{record.date}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default ContractorAttendance;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import { useNavigate } from 'react-router-dom';

// function ContractorAttendance() {
//     const params = useParams();
//     const [attendanceRecords, setAttendanceRecords] = useState([]);
//     const [interval, setInterval] = useState('daily');
//     const [searchDate, setSearchDate] = useState('');
//     const [searchMonth, setSearchMonth] = useState('');
//     const navigate = useNavigate();

//     const fetchAttendanceRecords = async () => {
//         try {
//             let url = `http://localhost:8000/viewattendancecon/${params.id}?interval=${interval}`;
//             if (searchDate) {
//                 url += `&date=${searchDate}`;
//             } else if (searchMonth) {
//                 url += `&month=${searchMonth}`;
//             }
//             const response = await axios.get(url);
//             setAttendanceRecords(response.data);
//         } catch (error) {
//             console.error('Error fetching attendance records:', error);
//         }
//     };

//     useEffect(() => {
//         fetchAttendanceRecords();
//     }, [params.id, interval, searchDate, searchMonth]);

//     const handleIntervalChange = (e) => {
//         setInterval(e.target.value);
//     };

//     const handleSearchDateChange = (e) => {
//         setSearchDate(e.target.value);
//     };

//     const handleSearchMonthChange = (e) => {
//         setSearchMonth(e.target.value);
//     };

//     const generatePDF = () => {
//         const doc = new jsPDF();
//         doc.text("Attendance Records", 10, 10);

//         // Define columns
//         const columns = ["Worker ID", "Attendance", "Date"];
//         const rows = attendanceRecords.map(record => [record.workerid.name, record.attendance, record.date]);

//         doc.autoTable({
//             head: [columns],
//             body: rows,
//             startY: 20,
//         });

//         doc.save("attendance_records.pdf");
//     };

//     const handleReset = () => {
//         setSearchDate('');
//         setSearchMonth('');
//         fetchAttendanceRecords();
//     };

//     const Back = () => {
//         navigate('/contractor');
//     };

//     return (
//         <div className="container mt-4">
//             <button className='btn btn-primary' onClick={Back}>Back</button>
//             <div>
//                 <h2 className='text-center text-white mt-2'><b> Attendance Records</b></h2>

//                 <div className="row align-items-center mb-3 mt-4">
                   
//                     <div className="col-auto">
//                         <input type="month" className="form-control" value={searchMonth} onChange={handleSearchMonthChange} />
//                     </div>
//                     <div className="col-auto">
//                         <button className="btn btn-primary me-2" onClick={fetchAttendanceRecords}>Apply Filter</button>
//                         <button className="btn btn-primary me-2" onClick={handleReset}>Reset</button>
//                         <button className="btn btn-danger" onClick={generatePDF}>Generate PDF</button>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <table className="table table-striped mt-5">
//                     <thead>
//                         <tr>
//                             <th>Worker ID</th>
//                             <th>Present Days</th>
//                             <th>Absent Days</th>
//                             <th>Attendance Percentage</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {Object.keys(attendanceRecords).map(workerName => (
//                             <tr key={workerName}>
//                                 <td>{workerName}</td>
//                                 <td>{attendanceRecords[workerName].presentDays}</td>
//                                 <td>{attendanceRecords[workerName].absentDays}</td>
//                                 <td>{attendanceRecords[workerName].attendancePercentage.toFixed(2)}%</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default ContractorAttendance;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useNavigate } from 'react-router-dom';

function ContractorAttendance() {
    const params = useParams();
    const [attendanceRecords, setAttendanceRecords] = useState([]);
    const [searchMonth, setSearchMonth] = useState('');
    const navigate = useNavigate();

    const fetchAttendanceRecords = async () => {
        try {
            let url = `http://localhost:8000/viewattendancecon/${params.id}?interval=monthly`;
            if (searchMonth) {
                url += `&month=${searchMonth}`;
            }
            const response = await axios.get(url);
            setAttendanceRecords(response.data);
        } catch (error) {
            console.error('Error fetching attendance records:', error);
        }
    };

    useEffect(() => {
        fetchAttendanceRecords();
    }, [params.id, searchMonth]);

    const handleSearchMonthChange = (e) => {
        setSearchMonth(e.target.value);
    };

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text("Attendance Records", 10, 10);

        const columns = ["Worker ID", "Present Days", "Absent Days", "Attendance Percentage"];
        const rows = Object.keys(attendanceRecords).map(workerName => [
            workerName,
            attendanceRecords[workerName].presentDays,
            attendanceRecords[workerName].absentDays,
            `${attendanceRecords[workerName].attendancePercentage.toFixed(2)}%`
        ]);

        doc.autoTable({
            head: [columns],
            body: rows,
            startY: 20,
        });

        doc.save("attendance_records.pdf");
    };

    const handleReset = () => {
        setSearchMonth('');
        fetchAttendanceRecords();
    };

    const Back = () => {
        navigate('/contractor');
    };

    return (
        <div className="container mt-4">
            <button className='btn btn-primary' onClick={Back}>Back</button>
            <div>
                <h2 className='text-center text-white mt-2'><b> Attendance Records</b></h2>

                <div className="row align-items-center mb-3 mt-4">
                    <div className="col-auto">
                        <input type="month" className="form-control" value={searchMonth} onChange={handleSearchMonthChange} />
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-primary me-2" onClick={fetchAttendanceRecords}>Apply Filter</button>
                        <button className="btn btn-primary me-2" onClick={handleReset}>Reset</button>
                        <button className="btn btn-danger" onClick={generatePDF}>Generate PDF</button>
                    </div>
                </div>
            </div>
            <div>
                <table className="table table-striped mt-5">
                    <thead>
                        <tr>
                            <th>Worker ID</th>
                            <th>Present Days</th>
                            <th>Absent Days</th>
                            <th>Attendance Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(attendanceRecords).map(workerName => (
                            <tr key={workerName}>
                                <td>{workerName}</td>
                                <td>{attendanceRecords[workerName].presentDays}</td>
                                <td>{attendanceRecords[workerName].absentDays}</td>
                                <td>{attendanceRecords[workerName].attendancePercentage.toFixed(2)}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ContractorAttendance;
