import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Order = props => (
    <tr>
        {/* <td>{props.employee._id}</td> */}
        <td>{props.order.customer}</td>
        <td>{props.order.item1}</td>
        <td>{props.order.quantity1}</td>
        <td>{props.order.item2}</td>
        <td>{props.order.quantity2}</td>
        <td>{props.order.item3}</td>
        <td>{props.order.quantity3}</td>
        <td>{props.order.orderFor}</td>
        <td>{props.order.deliveryAddress}</td>
        <td>{props.order.amount}</td>
        <td>{props.order.orderStatus}</td>
       
        <td>
            <button ><Link to = {"/editOrder/"+props.order._id } >Edit</Link></button>
            <button  onClick ={() => {props.deleteOrder(props.order._id)}}>Delete</button>
        </td>
    </tr>
)

export class OrderList extends Component {

    constructor(props){
        super(props);

        this.deleteOrder = this.deleteOrder.bind(this);

        this.state = {order : [],
        searchOrder : ""};
    }


    componentDidMount() {
        axios.get('http://localhost:5000/order/')
        .then(response => {
            this.setState({ order : response.data })
        })
        .catch((error) => {
            console.log(error);
        })
        }

        deleteOrder(id){
            axios.delete('http://localhost:5000/order/' +id)
            .then(res => console.log(res.data));
            this.setState({
                order : this.state.order.filter(el => el._id !== id)
            })
        }

        orderList(){
            return this.state.order.map(currentorder => {
                return <Order order = {currentorder} deleteOrder = {this.deleteOrder} key = {currentorder._id}/>;
            })
        }

        searchOrderList(){

            return this.state.order.map((currentorder) => {
                if (
                    this.state.searchOrder ==
                    currentorder.customer
                ){
                    return (
                        <tr>
                        <td style={{ width: "10%" }}>{currentorder.customer}</td>
                        <td style={{ width: "10%" }}>{currentorder.item1}</td>
                        <td style={{ width: "10%" }}>{currentorder.quantity1}</td>
                        <td style={{ width: "10%" }}>{currentorder.item2}</td>
                        <td style={{ width: "10%" }}>{currentorder.quantity2}</td>
                        <td style={{ width: "10%" }}>{currentorder.item3}</td>
                        <td style={{ width: "10%" }}>{currentorder.quantity3}</td>
                        <td style={{ width: "10%" }}>{currentorder.orderFor}</td>
                        <td style={{ width: "10%" }}>{currentorder.deliveryAddress}</td>
                        <td style={{ width: "10%" }}>{currentorder.amount}</td>
                        <td style={{ width: "10%" }}>{currentorder.orderStatus}</td>
                        
                        <td style={{ width: "20%" }}>
                            {
                            <button >
                                <Link
                                to={"/editOrder/" + currentorder._id}
                                
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
                                    "http://localhost:5000/order/" + currentorder._id
                                    )
                                    .then(() => {
                                    alert("Delete Success");
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
            <div >
            
            
            
                <table >
                    <tr>
                        <th><h3>Order Details</h3></th>
                        <td><button ><Link to = {"/creatOrder" }>Add Order</Link></button>
                        <button>
                       
                        <Link to = {"/" }>Download Report Here</Link></button></td>
                    </tr>

                    <div >
                    <input style={{ width: "250px", marginTop:"10px"}}
                    class="form-control"
                    type="text"
                    placeholder="Search by Customer"
                    aria-label="Search"
                    onChange={(e) => {
                        this.setState({
                        searchOrder: e.target.value
                        });
                    }}
                    />
            </div>
                </table>
            
            
                
                <table >
                <thead >
                    <tr>
                        <th className = "tbhead">Employee ID</th>
                        <th className = "tbhead">Employee Name</th>
                        <th className = "tbhead">Contact Number</th>
                        <th className = "tbhead">Email</th>
                        <th className = "tbhead">Address</th>
                        <th className = "tbhead">Position</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    { this.state.searchEmployee == "" ? this.employeeList() : this.searchEmployeeList() }
                </tbody>
            </table>
           
           
        </div>
        )
    }
}

