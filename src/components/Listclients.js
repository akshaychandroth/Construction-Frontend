
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Headeradmin from './Headeradmin';
import { jsPDF } from 'jspdf';




function Listclients() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = async () => {
        try {
            const response = await fetch('http://localhost:8000/clients');
            const data = await response.json();
            setClients(data);
        } catch (error) {
            console.error('Error fetching clients:', error);
        }
    };
    const deleteClient = async (id)=>{
        try{
           const deleteclient = await axios.delete(`http://localhost:8000/deleteclient/${id}`)
            alert(deleteclient.data.message)
            fetchClients()

        }
        catch(error){
            console.error("error deleting",error)
        }

    }
 

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFont('helvetica');
        doc.setFontSize(12);
      
        doc.text('Client List', 10, 10);
      
        const headers = ["Id","Name", "Place", "Phone", "Gender", "Aadhaar"];
        let y = 20;
      
        const cellPadding = 6;
        const cellHeight = 10;
      
        headers.forEach((header, index) => {
          doc.setFillColor(0, 0, 0);
          doc.setTextColor(255, 255, 255);
          doc.rect(10 + (index * 30), y, 30, cellHeight, 'F');
          doc.text(header, 15 + (index * 30), y + cellPadding);
        });
      
        y += cellHeight;
      
        clients.forEach((client) => {
          const row = [
            client.id,
            client.name,
            client.place,
            client.phone,
            client.gender,
            client.aadhar
          ];
      
          row.forEach((cell, index) => {
            doc.setFillColor(255, 255, 255);
            doc.setTextColor(0, 0, 0);
            doc.rect(10 + (index * 30), y, 30, cellHeight, 'F');
            doc.text(cell.toString(), 15 + (index * 30), y + cellPadding);
          });
      
          y += cellHeight;
      
          // Check if the content exceeds the page height
          if (y > doc.internal.pageSize.height - 20) {
            doc.addPage(); // Add new page
            y = 20; // Reset y position
          }
        });
      
        doc.save('client_records.pdf');
      };
      
      

    return (
        <div>
            {/* <Head1/> */}
            <Headeradmin/>



            
    <div class="row mb-2">
        <div class="container">
          <div class="col-12 d-flex flex-column justify-content-center px-3">
              <div class="row heading">
                <div class="col-12 text-center">
                  <h3 class="text-light text-center pt-4 pb-1">CLIENTS</h3>
                  <Link to='/clientreg'><button class="btn btn-new p-2 mb-2" >add new client</button></Link>

                </div>
                <button class="btn mybtn-link pb-3" onClick={generatePDF}>Download PDF</button>

              </div>
              <div class="row form-content">
                  <div class="col-12 d-flex justify-content-center">
                        <table class="table table-bordered border-dark table-striped table-hover">
                            <thead class="table-dark">
                              <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Place</th>
                                <th scope="col">Post</th>
                                <th scope="col">Pin</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Gender</th>
                                {/* <th scope="col">Photo</th> */}
                                <th scope="col">Aadhaar</th>
                                {/* <th scope="col"></th> */}
                              </tr>
                            </thead>
                            <tbody>
                              {clients.map(client => (
                                <tr >
                                            <td>{client.id}</td>
                                            <td>{client.name}</td>
                                            <td>{client.commondetails.username}</td>
                                            <td>{client.email}</td>
                                            <td>{client.place}</td>
                                            <td>{client.post}</td>
                                            <td>{client.pin}</td>
                                            <td>{client.phone}</td>
                                            <td>{client.gender}</td>
                                            {/* <td><img width={'65px'} height={'55px'} src={`http://localhost:8000/uploads/${client.photo}`} alt="Client" /></td>                        </td>                       */}
                                            <td>{client.aadhar}</td>
                            {/* <td><button class="btn btn-danger" onClick={()=>deleteClient(client.id)}>Delete</button></td> */}
                             </tr>            ))}
                            </tbody>
                          </table>
                  </div>
                </div>
          </div> 
        </div> 
    </div>
</div>
    );
}

export default Listclients;
