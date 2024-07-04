
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import jsPDF from 'jspdf';

function ViewAttendance() {
    const params = useParams();
    console.log(params.id);
    const [attendanceRecords, setAttendanceRecords] = useState([]);
    const [interval, setInterval] = useState('daily'); 
    const [searchDate, setSearchDate] = useState('');
    const [searchMonth, setSearchMonth] = useState('');

    const fetchAttendanceRecords = async () => {
        try {
            let url = `http://localhost:8000/viewattendance/${params.id}?interval=${interval}`;
            if (searchDate) {
                url += `&date=${searchDate}`;
            } else if (searchMonth) {
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
    }, [params.id, interval, searchDate, searchMonth]);

    const handleIntervalChange = (e) => {
        setInterval(e.target.value);
    };

    const handleSearchDateChange = (e) => {
        setSearchDate(e.target.value);
    };

    const handleSearchMonthChange = (e) => {
        setSearchMonth(e.target.value);
    };

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text("Attendance Records", 10, 10);
        let y = 20;
        attendanceRecords.forEach((record, index) => {
            doc.text(`${index + 1}. Worker ID: ${record.workerid.name}, Attendance: ${record.attendance}, Date: ${record.date}`, 10, y);
            y += 10;
        });
        doc.save("attendance_records.pdf");
    };

    const handleReset = () => {
        setSearchDate('');
        setSearchMonth('');
        fetchAttendanceRecords(); 
    };

    return (
        <div className="container">
            <div className="mt-4">
                <div className="form-group">
                    <label htmlFor="intervalSelect">Select Interval:</label>
                    <select id="intervalSelect" className="form-control" value={interval} onChange={handleIntervalChange}>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="dateInput">Search by Date:</label>
                    <input id="dateInput" type="date" className="form-control" value={searchDate} onChange={handleSearchDateChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="monthInput">Search by Month:</label>
                    <input id="monthInput" type="month" className="form-control" value={searchMonth} onChange={handleSearchMonthChange} />
                </div>
                <button className="btn btn-primary mr-2 m-2" onClick={fetchAttendanceRecords}>Apply Filter</button>
                <button className="btn btn-primary mr-2 m-2" onClick={handleReset}>Reset</button>
                <button className="btn btn-primary" onClick={generatePDF}>Generate PDF</button>
            </div>
            <div className="mt-4">
                <h2 className='text-white'>  <b>Attendance Records</b> </h2>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Worker ID</th>
                            <th>Attendance</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendanceRecords.map((record) => (
                            <tr key={record._id}>
                                <td>{record.workerid.name}</td>
                                <td>{record.attendance}</td>
                                <td>{record.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ViewAttendance;
