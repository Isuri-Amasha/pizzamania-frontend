import React, {Component} from 'react';
import axios from 'axios';
import * as Swal from "sweetalert2";



export class CreateOrder extends Component {

    
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
        // this.onChangeorderStatus = this.onChangeorderStatus.bind(this);
        

        this.onSubmit = this.onSubmit.bind(this);
        
       

        this.state = { product : [],
            customer : '',
            item1 : '',
            quantity1 : '',
            item2 : '',
            quantity2 : '',
            item3 : '',
            quantity3:'',
            orderFor:'',
            deliveryAddress:'',
            amount:'',
            orderStatus:'',
            price : ''
            
        }
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

   

    onSubmit(e){
        e.preventDefault();

        const product =[];
        const price = 0;

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

        // axios.get('http://localhost:5000/product/')
        // .then(response => {
        //     this.setState({ product : response.data })

        //     if(product.productName == this.state.item1){
        //         return product.price;
        //     }
        // })
        // .catch((error) => {
        //     console.log(error);
        // })

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
            axios.post('http://localhost:5000/order/', order)
        // .then(res => console.log("success")).catch(err=>console.log(err));

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

        // window.location = '/';
        // }
        
    }

    clearData = () => {
        this.setState({
            customer : '',
            item1 : '',
            quantity1 : '',
            item2 : '',
            quantity2 : '',
            item3 : '',
            quantity3 : '',
            orderFor : '',
            deliveryAddress : '',
            amount : '',
            // orderStatus : ''
        })
    }

    

    

    

    render() {
        return (
        <div >
            
                <div>
                
            <h3 >Add Order</h3>
        
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
                        <label>Quantity 1 : </label>
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
                        <label>Quantity 2 : </label>
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
                        <label>Quantity 3 : </label>
                        <input type = "text"
                        
                        className = "form-control"
                        value = {this.state.quantity3}
                        onChange = {this.onChangequantity3}
                        />
                        
                    </div>
                    {/* <div className = "form-group">
                        <label>DOB : </label>
                        <div>
                            <DatePicker
                            selected = {this.state.dob}
                            onChange = {this.onChangedob}
                            />
                        </div>
                    </div> */}
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
                        <input type = "submit" value = "Add Order" />
                    </div>
                </form>

                {/* <div className = "form-group">
                    <button onClick={() => this.demoClicked()}>Demo</button>
                    </div> */}


</div>

                

    </div>

                

                
        )
    }
}