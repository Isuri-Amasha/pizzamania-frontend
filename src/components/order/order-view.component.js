import React, { Component } from 'react';
import axios from 'axios';


export default class ViewOrder extends Component {

    constructor(props) {
        super(props);


        // this.onChangeempID = this.onChangeempID.bind(this);
        // this.onChangefullName = this.onChangefullName.bind(this);
        // this.onChangecontactNo = this.onChangecontactNo.bind(this);
        // this.onChangeemail = this.onChangeemail.bind(this);
        // this.onChangeaddress = this.onChangeaddress.bind(this);
        // this.onChangeposition = this.onChangeposition.bind(this);

        // this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id:props.orId,
            orderId: '',
            customer:'',
            item1: '',
            quantity1: '',
            item2: '',
            quantity2: '',
            item3: '',
            quantity3:'',
            orderFor:'',
            deliveryAddress:'',
            amount:'',
            orderStatus:''

        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/order/' + this.state.id)
            .then(response => {
                this.setState({
                    orderId: response.data._id,
                    customer: response.data.customer,
                    item1: response.data.item1,
                    quantity1: response.data.quantity1,
                    item2: response.data.item2,
                    quantity2: response.data.quantity2,
                    item3: response.data.item3,
                    quantity3: response.data.quantity3,
                    orderFor: response.data.orderFor,
                    deliveryAddress: response.data.deliveryAddress,
                    amount: response.data.amount,
                    orderStatus: response.data.orderStatus,

                })
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    

    render() {
        return (
            <div className="flex flex-col px-5 pt-2 ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className='items-center overflow-hidden'>
                            <div className=''>
                                <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">
                                    <div className="formdiv">
                                        <form className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50' >
                                           
                                            <div class="grid grid-cols-2 gap-4 form-group">
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Order ID </label>
                                                    <input type="text"
                                                        // required
                                                        className="form-control"
                                                        value={this.state.orderId}
                                                        

                                                    /><p />
                                                </div>
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >Customer Name</label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.customer}
                                                     
                                                    /><p />
                                                </div>
                                            </div>
                                            <div class="grid grid-cols-2 gap-4 form-group">
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Item 1</label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.item1}
                                                       
                                                    />
                                                    <p />
                                                </div>
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Quantity 1</label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.quantity1}
                                                       
                                                    /><p />
                                                </div>
                                            </div>

                                            <div class="grid grid-cols-2 gap-4 form-group">
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Item 2</label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.item2}
                                                       
                                                    />
                                                    <p />
                                                </div>
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Quantity 2</label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.quantity2}
                                                       
                                                    /><p />
                                                </div>
                                            </div>
                                            <div class="grid grid-cols-2 gap-4 form-group">
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Item 3</label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.item3}
                                                       
                                                    />
                                                    <p />
                                                </div>
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Quantity 3</label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.quantity3}
                                                       
                                                    /><p />
                                                </div>
                                            </div>
                                            <div class="grid grid-cols-2 gap-4 form-group">
                                            <div className="form-group">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Order For</label>
                                                <input type="text"
                                                    required
                                                    className="form-control"
                                                    value={this.state.orderFor}
                                                   
                                                /><p />
                                            </div>
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' for="grid-state">Delivery Address</label>
                                                <input type="text"
                                                    required
                                                    className="form-control"
                                                    value={this.state.deliveryAddress}
                                                   
                                                /><p />
                                                    {/* <option>Waiter Staff</option>
                                                    <option>Kitchen Head Chef</option>
                                                    <option>Inventory Manager</option>
                                                    <option>Driver</option>
                                                    <option>Delivery Manager</option>
                                                    <option>Employee Manager</option>
                                                    <option>Finantial Manager</option>
                                                    <option>Product Manager</option>
                                                </select> */}
                                               
                                            </div>
                                            </div>

                                            <div class="grid grid-cols-2 gap-4 form-group">
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Amount</label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.amount}
                                                       
                                                    />
                                                    <p />
                                                </div>
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Order Status</label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.orderStatus}
                                                       
                                                    /><p />
                                                </div>
                                            </div>


                                            {/* <div className="text-center align-middle form-group">
                                                <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit " value="Edit Employee" />
                                            </div> */}
                                            
                                        </form>


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