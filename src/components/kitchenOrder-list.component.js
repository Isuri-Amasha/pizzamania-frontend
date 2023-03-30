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
            
            <button  onClick ={() => {props.updateOrderStatus(props.order._id)}}>Order Accepted</button> 
            </td>
            <td>
            <button onClick ={() => {props.readyForDelivery(props.order._id)}}>Ready For Delivery</button>
            
        </td>
    </tr>
)

export class KitchenOrderList extends Component {

    constructor(props){
        super(props);

        this.updateOrderStatus = this.updateOrderStatus.bind(this);
        this.readyForDelivery = this.readyForDelivery.bind(this);
       

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

        updateOrderStatus(id){
            const order = {
                orderStatus : 'Order Processing'
            }

            axios.put('http://localhost:5000/order/status/' +id,order)
            .then(res => console.log(res.data));
            window.location = '/kitchenOrder';
        }

        readyForDelivery(id){
            const order = {
                orderStatus : 'Delivery Ready'
            }

            axios.put('http://localhost:5000/order/status/' +id,order)
            .then(res => console.log(res.data));
            window.location = '/kitchenOrder';
        }
       

        orderList(){
            return this.state.order.map(currentorder => {
                return <Order order = {currentorder} updateOrderStatus = {this.updateOrderStatus} readyForDelivery = {this.readyForDelivery} key = {currentorder._id}/>
                // return <Order order = {currentorder} readyForDelivery = {this.readyForDelivery} key = {currentorder._id}/>;
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
                                }}
                            >
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
            
            
                
                <table class="table table-bordered">
                <thead >
                    <tr>
                        <th className = "tbhead">Customer</th>
                        <th className = "tbhead">Item 1</th>
                        <th className = "tbhead">Quantity 1</th>
                        <th className = "tbhead">Item 2</th>
                        <th className = "tbhead">Quantity 2</th>
                        <th className = "tbhead">Item 3</th>
                        <th className = "tbhead">Quantity 3</th>
                        <th className = "tbhead">Order For</th>
                        <th className = "tbhead">Delivery Address</th>
                        <th className = "tbhead">Amount</th>
                        <th className = "tbhead">Order Status</th>
                        <th className = "tbhead">Kitchen Accepted</th>
                        <th className = "tbhead">Kitchen Completed</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    { this.state.searchOrder == "" ? this.orderList() : this.searchOrderList() }
                </tbody>
            </table>
           
           
        </div>
        )
    }
}

