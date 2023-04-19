import React, { Component } from 'react';
import axios from 'axios';
import * as Swal from "sweetalert2";



export class CreateOrder extends Component {
    constructor(props) {
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
        // this.onChangeorderStatus = this.onChangeorderStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            product: [],
            customer: '',
            item1: '',
            quantity1: '',
            item2: '',
            quantity2: '',
            item3: '',
            quantity3: '',
            orderFor: '',
            deliveryAddress: '',
            amount: '',
            orderStatus: '',
            price: ''

        }
    }

    onChangecustomer(e) {
        this.setState({
            customer: e.target.value
        });
    }

    onChangeitem1(e) {
        this.setState({
            item1: e.target.value
        });
    }

    onChangequantity1(e) {
        this.setState({
            quantity1: e.target.value
        });
    }

    onChangeitem2(e) {
        this.setState({
            item2: e.target.value
        });
    }

    onChangequantity2(e) {
        this.setState({
            quantity2: e.target.value
        });
    }

    onChangeitem3(e) {
        this.setState({
            item3: e.target.value
        });
    }

    onChangequantity3(e) {
        this.setState({
            quantity3: e.target.value
        });
    }

    onChangeorderFor(e) {
        this.setState({
            orderFor: e.target.value
        });
    }

    onChangedeliveryAddress(e) {
        this.setState({
            deliveryAddress: e.target.value
        });
    }

    onChangeamount(e) {
        this.setState({
            amount: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const product = [];
        const price = 0;

        const order = {
            customer: this.state.customer,
            item1: this.state.item1,
            quantity1: this.state.quantity1,
            item2: this.state.item2,
            quantity2: this.state.quantity2,
            item3: this.state.item3,
            quantity3: this.state.quantity3,
            orderFor: this.state.orderFor,
            deliveryAddress: this.state.deliveryAddress,
            amount: this.state.amount,
            orderStatus: 'Order Taken',
        }

        console.log(order);

        if(this.state.customer.length < 6){
            this.setState({cusError : "Customer name is too short."})
        }
        else if(this.state.item1.length < 3){
            this.setState({item1Error : "Item name is too short."})
        }
        else if(this.state.quantity1 == 0){
            this.setState({quantity1Error : "Invalid Quantity."})
        }else if(this.state.orderFor.length < 5){
            this.setState({orderForError : "Order For is too short."})
        }
        else{
        axios.post('http://localhost:5000/order/', order)
         
            .then(res => {

                console.log(res);

                if (res.status === 200) {
                    this.clearData();
                    Swal.fire({
                        icon: 'success',
                        title: 'Successful',
                        text: 'Order has been added!!',
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

        }

    }

    clearData = () => {
        this.setState({
            customer: '',
            item1: '',
            quantity1: '',
            item2: '',
            quantity2: '',
            item3: '',
            quantity3: '',
            orderFor: '',
            deliveryAddress: '',
            amount: '',
            
        })
    }

    render() {
        return (
            <div className="flex flex-col px-5 ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full sm:px-6 lg:px-8">
                        <div className='items-center overflow-hidden'>
                            <div className=''>
                                <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">
                                    <form className='px-12 py-6 border-2 rounded-lg shadow-md bg-gray-50' onSubmit={this.onSubmit}>
                                        <div class="">
                                            <p className='text-4xl font-semibold text-black uppercase drop-shadow-lg'>
                                                Add Order
                                            </p>
                                            <div className="grid grid-cols-1 gap-4 form-group">
                                                <div class="">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Customer
                                                    </label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.customer}
                                                        onChange={this.onChangecustomer}
                                                    /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.cusError}</p>
                                                </div>

                                            </div>

                                            <div className="grid grid-cols-2 gap-4 form-group">
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Item 1
                                                    </label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.item1}
                                                        onChange={this.onChangeitem1}
                                                    /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.item1Error}</p>
                                                </div>
                                                <div class="">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >
                                                        Quantity 1
                                                    </label>
                                                    <input type="number"
                                                        required
                                                        className="form-control"
                                                        value={this.state.quantity1}
                                                        onChange={this.onChangequantity1}
                                                    /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.quantity1Error}</p>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 form-group">
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Item 2
                                                    </label>
                                                    <input type="text"
                                                        className="form-control"
                                                        value={this.state.item2}
                                                        onChange={this.onChangeitem2}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Quantity 2
                                                    </label>
                                                    <input type="number"
                                                        className="form-control"
                                                        value={this.state.quantity2}
                                                        onChange={this.onChangequantity2}
                                                    /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.quantity2Error}</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 form-group">

                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Item 3
                                                    </label>
                                                    <input type="text"
                                                        className="form-control"
                                                        value={this.state.item3}
                                                        onChange={this.onChangeitem3}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Quantity 3
                                                    </label>
                                                    <input type="number"
                                                        className="form-control"
                                                        value={this.state.quantity3}
                                                        onChange={this.onChangequantity3}
                                                    /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.quantity3Error}</p>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Order For
                                                </label>
                                                <input type="text"
                                                    required
                                                    className="form-control"
                                                    value={this.state.orderFor}
                                                    onChange={this.onChangeorderFor}
                                                /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.orderForError}</p>
                                            </div>
                                            <div className="form-group">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Delivery Address
                                                </label>
                                                <textarea
                                                    type="text"
                                                    className="form-control"
                                                    value={this.state.deliveryAddress}
                                                    onChange={this.onChangedeliveryAddress}
                                                /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.deliveryAddressError}</p>
                                            </div>
                                            <div className="form-group">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Amount
                                                </label>
                                                <input type="number"
                                                    required
                                                    className="form-control"
                                                    value={this.state.amount}
                                                    onChange={this.onChangeamount}
                                                />
                                            </div>
                                            <div className="text-center align-middle form-group">
                                                <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Add Order" />
                                            </div>
                                        </div>
                                    </form>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}