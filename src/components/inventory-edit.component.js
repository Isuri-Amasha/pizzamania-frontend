import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import axios from 'axios';

// import { CardContent } from '@material-ui/core';
// import { Card } from '@material-ui/core';
//import './home.css'

export class EditInventory extends Component {

    
    constructor(props){
        super(props);

        this.onChangeproductID = this.onChangeproductID.bind(this);
        this.onChangeproductName = this.onChangeproductName.bind(this);
        this.onChangeproductCategory = this.onChangeproductCategory.bind(this);
        this.onChangequantity = this.onChangequantity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

       
        this.state = {
            productID : '',
            productName : '',
            productCategory : '',
            quantity : ''
            
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/product/&{id}`)
        .then(response => {
            this.setState({
            productID : response.data.productID,
            productName : response.data.productName,
            productCategory : response.data.productCategory,
            quantity : response.data.quantity,
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        }

        onChangeproductID(e){
            this.setState({
                productID : e.target.value
            });
        }
    
        onChangeproductName(e){
            this.setState({
                productName : e.target.value
            });
        }
    
        onChangeproductCategory(e){
            this.setState({
                productCategory : e.target.value
            });
        }
    
        onChangequantity(e){
            this.setState({
                quantity : e.target.value
            });
        }

    onSubmit(e){
        e.preventDefault();

        const inventory = {
            productID : this.state.productID,
            productName : this.state.productName,
            productCategory : this.state.productCategory,
            quantity : this.state.quantity
        }

        console.log(inventory);

        axios.put('http://localhost:5000/inventory/' +this.props.match.params.id, inventory)
        .then(res => console.log(res.data));

        window.location = '/inventory';
    }

    render() {
        return (
            <div>
            
        <h3 className = "billheading">Edit Inventory</h3>

        
            <form onSubmit = {this.onSubmit}>
                <div className = "form-group">
                    <label>Product ID : </label>
                    <input type = "text"
                    required
                    className = "form-control"
                    value = {this.state.productID}
                    onChange = {this.onChangeproductID}
                    />
                </div>

                <div className = "form-group">
                    <label>Product Name : </label>
                    <input type = "text"
                    required
                    className = "form-control"
                    value = {this.state.productName}
                    onChange = {this.onChangeproductName}
                    />
                </div>

                <div className = "form-group">
                    <label>Product Category : </label>
                    <input type = "text"
                    required
                    className = "form-control"
                    value = {this.state.productCategory}
                    onChange = {this.onChangeproductCategory}
                    />
                </div>

                <div className = "form-group">
                    <label>Quantity : </label>
                    <input type = "text"
                    required
                    className = "form-control"
                    value = {this.state.quantity}
                    onChange = {this.onChangequantity}
                    />
                </div>

                <div className = "form-group">
                    <input type = "submit" value = "Edit Inventory" />
                </div>
            </form>
            
            </div>
        )
    }
}