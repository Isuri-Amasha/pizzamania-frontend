import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Inventory = props => (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
        {/* <td>{props.employee._id}</td> */}
        <td className='px-6 py-4'>{props.inventory.productID}</td>
        <td className='px-6 py-4'>{props.inventory.productName}</td>
        <td className='px-6 py-4'>{props.inventory.productCategory}</td>
        <td className='px-6 py-4'>{props.inventory.quantity}</td>
        <td className='px-6 py-4'>
            <div class="flex justify-center">
                <button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-indigo-500 rounded-md hover:bg-blue-200'>
                    <Link className='text-white no-underline' to={"/orderInventory/" + props.inventory._id}>
                        <div class=" grid grid-cols-2 gap-1 hover:text-black duration-100">
                            <div class="">
                                <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                </svg>
                            </div>
                            <div class="">
                                Order
                            </div>
                        </div>
                    </Link>
                </button>
            </div>
            {/* <button  onClick ={() => {props.orderInventory(props.inventory._id)}}>Order</button> */}
        </td>
    </tr>
)

export class InventoryListForOrder extends Component {

    constructor(props) {
        super(props);

        this.orderInventory = this.orderInventory.bind(this);

        this.state = {
            inventory: [],
            searchInventory: ""
        };
    }


    componentDidMount() {
        axios.get('http://localhost:5000/inventory/')
            .then(response => {
                this.setState({ inventory: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    orderInventory(id) {
        // axios.delete('http://localhost:5000/inventory/' +id)
        // .then(res => console.log(res.data));
        this.setState({
            id: id
        })
    }

    inventoryList() {
        return this.state.inventory.map(currentinventory => {
            return <Inventory inventory={currentinventory} orderInventory={this.orderInventory} key={currentinventory._id} />;
        })
    }

    searchInventoryList() {

        return this.state.inventory.map((currentinventory) => {
            if (
                this.state.searchInventory ==
                currentinventory.productID
            ) {
                return (
                    <tr>

                        <td style={{ width: "10%" }}>{currentinventory.productID}</td>
                        <td style={{ width: "10%" }}>{currentinventory.productName}</td>
                        <td style={{ width: "10%" }}>{currentinventory.productCategory}</td>
                        <td style={{ width: "10%" }}>{currentinventory.quantity}</td>


                        <td style={{ width: "20%" }}>
                            {
                                <button >
                                    <Link
                                        to={"/editInventory/" + currentinventory._id}

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
                                                "http://localhost:5000/inventory/" + currentinventory._id
                                            )
                                            .then(() => {
                                                alert("Delete Success");
                                                //Get data again after delete
                                                axios
                                                    .get("http://localhost:5000/inventory")
                                                    .then((res) => {
                                                        console.log(res.data);
                                                        this.setState({
                                                            inventory: res.data,
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
                                            <h3>Inventory Details</h3>
                                        </th>
                                        <td className='flex justify-end gap-2'>
                                            <div class="flex justify-end sm:flex-row sm:text-left sm:justify-end">
                                                <input
                                                    className="form-control rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                                                    type="text"
                                                    placeholder="Search by Product ID"
                                                    aria-label="Search"
                                                    onChange={(e) => {
                                                        this.setState({
                                                            searchInventory: e.target.value
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
                                            <th className="p-2 border-black tbhead ">Product ID</th>
                                            <th className="p-2 tbhead">Product Name</th>
                                            <th className="p-2 tbhead">productCategory</th>
                                            <th className="p-2 tbhead">Quantity</th>
                                            <th className="p-2 text-center tbhead">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {this.state.searchInventory == "" ? this.inventoryList() : this.searchInventoryList()}
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

