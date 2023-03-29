import React, {Component} from 'react';
import axios from 'axios';
import * as Swal from "sweetalert2";



export class CreateEmployee extends Component {

    
    constructor(props){
        super(props);

        
       
        this.onChangeempID = this.onChangeempID.bind(this);
        this.onChangefullName = this.onChangefullName.bind(this);
        this.onChangecontactNo = this.onChangecontactNo.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangeaddress = this.onChangeaddress.bind(this);
        this.onChangeposition = this.onChangeposition.bind(this);
        

        this.onSubmit = this.onSubmit.bind(this);
        
       

        this.state = {
            empID : '',
            fullName : '',
            contactNo : '',
            email : '',
            address : '',
            position : ''
            
        }
    }

    onChangeempID(e){
        this.setState({
            empID : e.target.value
        });
    }

    onChangefullName(e){
        this.setState({
            fullName : e.target.value
        });
    }

    onChangecontactNo(e){
        this.setState({
            contactNo : e.target.value
        });
    }

    onChangeemail(e){
        this.setState({
            email : e.target.value
        });
    }

    onChangeaddress(e){
        this.setState({
            address : e.target.value
        });
    }

    onChangeposition(e){
        this.setState({
        position : e.target.value
        });
    }

   

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

        const employee = {
            empID : this.state.empID,
            fullName : this.state.fullName,
            contactNo : this.state.contactNo,
            email : this.state.email,
            address : this.state.address,
            position : this.state.position
        }

        console.log(employee);

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
            axios.post('http://localhost:5000/employee/', employee)
        // .then(res => console.log("success")).catch(err=>console.log(err));

        .then(res => {
            
            console.log(res);

            if (res.status === 200) {
                this.clearData();
                Swal.fire({
                    icon: 'success',
                    title: 'Successful',
                    text: 'Classroom has been added!!',
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
            empID: '',
            fullName: '',
            contactNo: '',
            email: '',
            address: '',
            position : ''
        })
    }

    

    

    

    render() {
        return (
        <div >
            
                <div>
                
            <h3 >Add Employee</h3>
        
                <form onSubmit = {this.onSubmit}>
                    <div className = "form-group">
                        <label>Employee ID : </label>
                        <input type = "text"
                        required
                        className = "form-control"
                        value = {this.state.empID}
                        onChange = {this.onChangeempID}
                        />
                        <p className = "validateMsg">{this.state.empIDError}</p>
                    </div>

                    <div className = "form-group">
                        <label>Full Name : </label>
                        <input type = "text"
                        required
                        className = "form-control"
                        value = {this.state.fullName}
                        onChange = {this.onChangefullName}
                        />
                        <p className = "validateMsg">{this.state.nameError}</p>
                    </div>

                    <div className = "form-group">
                        <label>Contact Number : </label>
                        <input type = "text"
                        required
                        className = "form-control"
                        value = {this.state.contactNo}
                        onChange = {this.onChangecontactNo}
                        />
                        <p className = "validateMsg">{this.state.contactNoError}</p>
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
                        <label>Eamil : </label>
                        <input type = "text"
                        required
                        className = "form-control"
                        value = {this.state.email}
                        onChange = {this.onChangeemail}
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
                        <label>Position : </label>
                        <input type = "text"
                        required
                        className = "form-control"
                        value = {this.state.position}
                        onChange = {this.onChangeposition}
                        />
                    </div>



                    <div className = "form-group">
                        <input type = "submit" value = "Add Employee" />
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