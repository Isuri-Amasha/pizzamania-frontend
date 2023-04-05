import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Feedback = props => (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
        <td className='px-6 py-4'>{props.feedback.feedback}</td>
        <td className='px-6 py-4'>{props.feedback.userContact}</td>
        <td className='px-6 py-4'>{props.feedback.empID}</td>
        <td className='px-6 py-4'>
            <div class="flex justify-center">
                <div class="">
                    <button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-indigo-500 rounded-md hover:bg-blue-200'>
                        <Link className='text-white no-underline' to={"/editFeedback/" + props.feedback._id}>
                            <div class=" grid grid-cols-2 gap-1 hover:text-black duration-100">
                                <div class="">
                                    <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                    </svg>
                                </div>
                                <div class="">
                                    Edit
                                </div>
                            </div>
                        </Link>
                    </button>
                </div>
                <div class="">
                    <button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-red-500 rounded-md hover:bg-red-200' onClick={() => { props.deleteFeedback(props.feedback._id) }}>
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
                </div>
            </div>
        </td>
    </tr>
)

export class FeedbackList extends Component {

    constructor(props) {
        super(props);

        this.deleteFeedback = this.deleteFeedback.bind(this);


        this.state = {
            feedback: [], user: [],
            searchFeedback: ""
        };
    }


    componentDidMount() {
        axios.get('http://localhost:5000/feedback/')
            .then(response => {
                this.setState({ feedback: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteFeedback(id) {
        axios.delete('http://localhost:5000/feedback/' + id)
            .then(res => console.log(res.data));
        this.setState({
            feedback: this.state.feedback.filter(el => el._id !== id)
        })
    }

    feedbackList() {
        return this.state.feedback.map(currentfeedback => {
            return <Feedback feedback={currentfeedback} deleteFeedback={this.deleteFeedback} key={currentfeedback._id} />;
        })
    }



    searchFeedbackList() {

        return this.state.feedback.map((currentfeedback) => {
            if (
                this.state.searchFeedback ==
                currentfeedback.feedback
            ) {
                return (
                    <tr>

                        <td style={{ width: "10%" }}>{currentfeedback.feedback}</td>
                        <td style={{ width: "10%" }}>{currentfeedback.userContact}</td>
                        <td style={{ width: "10%" }}>{currentfeedback.empID}</td>



                        <td style={{ width: "20%" }}>
                            {
                                <button >
                                    <Link
                                        to={"/editFeedback/" + currentfeedback._id}

                                    >
                                        Edit
                                    </Link>
                                </button>
                            }
                            {"  "}
                            {
                                <button

                                    onClick={() => {
                                        //Delete the selected record
                                        axios
                                            .delete(
                                                "http://localhost:5000/feedback/" + currentfeedback._id
                                            )
                                            .then(() => {
                                                alert("Delete Success");
                                                //Get data again after delete
                                                axios
                                                    .get("http://localhost:5000/feedback")
                                                    .then((res) => {
                                                        console.log(res.data);
                                                        this.setState({
                                                            feedback: res.data,
                                                        });
                                                    })
                                                    .catch((err) => console.log(err));
                                            })
                                            .catch((err) => {
                                                alert(err);
                                            });
                                    }}
                                >
                                    Delete
                                </button>
                            }
                        </td>
                    </tr>
                );
            }
        });
    }


    // exportEmployee = () => {
    //     console.log( "Export PDF" )


    //     const unit = "pt";
    //     const size = "A3"; 
    //     const orientation = "landscape"; 
    //     const marginLeft = 40;
    //     const doc = new jsPDF( orientation, unit, size );

    //     const title = "Employee List Report ";
    //     const headers = [["Full Name","NIC","EMP ID","Date of Birth","Designation","Section","Address","Contact No","Emergancy No"]];

    //     const emp = this.state.employee.map(
    //         Employee=>[
    //             Employee.fullName,
    //             Employee.nic,
    //             Employee.empID,
    //             Employee.dob.substring(0,10),
    //             Employee.designation,
    //             Employee.section,
    //             Employee.address,
    //             Employee.contactNo,
    //             Employee.emergency,
    //         ]
    //     );

    //     let content = {
    //         startY: 50,
    //         head: headers,
    //         body:emp
    //     };
    //     doc.setFontSize( 20 );
    //     doc.text( title, marginLeft, 40 );
    //     require('jspdf-autotable');
    //     doc.autoTable( content );
    //     doc.save( "Employee-list.pdf" )
    // }


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
                                            <h3>Feedback Details</h3>
                                        </th>
                                        <td className='flex justify-end gap-2'>
                                            <div class="flex justify-end sm:flex-row sm:text-left sm:justify-end gap-2">
                                                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                                    <Link className='font-semibold text-white no-underline' to={"/creatFeedback"}>
                                                        Add Feedback
                                                    </Link></button>
                                                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                                    <Link className='text-white no-underline' to={"/"}>
                                                        Download Report Here
                                                    </Link></button>
                                            </div>
                                            <div class="flex justify-end sm:flex-row sm:text-left sm:justify-end">
                                                <input
                                                    className="form-control rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                                                    type="text"
                                                    placeholder="Search by Customer"
                                                    aria-label="Search"
                                                    onChange={(e) => {
                                                        this.setState({
                                                            searchFeedback: e.target.value
                                                        });
                                                    }}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div className='relative grid content-start grid-cols-1 gap-4 overflow-x-auto shadow-md sm:rounded-lg'>
                                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400' >
                                    <thead className='p-5 text-xs text-gray-700 uppercase border bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                        <tr>
                                            <th className="p-2 border-black tbhead ">Feedback</th>
                                            <th className="p-2 tbhead">Customer Contact</th>
                                            <th className="p-2 tbhead">Employee ID</th>
                                            <th className="p-2 text-center tbhead">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {this.state.searchFeedback == "" ? this.feedbackList() : this.searchFeedbackList()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

