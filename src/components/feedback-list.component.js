import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Feedback = props => (
    <tr>
       
        <td>{props.feedback.feedback}</td>
        <td>{props.feedback.userContact}</td>
      
        <td>{props.feedback.empID}</td>
        
       
       
        <td>
            <button ><Link to = {"/editFeedback/"+props.feedback._id } >Edit</Link></button>
            <button  onClick ={() => {props.deleteFeedback(props.feedback._id)}}>Delete</button>
        </td>
    </tr>
)

export class FeedbackList extends Component {

    constructor(props){
        super(props);

        this.deleteFeedback = this.deleteFeedback.bind(this);
        

        this.state = {feedback : [], user : [],
            searchFeedback : ""};
    }


    componentDidMount() {
        axios.get('http://localhost:5000/feedback/')
        .then(response => {
            this.setState({ feedback : response.data })
        })
        .catch((error) => {
            console.log(error);
        })
        }

        deleteFeedback(id){
            axios.delete('http://localhost:5000/feedback/' +id)
            .then(res => console.log(res.data));
            this.setState({
                feedback : this.state.feedback.filter(el => el._id !== id)
            })
        }

        feedbackList(){
            return this.state.feedback.map(currentfeedback => {
                return <Feedback feedback = {currentfeedback} deleteFeedback = {this.deleteFeedback} key = {currentfeedback._id}/>;
            })
        }

        

        searchFeedbackList(){

            return this.state.feedback.map((currentfeedback) => {
                if (
                    this.state.searchFeedback ==
                    currentfeedback.feedback
                ){
                    return (
                        <tr>
                       
                        <td style={{ width: "10%" }}>{currentfeedback.feedback}</td>
                        <td style={{ width: "10%" }}>{currentfeedback.userContact}</td>
                        <td style={{ width: "10%" }}>{currentfeedback.empID}</td>
                        
                        
                        
                        <td style={{ width: "20%" }}>
                            {
                            <button >
                                <Link
                                to={"/editFeedback/" + currentfeedback._id}
                                
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
                                    "http://localhost:5000/feedback/" + currentfeedback._id
                                    )
                                    .then(() => {
                                    alert("Delete Success");
                                      //Get data again after delete
                                    axios
                                        .get("http://localhost:5000/feedback")
                                        .then((res) => {
                                        console.log(res.data);
                                        this.setState({
                                            feedback: res.data,
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
                        <th><h3>Feedback Details</h3></th>
                        <td><button ><Link to = {"/creatFeedback" }>Add Feedback</Link></button>
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
                        searchFeedback: e.target.value
                        });
                    }}
                    />
            </div>
                </table>
            
            
                
                <table class="table table-bordered">
                <thead >
                    <tr>
                        
                        <th className = "tbhead">Feedback</th>
                        <th className = "tbhead">Customer Contact</th>
                        <th className = "tbhead">Employee ID</th>
                       
                        
                        
                        
                    </tr>
                </thead>
                <tbody>
                    { this.state.searchFeedback == "" ? this.feedbackList() : this.searchFeedbackList() }
                </tbody>
            </table>
           
           
        </div>
        )
    }
}

