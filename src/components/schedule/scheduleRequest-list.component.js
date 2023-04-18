import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Modal } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
// import EditEmployee  from './employee-edit.component';
import ScheduleRequestDetails from './scheduleRequest-details.component';


const Schedule = props => (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
        {/* <td>{props.employee._id}</td> */}
        
        <td className='px-6 py-4'>{props.schedule.scheduleID}</td>
        <td className='px-6 py-4'>{props.schedule.empID}</td>
        <td className='px-6 py-4'>{props.schedule.date.substring(0,10)}</td>
        <td className='px-6 py-4'>{props.schedule.changingScheduleID}</td>
        <td className='px-6 py-4'>{props.schedule.changingEmpID}</td>
        <td className='px-6 py-4'>{props.schedule.changingDate.substring(0,10)}</td>
        <td className='px-6 py-4'>{props.schedule.changingsTime}</td>
        <td className='px-6 py-4'>{props.schedule.changingeTime}</td>
        <td className='px-6 py-4'>{props.schedule.status}</td>
        <td className='px-6 py-4'>
            <div class="flex justify-center">
                <div class="">
                    <button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-indigo-500 rounded-md hover:bg-blue-200' onClick={() => { props.gotoMoreDetails(props.schedule._id) }}>
                        
                            <div class=" grid grid-cols-2 gap-1 hover:text-black duration-100">
                                <div class="">
                                    <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                    </svg>
                                </div>
                                <div class="">
                                    More Details
                                </div>
                            </div>
                       
                    </button>
                </div>
                {/* <div class="">
                    <button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-red-500 rounded-md hover:bg-red-200' >
                        <div class="grid grid-cols-2 gap-1 hover:text-black">
                            <div class="">
                                <svg class="h-5 w-5 mr-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </div>
                            <div>
                                Delete
                            </div>
                        </div>
                    </button>
                </div> */}
            </div>
        </td>
        <td>
        <div class="flex justify-center">
                <div class="">
                    <button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-indigo-500 rounded-md hover:bg-blue-200' onClick={() => { props.approve(props.schedule._id, props.schedule.scheduleID,props.schedule.changingDate, props.schedule.changingsTime,props.schedule.changingeTime,props.schedule.changingScheduleID,props.schedule.date,props.schedule.sTime,props.schedule.eTime) }}>
                        
                            <div class=" grid grid-cols-2 gap-1 hover:text-black duration-100">
                                <div class="">
                                    <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                    </svg>
                                </div>
                                <div class="">
                                    Approve
                                </div>
                            </div>
                       
                    </button>
                </div>
                </div>
</td><td>
                <div class="flex justify-center">
                <div class="">
                    <button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-indigo-500 rounded-md hover:bg-blue-200' onClick={() => { props.decline(props.schedule._id,props.schedule.scheduleID) }}>
                        
                            <div class=" grid grid-cols-2 gap-1 hover:text-black duration-100">
                                <div class="">
                                    <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                    </svg>
                                </div>
                                <div class="">
                                    Decline
                                </div>
                            </div>
                       
                    </button>
                </div>
                </div>
        </td>
    </tr>
)

export class ScheduleRequestList extends Component {

    constructor(props) {
        super(props);

        // var today = new Date(),

        // time = today.getHours() + ':' + today.getMinutes()  ;

        // const loggedUserId = AuthenticationService.loggedUserId();


        // this.clockIn = this.clockIn.bind(this);
        // this.clockOut = this.clockOut.bind(this);
        // this.onChangesearchSchedule = this.onChangesearchSchedule.bind(this);


        // this.deleteEmployee = this.deleteEmployee.bind(this);
        // this.gotoUpdateEmployee = this.gotoUpdateEmployee.bind(this);

        this.gotoMoreDetails = this.gotoMoreDetails.bind(this);
        this.approve = this.approve.bind(this);
        this.decline = this.decline.bind(this);

        this.state = {
            schedule: [],
            searchSchedule: '',
            show:false,
            // currentTime:time
        };
    }

