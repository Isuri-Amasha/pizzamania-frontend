import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Customer = props => (
    <tr>
       
        <td>{props.customer.fullName}</td>
        <td>{props.customer.email}</td>
        <td>{props.customer.contactNo}</td>
        <td>{props.customer.address}</td>
       
       
        <td>
            <button ><Link to = {"/editCustomer/"+props.customer._id } >Edit</Link></button>
            <button  onClick ={() => {props.deleteCustomer(props.customer._id)}}>Delete</button>
        </td>
    </tr>
)

export class CustomerList extends Component {

    constructor(props){
        super(props);

        this.deleteCustomer = this.deleteCustomer.bind(this);

        this.state = {customer : [],
            searchCustomer : ""};
    }


    componentDidMount() {
        axios.get('http://localhost:5000/customer/')
        .then(response => {
            this.setState({ customer : response.data })
        })
        .catch((error) => {
            console.log(error);
        })
        }

        deleteCustomer(id){
            axios.delete('http://localhost:5000/customer/' +id)
            .then(res => console.log(res.data));
            this.setState({
                customer : this.state.customer.filter(el => el._id !== id)
            })
        }

        customerList(){
            return this.state.customer.map(currentcustomer => {
                return <Customer customer = {currentcustomer} deleteCustomer = {this.deleteCustomer} key = {currentcustomer._id}/>;
            })
        }

        searchCustomerList(){

            return this.state.customer.map((currentcustomer) => {
                if (
                    this.state.searchCustomer ==
                    currentcustomer.fullName
                ){
                    return (
                        <tr>
                       
                        <td style={{ width: "10%" }}>{currentcustomer.fullName}</td>
                        <td style={{ width: "10%" }}>{currentcustomer.email}</td>
                        <td style={{ width: "10%" }}>{currentcustomer.contactNo}</td>
                        <td style={{ width: "10%" }}>{currentcustomer.address}</td>
                        
                        
                        <td style={{ width: "20%" }}>
                            {
                            <button >
                                <Link
                                to={"/editCustomer/" + currentcustomer._id}
                                
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
                                    "http://localhost:5000/customer/" + currentcustomer._id
                                    )
                                    .then(() => {
                                    alert("Delete Success");
                                      //Get data again after delete
                                    axios
                                        .get("http://localhost:5000/customer")
                                        .then((res) => {
                                        console.log(res.data);
                                        this.setState({
                                            customer: res.data,
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
                        <th><h3>Customer Details</h3></th>
                        <td><button ><Link to = {"/creatCustomer" }>Add Customer</Link></button>
                        <button>
                       
                        <Link to = {"/" }>Download Report Here</Link></button></td>
                    </tr>

                    <div >
                    <input style={{ width: "250px", marginTop:"10px"}}
                    class="form-control"
                    type="text"
                    placeholder="Search by Customet Name"
                    aria-label="Search"
                    onChange={(e) => {
                        this.setState({
                        searchCustomer: e.target.value
                        });
                    }}
                    />
            </div>
                </table>
            
            
                
                <table class="table table-bordered">
                <thead >
                    <tr>
                        
                        <th className = "tbhead">Customer Name</th>
                        <th className = "tbhead">Email</th>
                        <th className = "tbhead">Contact Number</th>
                        <th className = "tbhead">Address</th>
                        
                        
                        
                    </tr>
                </thead>
                <tbody>
                    { this.state.searchCustomer == "" ? this.customerList() : this.searchCustomerList() }
                </tbody>
            </table>
           
           
        </div>
        )
    }
}

