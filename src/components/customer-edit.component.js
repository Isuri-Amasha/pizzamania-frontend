import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import axios from 'axios';

// import { CardContent } from '@material-ui/core';
// import { Card } from '@material-ui/core';
//import './home.css'

export class EditCustomer extends Component {

    
    constructor(props){
        super(props);

        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeContactNo = this.onChangeContactNo.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            fullName : '',
            email : '',
            contactNo : '',
            address : ''
            
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/customer/&{id}`)
        .then(response => {
            this.setState({
            fullName : response.data.fullName,
            email : response.data.email,
            contactNo : response.data.contactNo,
            address : response.data.address,
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        }

    onChangeFullName(e){
        this.setState({
            fullName : e.target.value
        });
    }

    onChangeEmail(e){
        this.setState({
            email : e.target.value
        });
    }

    onChangeContactNo(e){
        this.setState({
            contactNo : e.target.value
        });
    }

    onChangeAddress(e){
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
            address : this.state.address,
        }

        console.log(customers);

        axios.put('http://localhost:5000/customers/' +this.props.match.params.id, customers)
        .then(res => console.log(res.data));

        window.location = '/customer';
    }

    render() {
        return (
            <div>
            
        <h3 className = "billheading">Edit Customer</h3>

        
            <form onSubmit = {this.onSubmit}>
                <div className = "form-group">
                    <label>Full Name : </label>
                    <input type = "text"
                    required
                    className = "form-control"
                    value = {this.state.fullName}
                    onChange = {this.onChangeFullName}
                    />
                </div>

                <div className = "form-group">
                    <label>Email : </label>
                    <input type = "text"
                    required
                    className = "form-control"
                    value = {this.state.email}
                    onChange = {this.onChangeEmail}
                    />
                </div>

                <div className = "form-group">
                    <label>Contact Number : </label>
                    <input type = "text"
                    required
                    className = "form-control"
                    value = {this.state.contactNo}
                    onChange = {this.onChangeContactNo}
                    />
                </div>

                <div className = "form-group">
                    <label>Address : </label>
                    <input type = "text"
                    required
                    className = "form-control"
                    value = {this.state.address}
                    onChange = {this.onChangeAddress}
                    />
                </div>

                <div className = "form-group">
                    <input type = "submit" value = "Edit Customer" />
                </div>
            </form>
            
            </div>
        )
    }
}