// ClientProgress.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function ClientProgress() {
//     const params = useParams('');
//     const [progress, setProgress] = useState([]);
//     const [error, setError] = useState(null);
//     console.log(params.id);

//     useEffect(() => {
//         const fetchProgress = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8000/clientprogress/${params.id}`);
//                 setProgress(response.data);
//             } catch (error) {
//                 console.error('Error fetching progress:', error);
//                 setError('Error fetching progress. Please try again later.');
//             }
//         };
//         fetchProgress();
//     }, []);

//     return (
//         <div>
//             {error && <p>{error}</p>}
//             <h1>Progress for Project</h1>
//             <ul>
//                 {progress.map(entry => (
//                     <li key={entry._id}>
//                         <h3>{entry.description}</h3>
//                         <h3>{entry.date}</h3>

                        
//                         <img width={'200px'} height={'200px'} src={`http://localhost:8000/uploads/${entry.photo}`} alt="Client" />                                           
//                     </li>



//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default ClientProgress;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import {Image, PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// function PDFGenerator({ progress }) {
//   const styles = StyleSheet.create({
//     page: {
//       flexDirection: 'column',
//       padding: 20,
//     },
//     section: {
//       margin: 10,
//       fontSize: 12,
//     },
//   });

//   return (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         <View style={styles.section}>
//           <Text>Progress for Project</Text>
//           {progress.map((entry) => (
//             <View key={entry._id} style={styles.section}>
//               <Text>{entry.description}</Text>
//               <Text>{entry.date}</Text>
//               {entry.photo.map((photoUrl, index) => (
//                 <Image
//                   key={index}
//                   src={`http://localhost:8000/uploads/${photoUrl}`}
//                 />
//               ))}
//             </View>
//           ))}
//         </View>
//       </Page>
//     </Document>
//   );
// }

// function ClientProgress() {
//   const params = useParams();
//   const [progress, setProgress] = useState([]);
//   const [filteredProgress, setFilteredProgress] = useState([]);
//   const [error, setError] = useState(null);
//   const [selectedMonth, setSelectedMonth] = useState('');

//   useEffect(() => {
//     const fetchProgress = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/clientprogress/${params.id}`);
//         setProgress(response.data);
//         setFilteredProgress(response.data);
//       } catch (error) {
//         console.error('Error fetching progress:', error);
//         setError('Error fetching progress. Please try again later.');
//       }
//     };
//     fetchProgress();
//   }, [params.id]); 

//   useEffect(() => {
//     if (selectedMonth === '') {
//       setFilteredProgress(progress);
//     } else {
//       const filtered = progress.filter(entry => {
//         const entryDate = new Date(entry.date);
//         return entryDate.toLocaleString('default', { month: 'long' }) === selectedMonth;
//       });
//       setFilteredProgress(filtered);
//     }
//   }, [selectedMonth, progress]);

//   const handleMonthChange = (event) => {
//     setSelectedMonth(event.target.value);
//   };

//   return (
//     <div>
//       {error && <p>{error}</p>}
//       <h1>Progress for Project</h1>
//       <div>
//         <label htmlFor="selectMonth">Select Month: </label>
//         <select id="selectMonth" value={selectedMonth} onChange={handleMonthChange}>
//           <option value="">All Months</option>
//           <option value="January">January</option>
//           <option value="February">February</option>
//           <option value="March">March</option>
//           <option value="April">April</option>
//           <option value="May">May</option>
//           <option value="June">June</option>
//           <option value="July">July</option>
//           <option value="August">August</option>
//           <option value="September">September</option>
//           <option value="October">October</option>
//           <option value="November">November</option>
//           <option value="December">December</option>
//         </select>
//       </div>
//       <PDFDownloadLink document={<PDFGenerator progress={filteredProgress} />} fileName="progress.pdf">
//         {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
//       </PDFDownloadLink>
//       <ul>
//         {filteredProgress.map(entry => (
//           <li key={entry._id}>
//             <h3>{entry.description}</h3>
//             <h3>{entry.date}</h3>
//             {entry.photo.map((photoUrl, index) => (
//               <img
//                 key={index}
//                 width={'200px'}
//                 height={'200px'}
//                 src={`http://localhost:8000/uploads/${photoUrl}`}
//                 alt={`Photo ${index + 1}`}
//               />
//             ))}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ClientProgress;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Image, PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { useNavigate } from 'react-router-dom';

function PDFGenerator({ progress }) {
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

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Progress for Project</Text>
          {progress.map((entry) => (
            <View key={entry._id} style={styles.section}>
              <Text>{entry.description}</Text>
              <Text>{entry.date}</Text>
              {entry.photo.map((photoUrl, index) => (
                <Image
                  key={index}
                  src={`http://localhost:8000/uploads/${photoUrl}`}
                />
              ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

function ClientProgress() {
  const params = useParams();
  const [progress, setProgress] = useState([]);
  const [filteredProgress, setFilteredProgress] = useState([]);
  const [error, setError] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/clientprogress/${params.id}`);
        setProgress(response.data);
        setFilteredProgress(response.data);
      } catch (error) {
        console.error('Error fetching progress:', error);
        setError('Error fetching progress. Please try again later.');
      }
    };
    fetchProgress();
  }, [params.id]); 

  useEffect(() => {
    if (selectedMonth === '') {
      setFilteredProgress(progress);
    } else {
      const filtered = progress.filter(entry => {
        const entryDate = new Date(entry.date);
        return entryDate.toLocaleString('default', { month: 'long' }) === selectedMonth;
      });
      setFilteredProgress(filtered);
    }
  }, [selectedMonth, progress]);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };


  const Back = ()=>{
    navigate('/client')
    
  }

  return (
    <div className="container mt-4">
            <button className='btn btn-danger' onClick={Back}>Back</button>

      {error && <p>{error}</p>}
      <h1 className='text-center text-white'><b>Progress Of Project</b></h1>
      <div className="mb-3">
        <label htmlFor="selectMonth" className="form-label">Select Month: </label>
        <select id="selectMonth" value={selectedMonth} onChange={handleMonthChange} className="form-select">
          <option value="">All Months</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>
      <PDFDownloadLink className='btn btn-primary mb-2' document={<PDFGenerator progress={filteredProgress} />} fileName="progress.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
      </PDFDownloadLink>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {filteredProgress.map((entry) => (
          <div key={entry._id} className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{entry.description}</h5>
                <p className="card-text">Date: {entry.date}</p>
                <div className="d-flex flex-wrap">
                  {entry.photo.map((photoUrl, index) => (
                    <img
                      key={index}
                      className="img-thumbnail mx-1 my-1"
                      src={`http://localhost:8000/uploads/${photoUrl}`}
                      alt={`Photo ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientProgress;
