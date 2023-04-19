import React, {Component} from 'react';
import axios from 'axios';
import * as Swal from "sweetalert2";



export class ViewDeliveryDetails extends Component {

    
    constructor(props){
        super(props);

        
        // this.deleteOrder = this.deleteOrder.bind(this);
        // this.onChangedriver = this.onChangedriver.bind(this);
        // this.onChangeproductName = this.onChangeproductName.bind(this);
        // this.onChangeproductCategory = this.onChangeproductCategory.bind(this);
        // this.onChangeavailablequantity = this.onChangeavailablequantity.bind(this);
        // this.onChangerequestedquantity = this.onChangerequestedquantity.bind(this);
        // this.onChangeorderStatus = this.onChangeorderStatus.bind(this);
        

        // this.onSubmit = this.onSubmit.bind(this);
        
       

        this.state = {
            deliveryId:props.deId,
            orderId : '',
            customer : '',
            item1 : '',
            quantity1 :'',
            item2 : '',
            quantity2 :'',
            item3 : '',
            quantity3 :'',
            deliveryAddress:'',
            amount:'',
            orderStatus:'',
            assignedEmp:''
            
        }
    }

    // onChangedriver(e){
    //     this.setState({
    //         assignedEmp : e.target.value
    //     });
    // }

    

    componentDidMount() {
       
this.refreshList();
        }

