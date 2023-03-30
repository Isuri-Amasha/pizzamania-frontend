import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const InventoryOrder = props => (
    <tr>
        {/* <td>{props.employee._id}</td> */}
        <td>{props.inventoryorder.productID}</td>
        <td>{props.inventoryorder.productName}</td>
        <td>{props.inventoryorder.productCategory}</td>
        <td>{props.inventoryorder.availableQuantity}</td>
        <td>{props.inventoryorder.requestedQuantity}</td>
       
        <td>
            <button ><Link to = {"/editInventoryOrder/"+props.inventoryorder._id } >Edit</Link></button>
            <button  onClick ={() => {props.deleteInventoryOrder(props.inventoryorder._id)}}>Delete</button>
        </td>
    </tr>
)

export class InventoryOrderList extends Component {

    constructor(props){
        super(props);

        this.deleteInventoryOrder = this.deleteInventoryOrder.bind(this);

        this.state = {inventoryorder : [],
            searchInventoryOrder : ""};
    }


    componentDidMount() {
        axios.get('http://localhost:5000/inventoryOrders/')
        .then(response => {
            this.setState({ inventoryorder : response.data })
        })
        .catch((error) => {
            console.log(error);
        })
        }

        deleteInventoryOrder(id){
            axios.delete('http://localhost:5000/inventoryOrders/' +id)
            .then(res => console.log(res.data));
            this.setState({
                inventoryorder : this.state.inventoryorder.filter(el => el._id !== id)
            })
        }

        inventoryorderList(){
            return this.state.inventoryorder.map(currentinventoryorder => {
                return <InventoryOrder inventoryorder = {currentinventoryorder} deleteInventoryOrder = {this.deleteInventoryOrder} key = {currentinventoryorder._id}/>;
            })
        }

        searchInventoryOrderList(){

            return this.state.inventoryorder.map((currentinventoryorder) => {
                if (
                    this.state.searchInventoryOrder ==
                    currentinventoryorder.productID
                ){
                    return (
                        <tr>
                       
                        <td style={{ width: "10%" }}>{currentinventoryorder.productID}</td>
                        <td style={{ width: "10%" }}>{currentinventoryorder.productName}</td>
                        <td style={{ width: "10%" }}>{currentinventoryorder.productCategory}</td>
                        <td style={{ width: "10%" }}>{currentinventoryorder.availableQuantity}</td>
                        <td style={{ width: "10%" }}>{currentinventoryorder.requestedQuantity}</td>
                        
                        <td style={{ width: "20%" }}>
                            {
                            <button >
                                <Link
                                to={"/editInventoryOrder/" + currentinventoryorder._id}
                                
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
                                    "http://localhost:5000/inventoryOrders/" + currentinventoryorder._id
                                    )
                                    .then(() => {
                                    alert("Delete Success");
                                      //Get data again after delete
                                    axios
                                        .get("http://localhost:5000/inventoryOrders")
                                        .then((res) => {
                                        console.log(res.data);
                                        this.setState({
                                            inventoryorder: res.data,
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
                        <th><h3>Inventory Order Details</h3></th>
                        <td><button ><Link to = {"/creatInventoryOrder" }>Order Inventory</Link></button>
                        <button>
                       
                        <Link to = {"/" }>Download Report Here</Link></button></td>
                    </tr>

                    <div >
                    <input style={{ width: "250px", marginTop:"10px"}}
                    class="form-control"
                    type="text"
                    placeholder="Search by Product ID"
                    aria-label="Search"
                    onChange={(e) => {
                        this.setState({
                        searchInventoryOrder: e.target.value
                        });
                    }}
                    />
            </div>
                </table>
            
            
                
                <table class="table table-bordered">
                <thead >
                    <tr>
                        
                        <th className = "tbhead">Product ID</th>
                        <th className = "tbhead">Product Name</th>
                        <th className = "tbhead">productCategory</th>
                        <th className = "tbhead">Available Quantity</th>
                        <th className = "tbhead">Requested Quantity</th> 
                        
                        
                    </tr>
                </thead>
                <tbody>
                    { this.state.searchInventoryOrder == "" ? this.inventoryorderList() : this.searchInventoryOrderList() }
                </tbody>
            </table>
           
           
        </div>
        )
    }
}

