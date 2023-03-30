import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import axios from 'axios';

// import { CardContent } from '@material-ui/core';
// import { Card } from '@material-ui/core';


export class EditOrder extends Component {

    
    constructor(props){
        super(props);

        this.onChangecustomer = this.onChangecustomer.bind(this);
        this.onChangeitem1 = this.onChangeitem1.bind(this);
        this.onChangequantity1 = this.onChangequantity1.bind(this);
        this.onChangeitem2 = this.onChangeitem2.bind(this);
        this.onChangequantity2 = this.onChangequantity2.bind(this);
        this.onChangeitem3 = this.onChangeitem3.bind(this);
        this.onChangequantity3 = this.onChangequantity3.bind(this);
        this.onChangeorderFor = this.onChangeorderFor.bind(this);
        this.onChangedeliveryAddress = this.onChangedeliveryAddress.bind(this);
        this.onChangeamount = this.onChangeamount.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id:props.id,
            customer : '',
            item1 : '',
            quantity1 : '',
            item2 : '',
            quantity2 : '',
            item3 : '',
            quantity3:'',
            orderFor:'',
            deliveryAddress:'',
            amount:''
            
            
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/order/${id}')
        .then(response => {
            this.setState({
            customer : response.data.customer,
            item1 : response.data.item1,
            quantity1 : response.data.quantity1,
            item2 : response.data.item2,
            quantity2 : response.data.quantity2,
            item3 : response.data.item3,
            quantity3 : response.data.quantity3,
            orderFor : response.data.orderFor,
            deliveryAddress : response.data.deliveryAddress,
            amount : response.data.amount,
    
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        }

        onChangecustomer(e){
            this.setState({
                customer : e.target.value
            });
        }
    
        onChangeitem1(e){
            this.setState({
                item1 : e.target.value
            });
        }
    
        onChangequantity1(e){
            this.setState({
                quantity1 : e.target.value
            });
        }
    
        onChangeitem2(e){
            this.setState({
                item2 : e.target.value
            });
        }
    
        onChangequantity2(e){
            this.setState({
                quantity2 : e.target.value
            });
        }
    
        onChangeitem3(e){
            this.setState({
            item3 : e.target.value
            });
        }
    
        onChangequantity3(e){
            this.setState({
            quantity3 : e.target.value
            });
        }
    
        onChangeorderFor(e){
            this.setState({
                orderFor : e.target.value
            });
        }
    
        onChangedeliveryAddress(e){
            this.setState({
                deliveryAddress : e.target.value
            });
        }
    
        onChangeamount(e){
            this.setState({
            amount : e.target.value
            });
        }

    onSubmit(e){
        e.preventDefault();

        const order = {
            customer : this.state.customer,
            item1 : this.state.item1,
            quantity1 : this.state.quantity1,
            item2 : this.state.item2,
            quantity2 : this.state.quantity2,
            item3 : this.state.item3,
            quantity3 : this.state.quantity3,
            orderFor : this.state.orderFor,
            deliveryAddress : this.state.deliveryAddress,
            amount : this.state.amount,
            orderStatus : 'Order Taken',
        }

        console.log(order);

        axios.put('http://localhost:5000/order/' +this.props.match.params.id, order)
        .then(res => console.log(res.data));

        window.location = '/order';
    }

    render() {
        return (
            <div>
            
        <h3 className = "billheading">Edit Order</h3>

        
            <form onSubmit = {this.onSubmit}>
                <div className = "form-group">
                    <label>Customer : </label>
                    <input type = "text"
                    required
                    className = "form-control"
                    value = {this.state.customer}
                    onChange = {this.onChangecustomer}
                    />
                </div>

                <div className = "form-group">
                    <label>Item 1 : </label>
                    <input type = "text"
                    required
                    className = "form-control"
                    value = {this.state.item1}
                    onChange = {this.onChangeitem1}
                    />
                </div>

                <div className = "form-group">
                    <label>quantity1 : </label>
                    <input type = "text"
                    required
                    className = "form-control"
                    value = {this.state.quantity1}
                    onChange = {this.onChangequantity1}
                    />
                </div>

                <div className = "form-group">
                    <label>Item 2 : </label>
                    <input type = "text"
                    
                    className = "form-control"
                    value = {this.state.item2}
                    onChange = {this.onChangeitem2}
                    />
                </div>

                <div className = "form-group">
                    <label>quantity 2 : </label>
                    <input type = "text"
                    
                    className = "form-control"
                    value = {this.state.quantity2}
                    onChange = {this.onChangequantity2}
                    />
                </div>

                <div className = "form-group">
                    <label>Item 3 : </label>
                    <input type = "text"
                   
                    className = "form-control"
                    value = {this.state.item3}
                    onChange = {this.onChangeitem3}
                    />
                </div>

                <div className = "form-group">
                    <label>quantity 3 : </label>
                    <input type = "text"
                   
                    className = "form-control"
                    value = {this.state.quantity3}
                    onChange = {this.onChangequantity3}
                    />
                </div>

                <div className = "form-group">
                    <label>Order For : </label>
                    <input type = "text"
                    required
                    className = "form-control"
                    value = {this.state.orderFor}
                    onChange = {this.onChangeorderFor}
                    />
                </div>

                <div className = "form-group">
                    <label>Delivery Address : </label>
                    <input type = "text"
                    required
                    className = "form-control"
                    value = {this.state.deliveryAddress}
                    onChange = {this.onChangedeliveryAddress}
                    />
                </div>

                <div className = "form-group">
                    <label>Amount : </label>
                    <input type = "text"
                    required
                    className = "form-control"
                    value = {this.state.amount}
                    onChange = {this.onChangeamount}
                    />
                </div>

                
                <div className = "form-group">
                    <input type = "submit" value = "Edit Order" />
                </div>
            </form>
            
            </div>
        )
    }
}