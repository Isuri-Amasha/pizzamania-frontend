import React, { Component } from 'react';
import axios from 'axios';
import * as Swal from "sweetalert2";

export class EditSalary extends Component {
    constructor(props) {
        super(props);
        this.onChangeempID = this.onChangeempID.bind(this);
        this.onChangeempName = this.onChangeempName.bind(this);
        this.onChangebasicSalary = this.onChangebasicSalary.bind(this);
        this.onChangeotRate = this.onChangeotRate.bind(this);
       
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id:props.salId,
            empId: '',
            empName: '',
            basicSalary: '',
            otRate: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/salary/' + this.state.id)
            .then(response => {
                this.setState({
                    empId: response.data.empId,
                    empName: response.data.empName,
                    basicSalary: response.data.basicSalary,
                    otRate: response.data.otRate

                })
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    onChangeempID(e) {
        this.setState({
            empId: e.target.value
        });
    }

    onChangeempName(e) {
        this.setState({
            empName: e.target.value
        });
    }

    onChangebasicSalary(e) {
        this.setState({
            basicSalary: e.target.value
        });
    }

    onChangeotRate(e) {
        this.setState({
            otRate: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const salary = {
            empId: this.state.empId,
            empName: this.state.empName,
            basicSalary: this.state.basicSalary,
            otRate: this.state.otRate
        }

        console.log(salary);

       
        // if(this.state.empId.length < 10 || this.state.empId.length > 10){
        //     this.setState({empIDError : "Employee ID should be 10 characters long"})
        // }
        // else if(this.state.empName.length < 6){
        //     this.setState({nameError : "Name should be longer than 6 characters."})
        // }
        // else if(this.state.basicSalary == 0){
        //     this.setState({basicSalaryError : "Basic Salary Can not be zero"})

        // } else if (this.state.otRate == 0) {
        //     this.setState({ otError: "OT rate Can not be zero" })

        // }else {
        axios.put('http://localhost:5000/salary/'+this.state.id, salary)
            // .then(res => console.log("success")).catch(err=>console.log(err));

            .then(res => {

                console.log(res);

                if (res.status === 200) {
                    this.clearData();
                    Swal.fire({
                        icon: 'success',
                        title: 'Successful',
                        text: 'Salary has been updated!!',
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
        // }
        // window.location = '/employee';
    }

    clearData = () => {
        this.setState({
            empId: '',
            empName: '',
            basicSalary: '',
            otRate: ''
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
                                    <form className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50' onSubmit={this.onSubmit}>

                                        <div class="grid grid-cols-2 gap-4 form-group">
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Employee ID </label>
                                                <input type="text"
                                                    // required
                                                    className="form-control"
                                                    value={this.state.empId}
                                                    onChange={this.onChangeempID}

                                                /><p />
                                            </div>
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >Employee Name</label>
                                                <input type="text"
                                                    required
                                                    className="form-control"
                                                    value={this.state.empName}
                                                    onChange={this.onChangeempName}
                                                /><p />
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2 gap-4 form-group">
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Basic Salary</label>
                                                <input type="text"
                                                    required
                                                    className="form-control"
                                                    value={this.state.basicSalary}
                                                    onChange={this.onChangebasicSalary}
                                                />
                                                <p />
                                            </div>
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Over Time Rate</label>
                                                <input type="text"
                                                    required
                                                    className="form-control"
                                                    value={this.state.otRate}
                                                    onChange={this.onChangeotRate}
                                                /><p />
                                            </div>
                                        </div>

                                       
                                            {/* <option>Waiter Staff</option>
                                                <option>Kitchen Head Chef</option>
                                                <option>Inventory Manager</option>
                                                <option>Driver</option>
                                                <option>Delivery Manager</option>
                                                <option>Employee Manager</option>
                                                <option>Finantial Manager</option>
                                                <option>Product Manager</option>
                                            </select> */}
                                            
                                        {/* <div className="text-center align-middle form-group">
                                            <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit " value="Edit Employee" />
                                        </div> */}
                                        <div className="text-center align-middle form-group">
                                            <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Edit Salary" />
                                        </div>
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