// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Headeradmin from './Headeradmin';

// function Listworkers() {
//   const [workers, setWorkers] = useState([]);

//     useEffect(() => {
//         fetchWorkers();
//     }, []);

//     const fetchWorkers = async () => {
//         try {
//             const response = await fetch('http://localhost:8000/workers');
//             const data = await response.json();
//             setWorkers(data);
//         } catch (error) {
//             console.error('Error fetching workers:', error);
//         }
//     };
//   return (
//     <div>
//       <Headeradmin/>
//        <div class="row mb-2">
//         <div class="container">
//           <div class="col-12 d-flex flex-column justify-content-center pb-1 px-3">
//               <div class="row heading">
//                 <div class="col-12 text-center">
//                   <h3 class="text-light text-center pt-4 pb-2">Workers</h3>
//                   <Link to='/workerreg'><button class="btn btn-new p-2 mb-4" >add New Worker</button></Link>
//                 </div>
//               </div>
//               <div class="row form-content">
//                   <div class="col-12 d-flex justify-content-center">
//                         <table class="table table-bordered border-dark table-striped table-hover">
//                             <thead class="table-dark">
//                               <tr>
//                                 <th scope="col">Id</th>
//                                 <th scope="col">Name</th>
//                                 <th scope="col">Email</th>
//                                 <th scope="col">Place</th>
//                                 <th scope="col">Post</th>
//                                 <th scope="col">Pin</th>
//                                 <th scope="col">Phone</th>
//                                 <th scope="col">Gender</th>
//                                 <th scope="col">worktype</th>
//                                 <th scope="col">Photo</th>
//                                 <th scope="col">Aadhaar</th>
//                                 <th scope="col">Action</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               {workers.map(worker => (
//                                 <tr >
//                                             <td>{worker.id}</td>
//                                             <td>{worker.name}</td>
//                                             <td>{worker.email}</td>
//                                             <td>{worker.place}</td>
//                                             <td>{worker.post}</td>
//                                             <td>{worker.pin}</td>
//                                             <td>{worker.Phone}</td>
//                                             <td>{worker.gender}</td>
//                                             <td>{worker.worktype}</td>
//                                             <td>
//                                             <td><img width={'100px'} height={'100px'} src={`http://localhost:8000/uploads/${worker.photo}`} alt="Client" /></td>                        </td>                      
//                                             <td>{worker.aadhaar}</td>
//                                             <td> <Link to={`editworker/${worker.id}`}><button className='btn btn-primary'>Edit</button></Link></td>

//                              </tr>            ))}

//                             </tbody>
//                           </table>
//                   </div>
//                 </div>
//           </div> 
//         </div> 
//     </div>
//     </div>
//   )
// }

// export default Listworkers
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Headeradmin from './Headeradmin';

function Listworkers() {
  const [workers, setWorkers] = useState([]);

    useEffect(() => {
        fetchWorkers();
    }, []);

    const fetchWorkers = async () => {
        try {
            const response = await fetch('http://localhost:8000/workers');
            console.log(response);
            const data = await response.json();

            setWorkers(data);
        } catch (error) {
            console.error('Error fetching workers:', error);
        }
    };
    const deleteWorker = async (id) => {
      try{
          const deleteworker = await axios.delete(`http://localhost:8000/deleteworker/${id}`)
           alert(deleteworker.data.message)
           fetchWorkers()

       }
       catch(error){
           console.error("error deleting",error)
       }
  }
  return (
    <div>
     <Headeradmin/>
       <div class="row mb-2">
        <div class="container">
          <div class="col-12 d-flex flex-column justify-content-center pb-1 px-3">
              <div class="row heading">
                <div class="col-12 text-center">
                  <h3 class="text-light text-center pt-4 pb-2">Workers</h3>
                  <Link to='/workerreg'><button class="btn btn-new p-2 mb-4" >add New Worker</button></Link>
                </div>
              </div>
              <div class="row form-content">
                  <div class="col-12 d-flex justify-content-center">
                        <table class="table table-bordered border-dark table-striped table-hover">
                            <thead class="table-dark">
                              <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Place</th>
                                <th scope="col">Post</th>
                                <th scope="col">Pin</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Aadhaar</th>
                                <th scope="col"></th>
                                {/* <th scope="col"></th> */}
                              </tr>
                            </thead>
                            <tbody>
                              {workers.map(worker => (
                                <tr >
                                            <td>{worker.id}</td>
                                            <td>{worker.name}</td>
                                            <td>{worker.email}</td>
                                            <td>{worker.place}</td>
                                            <td>{worker.post}</td>
                                            <td>{worker.pin}</td>
                                            <td>{worker.Phone}</td>
                                            <td>{worker.gender}</td>
                                            <td>
                                            <td><img width={'200px'} height={'200px'} src={`http://localhost:8000/uploads/${worker.photo}`} alt="Client" /></td>                        </td>                      
                                            <td>{worker.aadhaar}</td>
                                            <td><Link to={`editworker/${worker.id}`}> <button className='btn btn-primary'>Edit</button>  </Link></td>
                                            {/* <td><button class="btn btn-danger" onClick={()=>deleteWorker(worker.id)}>Delete</button></td> */}
                             </tr>            ))}

                            </tbody>
                          </table>
                  </div>
                </div>
          </div> 
        </div> 
    </div>
    </div>
  )
}

export default Listworkers