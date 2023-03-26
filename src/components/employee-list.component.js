import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Employee = props => (
    <tr>
        <td>{props.employee.empID}</td>
        <td>{props.employee.fullName}</td>
        <td>{props.employee.contactNo}</td>
        <td>{props.employee.email}</td>
        <td>{props.employee.address}</td>
        <td>{props.employee.position}</td>
       
        <td>
            <button ><Link to = {"/editemployee/"+props.employee._id } >Edit</Link></button><button  onClick ={() => {props.deleteEmployee(props.employee._id)}}>Delete</button>
        </td>
    </tr>
)

export default class EmployeeList extends Component {

    constructor(props){
        super(props);

        this.deleteEmployee = this.deleteEmployee.bind(this);

        this.state = {employee : [],
        searchEmployee : ""};
    }


    componentDidMount() {
        axios.get('http://localhost:5000/employee/')
        .then(response => {
            this.setState({ employee : response.data })
        })
        .catch((error) => {
            console.log(error);
        })
        }

        deleteEmployee(id){
            axios.delete('http://localhost:5000/employee/' +id)
            .then(res => console.log(res.data));
            this.setState({
                employee : this.state.employee.filter(el => el._id !== id)
            })
        }

        employeeList(){
            return this.state.employee.map(currentemployee => {
                return <Employee employee = {currentemployee} deleteEmployee = {this.deleteEmployee} key = {currentemployee._id}/>;
            })
        }

        searchEmployeeList(){

            return this.state.employee.map((currentemployee) => {
                if (
                    this.state.searchEmployee ==
                    currentemployee.empID
                ){
                    return (
                        <tr>
                        <td style={{ width: "10%" }}>{currentemployee.empID}</td>
                        <td style={{ width: "10%" }}>{currentemployee.fullName}</td>
                        <td style={{ width: "10%" }}>{currentemployee.contactNo}</td>
                        <td style={{ width: "10%" }}>{currentemployee.email}</td>
                        <td style={{ width: "10%" }}>{currentemployee.address}</td>
                        <td style={{ width: "10%" }}>{currentemployee.position}</td>
                        
                        <td style={{ width: "20%" }}>
                            {
                            <button >
                                <Link
                                to={"/editemployee/" + currentemployee._id}
                                
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
                                    "http://localhost:5000/employee/" + currentemployee._id
                                    )
                                    .then(() => {
                                    alert("Delete Success");
                                      //Get data again after delete
                                    axios
                                        .get("http://localhost:5000/employee")
                                        .then((res) => {
                                        console.log(res.data);
                                        this.setState({
                                            employee: res.data,
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
                        <th><h3>Employee Details</h3></th>
                        <td><button ><Link to = {"/" } >Add Employee</Link></button>
                        <button  
                        // onClick={() => this.exportEmployee()}
                        >Download Report Here</button></td>
                    </tr>

                    <div >
                    <input style={{ width: "250px", marginTop:"10px"}}
                    class="form-control"
                    type="text"
                    placeholder="Search by Employee ID"
                    aria-label="Search"
                    onChange={(e) => {
                        this.setState({
                        searchEmployee: e.target.value
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