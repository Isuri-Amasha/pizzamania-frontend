import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Delivery = props => (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
        {/* <td>{props.employee._id}</td> */}
        <td className='px-6 py-4'>{props.delivery.orderId}</td>
        <td className='px-6 py-4'>{props.delivery.customer}</td>
        <td className='px-6 py-4'>{props.delivery.deliveryAddress}</td>
        <td className='px-6 py-4'>{props.delivery.amount}</td>
        <td className='px-6 py-4'>{props.delivery.orderStatus}</td>
        <td className='px-6 py-4'>{props.delivery.assignedEmp}</td>
        <td className='px-6 py-4'>
            <div class="flex justify-center">
                <div class="">
                    <button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-indigo-500 rounded-md hover:bg-blue-200'>
                        <Link className='text-white no-underline' to={"/editDelivery/" + props.delivery._id}>
                            <div class=" grid grid-cols-2 gap-1 hover:text-black duration-100">
                                <div class="">
                                    <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                    </svg>
                                </div>
                                <div class="">
                                    Update
                                </div>
                            </div>
                        </Link>
                    </button>
                </div>
            </div>
        </td>

    </tr>
)

export class OngoingDeliveryList extends Component {

    constructor(props) {
        super(props);




        this.state = {
            delivery: [],
            searchDelivery: "Order Delivering",
        };
    }


    componentDidMount() {
        axios.get('http://localhost:5000/delivery/')
            .then(response => {
                this.setState({ delivery: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }



    deliveryList() {
        return this.state.delivery.map(currentdelivery => {
            return <Delivery delivery={currentdelivery} />;
        })
    }

    searchDeliveryList() {
        return this.state.delivery.map((currentdelivery) => {
            if (
                this.state.searchDelivery ==
                currentdelivery.orderStatus
            ) {
                return (
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                        <td className='px-6 py-4'>{currentdelivery.orderId}</td>
                        <td className='px-6 py-4'>{currentdelivery.customer}</td>
                        <td className='px-6 py-4'>{currentdelivery.deliveryAddress}</td>
                        <td className='px-6 py-4'>{currentdelivery.amount}</td>
                        <td className='px-6 py-4'>
                            <span
                                class="text-base inline-block whitespace-nowrap rounded-full bg-green-400 p-1 hover:bg-green-500 hover:drop-shadow-md hover:text-white  px-2 pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                                {currentdelivery.orderStatus}
                            </span>
                        </td>
                        <td className='px-6 py-4'>{currentdelivery.assignedEmp}</td>
                        <td className='flex justify-center px-6 py-4 '>
                            {
                                <div class="">
                                    <button className='inline-flex items-center px-4 py-2 mr-1 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-blue-200' >
                                        <Link className='text-white no-underline' to={"/editDelivery/" + currentdelivery._id}>
                                            <div class=" grid grid-cols-2 gap-1">
                                                <div class="">
                                                    <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                    </svg>
                                                </div>
                                                <div class="">
                                                    Update
                                                </div>
                                            </div>
                                        </Link>
                                    </button>
                                </div>
                            }
                        </td>
                    </tr>
                );
            }
        });
    }


    filterDeliveryReady() {
        return this.state.delivery.map((currentdelivery) => {
            if (
                this.state.filterReady ===
                currentdelivery.orderStatus
            ) {
                return (
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                        <td className='px-6 py-4'>{currentdelivery.orderId}</td>
                        <td className='px-6 py-4'>{currentdelivery.customer}</td>
                        <td className='px-6 py-4'>{currentdelivery.deliveryAddress}</td>
                        <td className='px-6 py-4'>{currentdelivery.amount}</td>
                        <td className='px-6 py-4'>{currentdelivery.orderStatus}</td>
                        <td className='px-6 py-4'>{currentdelivery.assignedEmp}</td>

                        {/* <td style={{ width: "20%" }}>
                            {
                            <button >
                                <Link
                                to={"/editDelivery/" + currentdelivery._id}
                                
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
                                    "http://localhost:5000/delivery/" + currentdelivery._id
                                    )
                                    .then(() => {
                                    alert("Delete Success");
                                      //Get data again after delete
                                    axios
                                        .get("http://localhost:5000/delivery")
                                        .then((res) => {
                                        console.log(res.data);
                                        this.setState({
                                            delivery: res.data,
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
                        </td> */}
                    </tr>
                );
            }
            else {
                window.location = '/customer';
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
                                            <h3>Delivery Details</h3>
                                        </th>
                                        <td className='flex justify-end gap-2'>
                                            <div class="flex justify-end sm:flex-row sm:text-left sm:justify-end gap-2">
                                                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                                    <Link className='text-white no-underline' to={"/"}>
                                                        Download Report Here
                                                    </Link>
                                                </button>
                                            </div>
                                            <div class="flex justify-end sm:flex-row sm:text-left sm:justify-end">
                                                <input
                                                    className="form-control rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                                                    type="text"
                                                    placeholder="Search by Employee ID"
                                                    aria-label="Search"
                                                    onChange={(e) => {
                                                        this.setState({
                                                            searchDelivery: e.target.value
                                                        });
                                                    }}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="">
                                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400' >
                                    <thead className='p-5 text-xs text-gray-700 uppercase border bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                        <tr>
                                            <th className="p-2 border-black tbhead ">Order Id</th>
                                            <th className="p-2 tbhead">Customer</th>
                                            <th className="p-2 tbhead">Delivery Address</th>
                                            <th className="p-2 tbhead">Amount</th>
                                            <th className="p-2 tbhead">Order Status</th>
                                            <th className="p-2 tbhead">Assigned Employee</th>
                                            <th className="p-2 text-center tbhead">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {this.state.searchDelivery == "" ? this.deliveryList() : this.searchDeliveryList()}
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

