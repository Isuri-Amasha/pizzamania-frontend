import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Order = props => (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
        {/* <td>{props.employee._id}</td> */}
        <td className='px-2 py-2'>{props.order.customer}</td>
        <td className='px-2 py-2'>{props.order.item1}</td>
        <td className='px-2 py-2'>{props.order.quantity1}</td>
        <td className='px-2 py-2'>{props.order.item2}</td>
        <td className='px-2 py-2'>{props.order.quantity2}</td>
        <td className='px-2 py-2'>{props.order.item3}</td>
        <td className='px-2 py-2'>{props.order.quantity3}</td>
        <td className='px-2 py-2'>{props.order.orderFor}</td>
        <td className='px-2 py-2'>{props.order.deliveryAddress}</td>
        <td className='px-2 py-2'>{props.order.amount}</td>
        <td className='px-2 py-2'>{props.order.orderStatus}</td>
        <td className='px-6 py-4'>
            <div class="justify-center">
                <button className='items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-indigo-500 rounded-md hover:bg-blue-200'>
                    <Link className='text-white no-underline' onClick={() => { props.updateOrderStatus(props.order._id) }}>
                        <div class=" flex gap-1 hover:text-black duration-100">
                            <div class="">
                                <svg class="h-5 w-5 m-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                </svg>
                            </div>
                            <div class="m-2">
                                Order Accepted

                            </div>

                        </div>
                    </Link>
                </button>
            </div>
        </td>
        <td className='px-6 py-4'>
            <div class="justify-center">
                <button className='inline-flex px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-red-500 rounded-md hover:bg-red-200' onClick={() => { props.readyForDelivery(props.order._id) }}>
                    <div class="flex gap-1 hover:text-black">
                        <div class="">
                            <svg class="h-5 w-5 m-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                            </svg>
                        </div>
                        <div class="m-2">
                            Ready For Delivery
                        </div>
                    </div>
                </button>
            </div>
        </td>
    </tr>
)

export class KitchenOrderList extends Component {

    constructor(props) {
        super(props);

        this.updateOrderStatus = this.updateOrderStatus.bind(this);
        this.readyForDelivery = this.readyForDelivery.bind(this);


        this.state = {
            order: [],
            searchOrder: ""
        };
    }


    componentDidMount() {
        axios.get('http://localhost:5000/order/')
            .then(response => {
                this.setState({ order: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    updateOrderStatus(id) {
        const order = {
            orderStatus: 'Order Processing'
        }

        axios.put('http://localhost:5000/order/status/' + id, order)
            .then(res => console.log(res.data));
        window.location = '/kitchenOrder';
    }

    readyForDelivery(id) {
        const order = {
            orderStatus: 'Delivery Ready'
        }

        axios.put('http://localhost:5000/order/status/' + id, order)
            .then(res => console.log(res.data));
        window.location = '/kitchenOrder';
    }


    orderList() {
        return this.state.order.map(currentorder => {
            return <Order order={currentorder} updateOrderStatus={this.updateOrderStatus} readyForDelivery={this.readyForDelivery} key={currentorder._id} />
            // return <Order order = {currentorder} readyForDelivery = {this.readyForDelivery} key = {currentorder._id}/>;
        })
    }

    searchOrderList() {
        return this.state.order.map((currentorder) => {
            if (
                this.state.searchOrder ==
                currentorder.customer
            ) {
                return (
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                        <td className='px-6 py-4'>{currentorder.customer}</td>
                        <td className='px-6 py-4'>{currentorder.item1}</td>
                        <td className='px-6 py-4'>{currentorder.quantity1}</td>
                        <td className='px-6 py-4'>{currentorder.item2}</td>
                        <td className='px-6 py-4'>{currentorder.quantity2}</td>
                        <td className='px-6 py-4'>{currentorder.item3}</td>
                        <td className='px-6 py-4'>{currentorder.quantity3}</td>
                        <td className='px-6 py-4'>{currentorder.orderFor}</td>
                        <td className='px-6 py-4'>{currentorder.deliveryAddress}</td>
                        <td className='px-6 py-4'>{currentorder.amount}</td>
                        <td className='px-6 py-4'>{currentorder.orderStatus}</td>
                        <td style={{ width: "20%" }}>
                            {
                                <button
                                    onClick={() => {
                                        //Delete the selected record
                                        axios
                                            .put(
                                                "http://localhost:5000/order/status" + currentorder._id
                                            )
                                            .then(() => {
                                                alert("Order Status Update Success");
                                                //Get data again after delete
                                                axios
                                                    .get("http://localhost:5000/order")
                                                    .then((res) => {
                                                        console.log(res.data);
                                                        this.setState({
                                                            order: res.data,
                                                        });
                                                    })
                                                    .catch((err) => console.log(err));
                                            })
                                            .catch((err) => {
                                                alert(err);
                                            });
                                    }}>
                                    Order Accepted
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
                                            <h3>Kitchen Order Details</h3>
                                        </th>
                                        <td className='flex justify-end gap-2'>
                                            <div class="flex justify-end sm:flex-row sm:text-left sm:justify-end gap-2">
                                                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                                    <Link className='font-semibold text-white no-underline' to={"/creatOrder"}>
                                                        Add Order
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
                                                    placeholder="Search by Customer Name"
                                                    aria-label="Search"
                                                    onChange={(e) => {
                                                        this.setState({
                                                            searchOrder: e.target.value
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
                                            <th className="p-2 border-black tbhead ">Customer</th>
                                            <th className='p-2 tbhead'>Item 1</th>
                                            <th className='p-2 tbhead'>Quantity 1</th>
                                            <th className='p-2 tbhead'>Item 2</th>
                                            <th className='p-2 tbhead'>Quantity 2</th>
                                            <th className='p-2 tbhead'>Item 3</th>
                                            <th className='p-2 tbhead'>Quantity 3</th>
                                            <th className='p-2 tbhead'>Order For</th>
                                            <th className='p-2 tbhead'>Delivery Address</th>
                                            <th className='p-2 tbhead'>Amount</th>
                                            <th className='p-2 tbhead'>Order Status</th>
                                            <th className='p-2 text-center tbhead'>Kitchen Accepted</th>
                                            <th className='p-2 text-center tbhead'>Kitchen Completed</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {this.state.searchOrder == "" ? this.orderList() : this.searchOrderList()}
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

