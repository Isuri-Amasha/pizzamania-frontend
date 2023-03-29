import React, {Component} from 'react';
import axios from 'axios';
import * as Swal from "sweetalert2";

export class EditEmployee extends Component {

    constructor(props){
        super(props);

        this.onChangeempID = this.onChangeempID.bind(this);
        this.onChangefullName = this.onChangefullName.bind(this);
        this.onChangecontactNo = this.onChangecontactNo.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangeaddress = this.onChangeaddress.bind(this);
        this.onChangeposition = this.onChangeposition.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            empID : '',
            fullName : '',
            contactNo : '',
            email : '',
            address : '',
            position : ''
            
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/employee/' +this.state._id)
        .then(response => {
            this.setState({
            empID : response.data.empID,
            fullName : response.data.fullName,
            contactNo : response.data.contactNo,
            email : response.data.email,
            address : response.data.address,
            position : response.data.position,
            
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        }

        onChangeempID(e){
            this.setState({
                empID : e.target.value
            });
        }

        onChangefullName(e){
            this.setState({
                fullName : e.target.value
            });
        }
    
        onChangecontactNo(e){
            this.setState({
                contactNo : e.target.value
            });
        }
    
        
    
        onChangeemail(e){
            this.setState({
                email : e.target.value
            });
        }
    
        onChangeaddress(e){
            this.setState({
                address : e.target.value
            });
        }
    
        onChangeposition(e){
            this.setState({
            position : e.target.value
            });
        }

    onSubmit(e){
        e.preventDefault();

        const employee = {
            empID : this.state.empID,
            fullName : this.state.fullName,
            contactNo : this.state.contactNo,
            email : this.state.email,
            address : this.state.address,
            position : this.state.position,
            
            
        
        }

        console.log(employee);
        

        axios.put('http://localhost:5000/employee/' +this.props.match.params.id, employee)
        .then(res => {
            console.log(res);

            if (res.status === 200) {
                this.refreshTable();
                this.props.close();

                Swal.fire({
                    icon: 'success',
                    title: 'Successful',
                    text: 'Classroom details has been updated!!',
                    background: '#fff',
                    confirmButtonColor: '#333533',
                    iconColor: '#60e004'
                })

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'There was an error updating!',
                    background: '#fff',
                    confirmButtonColor: '#333533',
                    iconColor: '#e00404'
                })
            }
        })

}
    

    render() {
        return (
            <div>
                
                <div className = "formdiv">
               
            <h3 className = "billheading">Update Employee</h3>

            
            <form onSubmit = {this.onSubmit}>
                    <div className = "form-group">
                        <label>Employee ID : </label>
                        <input type = "text"
                        required
                        className = "form-control"
                        value = {this.state.empID}
                        
                        />
                    </div>

                    <div className = "form-group">
                        <label>Full Name : </label>
                        <input type = "text"
                        required
                        className = "form-control"
                        value = {this.state.fullName}
                        onChange = {this.onChangefullName}
                        />
                    </div>

                    <div className = "form-group">
                        <label>Contact Number : </label>
                        <input type = "text"
                        required
                        className = "form-control"
                        value = {this.state.contactNo}
                        onChange = {this.onChangecontactNo}
                        />
                    </div>
                    
                    <div className = "form-group">
                        <label>Email : </label>
                        <input type = "text"
                        required
                        className = "form-control"
                        value = {this.state.email}
                        onChange = {this.onChangeemail}
                        />
                    </div>
                    <div className = "form-group">
                        <label>Address : </label>
                        <input type = "text"
                        required
                        className = "form-control"
                        value = {this.state.address}
                        onChange = {this.onChangeaddress}
                        />
                    </div>
                    <div className = "form-group">
                        <label>Position : </label>
                        <input type = "text"
                        required
                        className = "form-control"
                        value = {this.state.position}
                        onChange = {this.onChangeposition}
                        />
                    </div>
                   


                    <div className = "form-group">
                        <input type = "submit" value = "Edit Employee"  />
                    </div>
                </form>

                
            </div>
            
                </div>
        )
    }
}