    // onChangesearchSchedule(date) {

       
    //     this.setState({
    //         searchSchedule:date
    //     });
    //     console.log("Selected Date is" +this.searchScheduleList)
    // }

    

    refreshList(){

        axios.get('http://localhost:5000/scheduleRequest/')
            .then(response => {
                this.setState({ schedule: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
        
    }




    componentDidMount() {
       this.refreshList();
    }

    // gotoUpdateEmployee = (id) => {
    //     this.setState({
    //         id: id,
    //         show: true

    //     })
    //     console.log("LIst id is :" +id);
    // }

    // //Modal box
    // closeModalBox = () => {
    //     this.setState({ show: false })
    //     this.refreshList();
    // }

    // deleteEmployee(id) {
    //     axios.delete('http://localhost:5000/employee/' + id)
    //         .then(res => console.log(res.data));
    //     this.setState({
    //         employee: this.state.employee.filter(el => el._id !== id)
    //     })
    // }

//     deleteEmployee(id) {
        
//         axios.delete('http://localhost:5000/employee/' + id).then(response => {
//             console.log(response.status)
//             // this.refreshTable();

//             if(response.status == 200){
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Successful',
//                     text: "Employee has been deleted!!",
//                     background: '#fff',
//                     confirmButtonColor: '#0a5bf2',
//                     iconColor: '#60e004'
//                 })

//                 this.refreshList();
//             }
            
//             else {
//                 Swal.fire({
//                     icon: 'Unsuccess',
//                     title: 'Unsuccessfull',
//                     text: "Employee has not been deleted!!",
//                     background: '#fff',
//                     confirmButtonColor: '#eb220c',
//                     iconColor: '#60e004'
//                 })
//             }

            
//         })
        

// }

gotoMoreDetails = (id) => {
    this.setState({
        id: id,
        show: true

    })
    console.log("LIst id is :" +id);
}

//Modal box
closeModalBox = () => {
    this.setState({ show: false })
    this.refreshList();
}

//change the schedule of the second changing schedule
changeSchedule(changingScheduleID,date,sTime,eTime){

    const statusA = {
        date: date,
        sTime:sTime,
        eTime: eTime,
        status : "Scheduled"
    }
    console.log("Working Schedule Updated")
    console.log(statusA)
    axios.put('http://localhost:5000/workingSchedule/updateExisting/' +changingScheduleID, statusA)
}

scheduledExisting(scheduleID){
    const status = {
        status : "Scheduled"
    }
    console.log("Working Schedule Updated")
    axios.put('http://localhost:5000/workingSchedule/status/' +scheduleID, status)

}

//schedule the requested schedule of the user 1
scheduledNew(scheduleID,changingDate, changingsTime, changingeTime){
    const statusA = {
        date: changingDate,
        sTime:changingsTime,
        eTime: changingeTime,
        status : "Scheduled"
    }
    console.log("Working Schedule Updated")
    console.log(statusA)
    axios.put('http://localhost:5000/workingSchedule/updateExisting/' +scheduleID, statusA)

}

//approve the change in schedule
approve(id,scheduleID, changingDate,changingsTime,changingeTime,changingScheduleID,date,sTime,eTime) {
    const schedule = {
        status: 'Approved'
    }

   this.scheduledNew(scheduleID,changingDate,changingsTime,changingeTime);
   this.changeSchedule(changingScheduleID,date,sTime,eTime)

    axios.put('http://localhost:5000/scheduleRequest/status/' + id, schedule)
        .then(res => console.log(res.data));
    
    
}

//decline the change in schedule
decline(id,scheduleID) {
    const schedule = {
        status: 'Declined'
    }

    this.scheduledExisting(scheduleID);

    axios.put('http://localhost:5000/scheduleRequest/status/' + id, schedule)
        .then(res => console.log(res.data));
    
    //    window.location = './scheduleRequestLsit'
}





    scheduleList() {
        return this.state.schedule.map(currentschedule => {
            return <Schedule schedule={currentschedule}  gotoMoreDetails={this.gotoMoreDetails} approve={this.approve} decline={this.decline} key={currentschedule._id} />;
        })
    }

    searchScheduleList() {
        return this.state.schedule.map((currentschedule) => {
            if (
                this.state.searchSchedule ==
                currentschedule.empID
            ) {
                return (
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                        <td className='px-6 py-4'>{currentschedule.scheduleID}</td>
                        <td className='px-6 py-4'>{currentschedule.empID}</td>
                        <td className='px-6 py-4'>{currentschedule.date.substring(0, 10)}</td>
                        <td className='px-6 py-4'>{currentschedule.changingEmpID}</td>
                        <td className='px-6 py-4'>{currentschedule.changingDate.substring(0, 10)}</td>
                        <td className='px-6 py-4'>{currentschedule.changingsTime}</td>
                        <td className='px-6 py-4'>{currentschedule.changingeTime}</td>
                        <td className='px-6 py-4'>{currentschedule.status}</td>
                        <td className='px-6 py-4'>
                            {
                                <div class="">
                                    <button className='inline-flex items-center px-4 py-2 mr-1 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-blue-200' onClick={() => { this.gotoMoreDetails(currentschedule._id) }}>
                                       
                                            <div class=" grid grid-cols-2 gap-1">
                                                <div class="">
                                                    <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                    </svg>
                                                </div>
                                                <div class="">
                                                   More Details
                                                </div>
                                            </div>
                                      
                                    </button>
                                </div>
                            }
                            </td>

                            <td>

                            <div class="flex justify-center">
                <div class="">
                    <button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-indigo-500 rounded-md hover:bg-blue-200' onClick={() => { this.approve(currentschedule._id, currentschedule.scheduleID,currentschedule.changingDate, currentschedule.changingsTime,currentschedule.changingeTime,currentschedule.changingScheduleID,currentschedule.date,currentschedule.sTime,currentschedule.eTime) }}>
                        
                            <div class=" grid grid-cols-2 gap-1 hover:text-black duration-100">
                                <div class="">
                                    <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                    </svg>
                                </div>
                                <div class="">
                                    Approve
                                </div>
                            </div>
                       
                    </button>
                </div>
                </div>
                            </td>

                            <td>
                            <div class="flex justify-center">
                <div class="">
                    <button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-indigo-500 rounded-md hover:bg-blue-200' onClick={() => { this.approve(currentschedule._id, currentschedule.scheduleID) }}>
                        
                            <div class=" grid grid-cols-2 gap-1 hover:text-black duration-100">
                                <div class="">
                                    <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                    </svg>
                                </div>
                                <div class="">
                                    Decline
                                </div>
                            </div>
                       
                    </button>
                </div>
                </div>
                                </td>

                            
                    </tr>
                );
            }
        });
    }


    exportScheduleRequest = () => {
        console.log( "Export PDF" )


        const unit = "pt";
        const size = "A3"; 
        const orientation = "landscape"; 
        const marginLeft = 40;
        const doc = new jsPDF( orientation, unit, size );

        const title = "Schedule Request List Report ";
        const headers = [["Schedule ID","Employee ID","Date","Starting Time","Ending Time","Changing Employee ID", "Changing Date","Changing Starting Time", "Changing End Time", "Status"]];

        const sr = this.state.schedule.map(
            Schedule=>[
                Schedule.scheduleID,
                Schedule.empID,
                Schedule.date,
                Schedule.sTime,
                Schedule.eTime,
                Schedule.changingEmpID,
                Schedule.changingDate,
                Schedule.changingsTime,
                Schedule.changingeTime,
                Schedule.status
            ]
        );

        let content = {
            startY: 50,
            head: headers,
            body:sr
        };
        doc.setFontSize( 20 );
        doc.text( title, marginLeft, 40 );
        require('jspdf-autotable');
        doc.autoTable( content );
        doc.save( "Schedule Request-list.pdf" )
    }

    render() {
        return (
            <div className="flex flex-col px-5 pt-2">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className='items-center overflow-hidden'>
                            <div class="grid grid-cols-1 gap-4 content-start">
                                <table className=''>
                                    <tr>
                                    <th className='drop-shadow-md'>
                                    <h3>Schedule Request Details</h3>

                                    </th>
                                                <td>
                                                <div class="flex justify-end sm:flex-row sm:text-left sm:justify-end gap-2">
                                                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => this.exportScheduleRequest()} >
                                                  
                                                  Download Report Here
                                              </button>
                                            <div class="flex justify-end sm:flex-row sm:text-left sm:justify-end">
                                                <input
                                                    className="form-control rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                                                    type="text"
                                                    placeholder="Search by Employee ID"
                                                    aria-label="Search"
                                                    onChange={(e) => {
                                                        this.setState({
                                                            searchSchedule: e.target.value
                                                        });
                                                    }}
                                                  
                                                />

                                                        {/* <DatePicker
                                                            viewBox="0 0 20 40"
                                                            required
                                                            selected={this.state.searchSchedule}
                                                            onChange={this.onChangesearchSchedule}
                                                        /> */}
                                            </div>
                                            </div>
                                        </td>
                                      
                                            </tr>
                                            <tr>
                                            <th className='drop-shadow-md'>
                                           
                                        </th>
                                        <td className='flex justify-end gap-2'>
                                            <div class="flex justify-end sm:flex-row sm:text-left sm:justify-end gap-2">
                                                <button class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800">
                                                    <Link className='font-semibold text-white no-underline' to={"/pendingScheduleRequestLsit"}>
                                                        Pending Schedule
                                                    </Link></button>
                                                    <button class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
                                                    <Link className='font-semibold text-white no-underline' to={"/approvedScheduleRequestLsit"}>
                                                        Approved Schedule
                                                    </Link></button>
                                                    <button class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
                                                    <Link className='font-semibold text-white no-underline' to={"/decliedScheduleRequestLsit"}>
                                                        Declined Schedule
                                                    </Link></button>
                                                
                                            </div>

                                            </td>
                                    </tr>
                                </table>
                            </div>
                            <div className='relative grid content-start grid-cols-1 gap-4 overflow-x-auto shadow-md sm:rounded-lg'>
                                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400' >
                                    <thead className='p-5 text-xs text-gray-700 uppercase border bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                        <tr>
                                        <th className="p-2 border-black tbhead ">Schedule ID</th>
                                            <th className="p-2 border-black tbhead ">Employee ID</th>
                                            <th className="p-2 tbhead">Date</th>
                                            <th className="p-2 tbhead">Changing Employee ID</th>
                                            <th className="p-2 tbhead">Changing Date</th>
                                           
                                            <th className="p-2 tbhead">Status</th>
                                            
                                            <th className="p-2 tbhead">More Details</th>
                                            <th className="p-2 tbhead">Approve</th>
                                            <th className="p-2 tbhead">Decline</th>
                                            {/* <th className="p-2 text-center tbhead">Clock In</th>
                                            <th className="p-2 text-center tbhead">Clock Out</th> */}
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {this.state.searchSchedule == "" ? this.scheduleList() : this.searchScheduleList()}
                                    </tbody>
                                </table>
                            </div>
                            <div class="">
                                <Modal show={this.state.show} onHide={this.closeModalBox} centered size={"xl"}>
                                    <Modal.Header className='px-5 pt-4 border-2 shadow-md bg-gray-50' closeButton>
                                        <div class="">
                                            <Modal.Title className='items-center' >
                                                <p className='font-semibold text-black uppercase '>
                                                    Schedule Request Details
                                                </p>
                                            </Modal.Title>
                                        </div>
                                    </Modal.Header >
                                    <Modal.Body className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50'>
                                        <ScheduleRequestDetails schId={this.state.id} key={this.state.id} close={this.closeModalBox} />
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

