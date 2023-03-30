import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Inventory = props => (
    <tr>
        {/* <td>{props.employee._id}</td> */}
        <td>{props.inventory.productID}</td>
        <td>{props.inventory.productName}</td>
        <td>{props.inventory.productCategory}</td>
        <td>{props.inventory.quantity}</td>
       
       
        <td>
            <button ><Link to = {"/editInventory/"+props.inventory._id } >Edit</Link></button>
            <button  onClick ={() => {props.deleteInventory(props.inventory._id)}}>Delete</button>
        </td>
    </tr>
)

export class InventoryList extends Component {

    constructor(props){
        super(props);

        this.deleteInventory = this.deleteInventory.bind(this);

        this.state = {inventory : [],
            searchInventory : ""};
    }


    componentDidMount() {
        axios.get('http://localhost:5000/inventory/')
        .then(response => {
            this.setState({ inventory : response.data })
        })
        .catch((error) => {
            console.log(error);
        })
        }

        deleteInventory(id){
            axios.delete('http://localhost:5000/inventory/' +id)
            .then(res => console.log(res.data));
            this.setState({
                inventory : this.state.inventory.filter(el => el._id !== id)
            })
        }

        inventoryList(){
            return this.state.inventory.map(currentinventory => {
                return <Inventory inventory = {currentinventory} deleteInventory = {this.deleteInventory} key = {currentinventory._id}/>;
            })
        }

        searchInventoryList(){

            return this.state.inventory.map((currentinventory) => {
                if (
                    this.state.searchInventory ==
                    currentinventory.productID
                ){
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
            <div >
            
            
            
                <table >
                    <tr>
                        <th><h3>Inventory Details</h3></th>
                        <td><button ><Link to = {"/creatInventory" }>Add Inventory</Link></button>
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
                        searchInventory: e.target.value
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
                        <th className = "tbhead">Quantity</th>
                        
                        
                        
                    </tr>
                </thead>
                <tbody>
                    { this.state.searchInventory == "" ? this.inventoryList() : this.searchInventoryList() }
                </tbody>
            </table>
           
           
        </div>
        )
    }
}

