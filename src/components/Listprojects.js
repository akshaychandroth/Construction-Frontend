


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Headeradmin from './Headeradmin';
import { Link } from 'react-router-dom';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    margin: 10,
    fontSize: 12,
  },
});

const ProjectPDFGenerator = ({ projects }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>  Project List</Text>
        {projects.map((project) => (
          <View key={project._id} style={styles.section}>
            <Text>ID: {project.id}</Text>
            <Text>Client: {project.clientid?.name}</Text>
            <Text>Name: {project.name}</Text>
            <Text>Location: {project.location}</Text>
            <Text>Description: {project.description}</Text>
            <Text>Duration: {project.duration}</Text>
            <Text>Date: {project.date}</Text>
           
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

function ListProjects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [error, setError] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8000/projects?month=${selectedMonth}&year=${selectedYear}`)
      .then(res => {
        setProjects(res.data);
        setFilteredProjects(res.data);
      })
      .catch(err => {
        console.error(err);
        setError('Error fetching projects. Please try again later.');
      });
  }, [selectedMonth, selectedYear]);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div>
      <Headeradmin />
      <Link to='/addproject'>
        <button className='btn btn-primary m-2'>Add new project</button>
      </Link>

      <div className="container-fluid page-margin p-2">
        <div className="row mb-2">
          <div className="col-md-1 col-lg-2"></div>
          <div className="col-12 col-md-10 col-lg-8">
            <div className="row">
              <div className="col-12">
                <h4 className="mt-5 mb-3 text-light text-center">Project List</h4>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="selectMonth">Select Month: </label>
                  <select
                    id="selectMonth"
                    className="form-control"
                    value={selectedMonth}
                    onChange={handleMonthChange}
                  >
                    <option value="">All Months</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="selectYear">Select Year: </label>
                  <input
                    type="number"
                    id="selectYear"
                    className="form-control"
                    value={selectedYear}
                    onChange={handleYearChange}
                  />
                </div>
              </div>
              <div className="col-12">
                <PDFDownloadLink className='btn btn-primary m-2'
                  document={<ProjectPDFGenerator projects={filteredProjects} />}
                  fileName="project-list.pdf"
                >
                  {({ loading }) =>
                    loading ? 'Loading...' : 'Download PDF'
                  }
                </PDFDownloadLink>
              </div>
              <div className="col-12">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Client</th>
                      <th>Name</th>
                      <th>Location</th>
                      <th>Description</th>
                      <th>Duration</th>
                      <th>Date</th>
                      <th>Project Documents</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProjects.map(project => (
                      <tr key={project._id}>
                        <td>{project.id}</td>
                        <td>{project.clientid?.name}</td>
                        <td>{project.name}</td>
                        <td>{project.location}</td>
                        <td>{project.description}</td>
                        <td>{project.duration}</td>
                        <td>{project.date}</td>
                        <td>
                          {project.projectdocuments.map((document, index) => (
                            document.endsWith('.pdf') ? (
                              <a key={index} href={`http://localhost:8000/${document}`} target="_blank" rel="noopener noreferrer">View PDF</a>
                            ) : (
                              <img key={index} src={`http://localhost:8000/${document}`} alt="Project Document" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                            )
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-1 col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}

export default ListProjects;
