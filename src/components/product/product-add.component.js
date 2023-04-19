import React, { Component } from 'react';
import axios from 'axios';
import * as Swal from "sweetalert2";



export class CreateProduct extends Component {


    constructor(props) {
        super(props);



        this.onChangeproductID = this.onChangeproductID.bind(this);
        this.onChangeproductName = this.onChangeproductName.bind(this);
        this.onChangeproductCategory = this.onChangeproductCategory.bind(this);
        this.onChangeproductSize = this.onChangeproductSize.bind(this);
        this.onChangeprice = this.onChangeprice.bind(this);
        this.onChangediscount = this.onChangediscount.bind(this);
        this.onChangeavailability = this.onChangeavailability.bind(this);


        this.onSubmit = this.onSubmit.bind(this);



        this.state = {
            productID: '',
            productName: '',
            productCategory: '',
            productSize: '',
            price: '',
            discount: '',
            availability: ''

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

    onChangeproductSize(e) {
        this.setState({
            productSize: e.target.value
        });
    }

    onChangeprice(e) {
        this.setState({
            price: e.target.value
        });
    }

    onChangediscount(e) {
        this.setState({
            discount: e.target.value
        });
    }

    onChangeavailability(e) {
        this.setState({
            availability: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const product = {
            productID: this.state.productID,
            productName: this.state.productName,
            productCategory: this.state.productCategory,
            productSize: this.state.productSize,
            price: this.state.price,
            discount: this.state.discount,
            availability: this.state.availability
        }

        console.log(product);

        if (this.state.productID.length < 3) {
            this.setState({ proIDError: "Product ID should be longer than 3 characters." })
        }
        else if (this.state.productName.length < 3) {
            this.setState({ nameError: "Product Name should be longer than 3 characters." })
        }
        else if (this.state.productCategory.length < 3) {
            this.setState({ productCategoryError: "Invalid Product Category" })
        }
        else if (this.state.productSize.length < 3) {
            this.setState({ productSizeError: "Invalid Product Size" })
        }
        else if (this.state.price < 500) {
            this.setState({ priceError: "Price cannot be lesser than 500" })
        } else {

            
            axios.post('http://localhost:5000/product/', product)
               

                .then(res => {

                    console.log(res);

                    if (res.status === 200) {
                        this.clearData();
                        Swal.fire({
                            icon: 'success',
                            title: 'Successful',
                            text: 'Product has been added!!',
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
            productID: '',
            productName: '',
            productCategory: '',
            productSize: '',
            price: '',
            discount: '',
            availability: ''
           
        })
    }







    render() {
        return (
            <div >

                <div>

                    <h3 >Add Product</h3>

                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Product ID</label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.productID}
                                onChange={this.onChangeproductID}
                            /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.proIDError}</p>

                        </div>

                        <div className="form-group">
                            <label>Product Name</label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.productName}
                                onChange={this.onChangeproductName}
                            /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.nameError}</p>

                        </div>

                        <div className="form-group">
                            <label>Product Category</label>
                            <select type="text"
                                required
                                className="form-control"
                                value={this.state.productCategory}
                                onChange={this.onChangeproductCategory}
                            >
                                <option>Pizza</option>
                                <option>Beverage</option>

                            </select><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.productCategoryError}</p>

                        </div>

                        <div className="form-group">
                            <label>Product Size</label>
                            <select type="text"

                                className="form-control"
                                value={this.state.productSize}
                                onChange={this.onChangeproductSize}
                            >

                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>

                            </select>

                            <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.productSizeError}</p>

                        </div>

                        <div className="form-group">
                            <label>Price</label>
                            <input type="text"

                                className="form-control"
                                value={this.state.price}
                                onChange={this.onChangeprice}
                            /><p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.priceError}</p>

                        </div>

                        <div className="form-group">
                            <label>Discount</label>
                            <input type="text"

                                className="form-control"
                                value={this.state.discount}
                                onChange={this.onChangediscount}
                            />

                        </div>

                        <div className="form-group">
                            <label>Availability</label>
                            <select type="text"

                                className="form-control"
                                value={this.state.availability}
                                onChange={this.onChangeavailability}
                            >
                                <option>Yes</option>
                                <option>No</option>

                            </select><p />

                        </div>



                        <div className="form-group">
                            <input type="submit" value="Add Product" />
                        </div>
                    </form>



                </div>



            </div>




        )
    }
}