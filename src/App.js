
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Register from './components/Register';
import Clientreg from './components/Clientreg';
import Employeereg from './components/Employeereg';
import Projectadd from './components/Projectadd';
import Projectplanadd from './components/Projectplanadd';
import Clientsuggstn from './components/Clientsuggstn';
import Suggstnreply from './components/Suggstnreply';
import Addstatus from './components/Addstatus';
import Login from './components/Login';
import Adminpanel from './components/Adminpanel';
import Clientpanel from './components/Clientpanel';
import Engineerpanel from './components/Engineerpanel';
import Contractorpanel from './components/Contractorpanel';
import Supervisorpanel from './components/Supervisorpanel';
import Listclients from './components/Listclients';
import Listemployees from './components/Listemployees';
import Editemployee from './components/Editemployee';
import Addfeedback from './components/Addfeedback';
import Editclient from './components/Editclient';
import Listworkers from './components/Listworkers';
import Workerreg from './components/Workerreg';
import Listprojects from './components/Listprojects'
import Getprojects from './components/Getprojects';
import ClientProjects from './components/ClientProjects';
import VerifiedProjects from './components/VerifiedProjects';
import ContractorProjects from './components/ContractorProjects';
import SupervisorProjects from './components/SupervisorProjects';
import Editsupervisor from './components/Editsupervisor';
import EditContractor from './components/EditContractor';
import EditWorker from './components/EditWorker';
import Contractoradd from './components/Contractoradd';
import EditEngineer from './components/EditEngineer';
import AdminProjects from './components/AdminProjects';
import Addprogress from './components/Addprogress';
import Viewprogress from './components/Viewprogress';
import ClientProgress from './components/ClientProgress';
import Addworker from './components/Addworker';
import AdminProgress from './components/AdminProgress';
import Adddocuments from './components/Adddocuments';
import Documents from './components/Documents';
import AdminDocuments from './components/AdminDocuments';
import Addconcern from './components/Addconcern';
import Concern from './components/Concern';
import Suggestion from './components/Suggestion';
import Viewsuggestion from './components/Viewsuggestion';
import ViewConcerns from './components/ViewConcerns';
import ConcernReplay from './components/ConcernReplay';
import ViewConcernreplay from './components/ViewConcernreplay';
import Attendance from './components/Attendance';
import Addattendance from './components/Addattendance';
import ViewAttendance from './components/ViewAttendance';
import AttendanceCon from './components/AttendanceCon';
import ContractorAttendance from './components/ContractorAttendance';
import ViewSugReply from './components/ViewSugReply';
import EditProject from './components/EditProject';
import Completed from './components/Completed';
import Percentage from './components/Percentage';
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/register" element={<Register/>}/> */}
        <Route path="/" element={<Login/>}/>
        <Route path="/clientreg" element={<Clientreg/>}/>
        <Route path="/employeereg" element={<Employeereg/>}/>
        <Route path="/admin" element={<Adminpanel/>}/>
        <Route path="/client" element={<Clientpanel/>}/>
        <Route path="/engineer" element={<Engineerpanel/>}/>
        <Route path="/contractor" element={<Contractorpanel/>}/>
        <Route path="/supervisor" element={<Supervisorpanel/>}/>
        <Route path="/addproject" element={<Projectadd/>}/>
        <Route path="/addplan/:id" element={<Projectplanadd/>}/>
        <Route path='/viewplan/suggestion/:projectid/:engid' element={<Clientsuggstn/>}/>
        <Route path='/engineer/viewsuggestion/replaysuggestion/:id' element={<Suggstnreply/>} />
        <Route path='/addfeedback' element={<Addfeedback/>} />
        <Route path='/addstatus' element={<Addstatus/>} />
        <Route path='/listclients' element={<Listclients/>}/>
        <Route path='/listemployees' element={<Listemployees/>}/>
        <Route path='/listemployees/edit/:id' element={<Editemployee/>}/>
        <Route path='/listworkers' element={<Listworkers/>}/>
        <Route path="/workerreg" element={<Workerreg/>}/>
        {/* <Route path='/client/editprofile/:id' element={<Editclient/>}/> */}
        <Route path='/client/editprofile' element={<Editclient/>}/>

        <Route path='/listprojects' element={<Listprojects/>}/>
        <Route path="/listprojects/editproject/:id" element={<EditProject/>}/>
        {/* <Route path='/getprojects/:id' element={<Getprojects/>}/> */}
        <Route path='/getprojects' element={<Getprojects/>}/>

        <Route path='/viewplan' element={<ClientProjects/>}/>
        {/* <Route path='/verifiedproject/:id' element={<VerifiedProjects/>}/> */}
        <Route path='/verifiedproject' element={<VerifiedProjects/>}/>

        <Route path='/contractor/contractorprojects' element={<ContractorProjects/>}  />
        <Route path='/supervisor/supervisorproject' element={<SupervisorProjects/>}/>
        {/* <Route path='/supervisor/editprofile/:id' element={<Editsupervisor/>}/> */}
        <Route path='/supervisor/editprofile' element={<Editsupervisor/>}/>


        {/* <Route path='/contractor/editprofile/:id' element={<EditContractor/>} /> */}
        <Route path='/contractor/editprofile' element={<EditContractor/>} />

        <Route path='/listworkers/editworker/:id' element={<EditWorker/>}/>
        <Route path='/contractor/contractorprojects/adddetails/:id' element={<Contractoradd/>}/>
        {/* <Route path='/engineer/editEngineer/:id' element={<EditEngineer/>}/> */}
        <Route path='/engineer/editEngineer' element={<EditEngineer/>}/>

        <Route path='/verifiedprojectsadmin' element={<AdminProjects/>}/>
        <Route path='/supervisor/supervisorproject/addprogress/:projectId' element={<Addprogress/>}/>
        {/* <Route path='/client/viewprogress/:id' element={<Viewprogress/>} /> */}
        <Route path='/client/viewprogress' element={<Viewprogress/>} />

        <Route path='/clientprogress/:id' element={<ClientProgress/>}/>
        <Route path='/adminprogress/:id' element={<AdminProgress/>}/>
        <Route path='/client/adddocuments' element={<Adddocuments/>}/>
        <Route path='/documents/:projectId/:clientId' element={<Documents/>}/>
        <Route path='/documentsbyclient/:id' element={<AdminDocuments/>}/>
        {/* <Route path='/addconcern/:id' element={<Addconcern/>}/> */}
        <Route path='/addconcern' element={<Addconcern/>}/>

        <Route path='/addconcern/concern/:projectid/:conid' element={<Concern/>}/>
        {/* <Route path='/engineer/viewsuggestion/:id' element={<Viewsuggestion/>}/> */}
        <Route path='/engineer/viewsuggestion' element={<Viewsuggestion/>}/>
        <Route path='/viewreply' element={<ViewSugReply/>}/>

        <Route path='/contractor/viewconcerns' element={<ViewConcerns/>}/>
        <Route path='/contractor/viewconcerns/replayconcern/:id' element={<ConcernReplay/>}/>
        <Route path='/viewreplaysup' element={<ViewConcernreplay/>} />
        <Route path='/attendance' element={<Attendance/>}/>
        <Route path='/workerattendance/:id' element={<Addattendance/>}/>

        <Route path='/viewattendance/:id' element={<ViewAttendance/>}/>


        <Route path='/attendanceviewbycon' element={<AttendanceCon/>}/>


        <Route path='/attendanceviewbycon/attendancebycontractor/:id' element={<ContractorAttendance/>}/>

        <Route path='/completedproject' element={<Completed/>}/>

      </Routes>
    </div>
  );
}

export default App;
