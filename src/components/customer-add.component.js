import React, {Component} from 'react';
import axios from 'axios';
import * as Swal from "sweetalert2";

// import { CardContent } from '@material-ui/core';
// import { Card } from '@material-ui/core';
//import './home.css'

export class CreateCustomer extends Component {

    
    constructor(props){
        super(props);

        this.onChangefullName = this.onChangefullName.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangecontactNo = this.onChangecontactNo.bind(this);
        this.onChangeaddress = this.onChangeaddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       

        this.state = {
            fullName : '',
            email : '',
            contactNo : '',
            address : ''
            
        }
    }

    onChangefullName(e){
        this.setState({
            fullName : e.target.value
        });
    }

    onChangeemail(e){
        this.setState({
            email : e.target.value
        });
    }

    onChangecontactNo(e){
        this.setState({
            contactNo : e.target.value
        });
    }

    onChangeaddress(e){
        this.setState({
            address : e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const customers = {
            fullName : this.state.fullName,
            email : this.state.email,
            contactNo : this.state.contactNo,
            address : this.state.address
        }

        console.log(customers);

        
        
        
        axios.post('http://localhost:5000/customer/', customers)
        // .then(res => console.log("success")).catch(err=>console.log(err));

        .then(res => {
            
            console.log(res);

            if (res.status === 200) {
                this.clearData();
                Swal.fire({
                    icon: 'success',
                    title: 'Successful',
                    text: 'Customer has been added!!',
                    background: '#fff',
                    confirmButtonColor: '#333533',
                    iconColor: '#60e004'
                })

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error in adding!',
                    background: '#fff',
                    confirmButtonColor: '#333533',
                    iconColor: '#e00404'
                })
            }
        })

        // window.location = '/';
        // }
        
        
    }

    clearData = () => {
        this.setState({
           
            fullName: '',
            email: '',
            contactNo: '',
            address: '',
            
        })
    }

    

    render() {
        return (
        <div>
            
            <h3 >Add Customer</h3>
        
                <form onSubmit = {this.onSubmit}>
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
                        <label>Email : </label>
                        <input type = "text"
                        required
                        className = "form-control"
                        value = {this.state.email}
                        onChange = {this.onChangeemail}
                        />
                      
                    </div>

                    <div className = "form-group">
                        <label>Contact : </label>
                        <input type = "text"
                        required
                        className = "form-control"
                        value = {this.state.contactNo}
                        onChange = {this.onChangecontactNo}
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
                        <input type = "submit" value = "Add Employee"  />
                    </div>

                  

                </form>


</div>

            

                

                
        )
    }
}