        refreshList(){
            axios.get('http://localhost:5000/delivery/'+this.state.deliveryId)
            .then(response => {
                this.setState({
                deliveryId : response.data._id,
                orderId : response.data.orderId,
                customer : response.data.customer,
                item1: response.data.item1,
                quantity1: response.data.quantity1,
                item2: response.data.item2,
                quantity2: response.data.quantity2,
                item3: response.data.item3,
                quantity3: response.data.quantity3,
                deliveryAddress: response.data.deliveryAddress,
                amount: response.data.amount,
                orderStatus: response.data.orderStatus,
                assignedEmp: response.data.assignedEmp
                    })
                })
                .catch(function(error) {
                    console.log(error);
                })
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

    // deleteOrder(id){
    //     axios.delete('http://localhost:5000/order/' + id).then(response => {
    //         console.log(response.status)
            // this.refreshTable();

            // if(response.status == 200){
            //     Swal.fire({
            //         icon: 'success',
            //         title: 'Successful',
            //         text: "Order has been deleted!!",
            //         background: '#fff',
            //         confirmButtonColor: '#0a5bf2',
            //         iconColor: '#60e004'
            //     })

            //     this.refreshList();
            // }
            
            // else {
            //     Swal.fire({
            //         icon: 'Unsuccess',
            //         title: 'Unsuccessfull',
            //         text: "Order has not been deleted!!",
            //         background: '#fff',
            //         confirmButtonColor: '#eb220c',
            //         iconColor: '#60e004'
            //     })
            // }

            
    //     })
        
    // }

    // onSubmit(e){
    //     e.preventDefault();

    //     this.deleteOrder(this.state.id);

    //     const delivery = {
    //         orderId : this.state.orderId,
    //         customer : this.state.customer,
    //         item1: this.state.item1,
    //         quantity1: this.state.quantity1,
    //         item2: this.state.item2,
    //         quantity2: this.state.quantity2,
    //         item3: this.state.item3,
    //         quantity3: this.state.quantity3,
    //         deliveryAddress: this.state.deliveryAddress,
    //         amount: this.state.amount,
    //         orderStatus: 'Delivery Ongoing',
    //         assignedEmp: this.state.assignedEmp
    //     }

    //     console.log(delivery);

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
    //         axios.post('http://localhost:5000/delivery/', delivery)
    //     // .then(res => console.log("success")).catch(err=>console.log(err));

    //     .then(res => {
            
    //         console.log(res);

    //         if (res.status === 200) {
    //             this.clearData();
    //             Swal.fire({
    //                 icon: 'success',
    //                 title: 'Successful',
    //                 text: 'Delivery has been added!!',
    //                 background: '#fff',
    //                 confirmButtonColor: '#333533',
    //                 iconColor: '#60e004'
    //             })

    //         } else {
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Error',
    //                 text: 'Error in adding!',
    //                 background: '#fff',
    //                 confirmButtonColor: '#333533',
    //                 iconColor: '#e00404'
    //             })
    //         }
    //     })

    //     // this.refreshList();
    //     // window.location = '/';
    //     // }
        
    // }

    // clearData = () => {
    //     this.setState({
    //         orderId : '',
    //         customer : '',
    //         item1 : '',
    //         quantity1 :'',
    //         item2 : '',
    //         quantity2 :'',
    //         item3 : '',
    //         quantity3 :'',
    //         deliveryAddress:'',
    //         amount:'',
    //         orderStatus:'',
    //         assignedEmp:''
    //     })
    // }

    

    

    

    render() {
        return (
            <div >
            <div className="flex flex-col px-5 ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full sm:px-6 lg:px-8">
                        <div className='items-center overflow-hidden'>
                            <div className=''>
                                <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">
                                    <form className='px-12 py-6 border-2 rounded-lg shadow-md bg-gray-50' >
                                        <div class="">

                                        <div class="">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Delivery ID                                                        </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        disabled
                                                        className="form-control"
                                                        value={this.state.deliveryId}
                                                       
                                                    />
                                                </div>
                                           
                                                <div class="">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Order ID                                                        </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        disabled
                                                        className="form-control"
                                                        value={this.state.orderId}
                                                       
                                                    />
                                                </div>
                                            

                                           
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Customer                                                        </label>
                                                    <input type="text"
                                                        required
                                                        disabled
                                                        className="form-control"
                                                        value={this.state.customer}
                                                       
                                                    />
                                                </div>
                                                <div className="grid grid-cols-1 gap-4 form-group">
                                                <div class="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >
                                                       Item1                                                        </label>
                                                    <input type="text"
                                                        required
                                                        disabled
                                                        className="form-control"
                                                        value={this.state.item1}
                                                      
                                                    />
                                                </div>
                                            
                                            
                                                <div className="form-group">
                                                    <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Quantity1                                                    </label>
                                                    <input type="text"
                                                        className="form-control"
                                                        disabled
                                                        value={this.state.quantity1}
                                                       
                                                    />
                                                </div>
                                                </div>

                                                <div className="grid grid-cols-1 gap-4 form-group">
                                                <div class="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >
                                                       Item2                                                       </label>
                                                    <input type="text"
                                                        required
                                                        disabled
                                                        className="form-control"
                                                        value={this.state.item2}
                                                      
                                                    />
                                                </div>
                                            
                                            
                                                <div className="form-group">
                                                    <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Quantity2                                                    </label>
                                                    <input type="text"
                                                        className="form-control"
                                                        disabled
                                                        value={this.state.quantity2}
                                                       
                                                    />
                                                </div>
                                                </div>

                                                <div className="grid grid-cols-1 gap-4 form-group">
                                                <div class="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >
                                                       Item3                                                        </label>
                                                    <input type="text"
                                                        required
                                                        disabled
                                                        className="form-control"
                                                        value={this.state.item3}
                                                      
                                                    />
                                                </div>
                                            
                                            
                                                <div className="form-group">
                                                    <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Quantity3                                                  </label>
                                                    <input type="text"
                                                        className="form-control"
                                                        disabled
                                                        value={this.state.quantity3}
                                                       
                                                    />
                                                </div>
                                                </div>
                                                <div className="grid grid-cols-1 gap-4 form-group">
                                                <div className="form-group">
                                                    <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Delivery Address                                                    </label>
                                                    <input type="text"
                                                        className="form-control"
                                                        disabled
                                                        value={this.state.deliveryAddress}
                                                        
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Amount                                                    </label>
                                                    <input type="text"
                                                        className="form-control"
                                                        disabled
                                                        value={this.state.amount}
                                                        
                                                    />
                                                </div>
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Status                                                    </label>
                                                    <input type="text"
                                                        className="form-control"
                                                        disabled
                                                        value={this.state.orderStatus}
                                                        
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Assigned Employee                                                    </label>
                                                    <input type="text"
                                                        className="form-control"
                                                        disabled
                                                        value={this.state.assignedEmp}
                                                        
                                                    />
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