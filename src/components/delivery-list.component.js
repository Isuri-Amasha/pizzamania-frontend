import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Delivery = props => (
    <tr>
        {/* <td>{props.employee._id}</td> */}
        <td>{props.delivery.orderId}</td>
        <td>{props.delivery.customer}</td>
        <td>{props.delivery.deliveryAddress}</td>
        <td>{props.delivery.amount}</td>
        <td>{props.delivery.orderStatus}</td>
        <td>{props.delivery.assignedEmp}</td>
       
        <td>
            <button ><Link to = {"/editDelivery/"+props.delivery._id } >Edit</Link></button>
            <button  onClick ={() => {props.deleteDelivery(props.delivery._id)}}>Delete</button>
        </td>
    </tr>
)

export class DeliveryList extends Component {

    constructor(props){
        super(props);

        this.deleteDelivery = this.deleteDelivery.bind(this);
        this.filterDeliveryReady = this.filterDeliveryReady.bind(this);

        this.state = {delivery : [],
        searchDelivery : "",
    filterReady : "Delivery Ready"};
    }


    componentDidMount() {
        axios.get('http://localhost:5000/delivery/')
        .then(response => {
            this.setState({ delivery : response.data })
        })
        .catch((error) => {
            console.log(error);
        })
        }

        deleteDelivery(id){
            axios.delete('http://localhost:5000/delivery/' +id)
            .then(res => console.log(res.data));
            this.setState({
                delivery : this.state.order.filter(el => el._id !== id)
            })
        }

        deliveryList(){
            return this.state.delivery.map(currentdelivery => {
                return <Delivery delivery = {currentdelivery} deleteDelivery = {this.deleteDelivery}  key = {currentdelivery._id}/>;
            })
        }

        searchDeliveryList(){

            return this.state.delivery.map((currentdelivery) => {
                if (
                    this.state.searchDelivery ==
                    currentdelivery.orderId
                ){
                    return (
                        <tr>
                        <td style={{ width: "10%" }}>{currentdelivery.orderId}</td>
                        <td style={{ width: "10%" }}>{currentdelivery.customer}</td>
                        <td style={{ width: "10%" }}>{currentdelivery.deliveryAddress}</td>
                        <td style={{ width: "10%" }}>{currentdelivery.amount}</td>
                        <td style={{ width: "10%" }}>{currentdelivery.orderStatus}</td>
                        <td style={{ width: "10%" }}>{currentdelivery.assignedEmp}</td>

                        <td style={{ width: "20%" }}>
                            {
                            <button >
                                <Link
                                to={"/editOrder/" + currentdelivery._id}
                                
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
                        </td>
                        </tr>
                    );
                }
            });
        }

        updateOrderStatus(id){
            const order = {
                orderStatus : 'Order Processing'
            }

            axios.put('http://localhost:5000/order/status/' +id,order)
            .then(res => console.log(res.data));
            window.location = '/kitchenOrder';
        }

        filterDeliveryReady(){


            return this.state.delivery.map((currentdelivery) => {
                if (
                    this.state.filterReady ===
                    currentdelivery.orderStatus
                ){
                    return (
                        <tr>
                        <td style={{ width: "10%" }}>{currentdelivery.orderId}</td>
                        <td style={{ width: "10%" }}>{currentdelivery.customer}</td>
                        <td style={{ width: "10%" }}>{currentdelivery.deliveryAddress}</td>
                        <td style={{ width: "10%" }}>{currentdelivery.amount}</td>
                        <td style={{ width: "10%" }}>{currentdelivery.orderStatus}</td>
                        <td style={{ width: "10%" }}>{currentdelivery.assignedEmp}</td>

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
                else{
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
            <div >
            
            
            
                <table >
                    <tr>
                        <th><h3>Delivery Details</h3></th>
                        <td><button ><Link to = {"/creatDelivery" }>Add Delivery Details</Link></button>
                        <button>
                       
                        <Link to = {"/" }>Download Report Here</Link></button></td>
                    </tr>

                    {/* <div >
                    <input style={{ width: "250px", marginTop:"10px"}}
                    class="form-control"
                    type="text"
                    placeholder="Search by Delivery details by Order ID"
                    aria-label="Search"
                    onChange={(e) => {
                        this.setState({
                        searchDelivery: e.target.value
                        });
                    }}
                    />
            </div> */}
                </table>
                <tr>
                        <th><input style={{ width: "250px", marginTop:"10px"}}
                    class="form-control"
                    type="text"
                    placeholder="Search by Delivery details by Order ID"
                    aria-label="Search"
                    onChange={(e) => {
                        this.setState({
                        searchDelivery: e.target.value
                        });
                    }}
                    /></th>
                        <td><button >Ready For Delivery</button>
                        <button onClick ={() => {this.filterDeliveryReady()}}>
                       
                        <Link to = {"/" }>Download Report Here</Link></button></td>
                    </tr>
                <table>

                </table>
            
            
                
                <table class="table table-bordered">
                <thead >
                    <tr>
                    <th className = "tbhead">Order Id</th>
                        <th className = "tbhead">Customer</th>
                       
                       
                        <th className = "tbhead">Delivery Address</th>
                        <th className = "tbhead">Amount</th>
                        <th className = "tbhead">Order Status</th>
                        <th className = "tbhead">Assigned Employee</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    { this.state.searchDelivery == "" ?  this.deliveryList() : this.searchDeliveryList()  }
                </tbody>
            </table>
           
           
        </div>
        )
    }
}

