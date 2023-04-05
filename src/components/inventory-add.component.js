import React, { Component } from 'react';
import axios from 'axios';
import * as Swal from "sweetalert2";



export class CreateInventory extends Component {
    constructor(props) {
        super(props);
        this.onChangeproductID = this.onChangeproductID.bind(this);
        this.onChangeproductName = this.onChangeproductName.bind(this);
        this.onChangeproductCategory = this.onChangeproductCategory.bind(this);
        this.onChangequantity = this.onChangequantity.bind(this);
        // this.onChangeorderStatus = this.onChangeorderStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            productID: '',
            productName: '',
            productCategory: '',
            quantity: ''
        }
    }

    onChangeproductID(e) {
        this.setState({
            productID: e.target.value
        });
    }

    onChangeproductName(e) {
        this.setState({
            productName: e.target.value
        });
    }

    onChangeproductCategory(e) {
        this.setState({
            productCategory: e.target.value
        });
    }

    onChangequantity(e) {
        this.setState({
            quantity: e.target.value
        });
    }

    // onChangeorderStatus(e){
    //     this.setState({
    //     orderStatus : e.target.value
    //     });
    // }


    // demoClicked(){
    //     this.setState({
    //         fullName : "Gihan Perera",
    //         nic : "931524475V",
    //         empID : 32984,
    //         dob : new Date(),
    //         designation : "Labour",
    //         section : "Equipment",
    //         address : "Gampaha",
    //         contactNo : 77564213,
    //         emergency : 76124321,


    //     })
    // }

    onSubmit(e) {
        e.preventDefault();

        const inventory = {
            productID: this.state.productID,
            productName: this.state.productName,
            productCategory: this.state.productCategory,
            quantity: this.state.quantity
        }

        console.log(inventory);

        // if(this.state.empID.length < 0){
        //     this.setState({empIDError : "Employee ID should be longer than 0 characters."})
        // }
        // if(this.state.fullName.length < 6){
        //     this.setState({nameError : "Name should be longer than 6 characters."})
        // }
        // if(this.state.contactNo.length != 10){
        //     this.setState({contactNoError : "Contact Number is invalid."})
        // }

        // else if(this.state.fullName.length >= 10  && this.state.empID.length == 4)
        // {
        axios.post('http://localhost:5000/inventory/', inventory)
            // .then(res => console.log("success")).catch(err=>console.log(err));

            .then(res => {
                console.log(res);

                if (res.status === 200) {
                    this.clearData();
                    Swal.fire({
                        icon: 'success',
                        title: 'Successful',
                        text: 'Inventory has been added!!',
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
            productID: '',
            productName: '',
            productCategory: '',
            quantity: ''
        })
    }

    render() {
        return (
            <div >
                <div className="flex flex-col px-5 ">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full sm:px-6 lg:px-8">
                            <div className='items-center overflow-hidden'>
                                <div className=''>
                                    <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">
                                        <form className='px-12 py-6 border-2 rounded-lg shadow-md bg-gray-50' onSubmit={this.onSubmit}>
                                            <div class="">
                                                <p className='text-4xl font-semibold text-black uppercase drop-shadow-lg'>
                                                    Add Inventory                                                </p>
                                                <div className="grid grid-cols-1 gap-4 form-group">
                                                    <div class="">
                                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                            Product ID :                                                         </label>
                                                        <input
                                                            type="text"
                                                            required
                                                            className="form-control"
                                                            value={this.state.productID}
                                                            onChange={this.onChangeproductID}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4 form-group">
                                                    <div className="form-group">
                                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                            Product Name :                                                         </label>
                                                        <input type="text"
                                                            required
                                                            className="form-control"
                                                            value={this.state.productName}
                                                            onChange={this.onChangeproductName}
                                                        />
                                                    </div>
                                                    <div class="">
                                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >
                                                            Product Category :                                                         </label>
                                                        <input type="text"
                                                            required
                                                            className="form-control"
                                                            value={this.state.productCategory}
                                                            onChange={this.onChangeproductCategory}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 gap-4 form-group">
                                                    <div className="form-group">
                                                        <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                            Quantity :                                                        </label>
                                                        <input type="number"
                                                            className="form-control"
                                                            value={this.state.quantity}
                                                            onChange={this.onChangequantity}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="text-center align-middle form-group">
                                                    <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Add Inventory" />
                                                </div>
                                            </div>
                                        </form>
                                        {/* <div className="form-group">
                                        <button onClick={() => this.demoClicked()}>Demo</button>
                                    </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>




        )
    }
}