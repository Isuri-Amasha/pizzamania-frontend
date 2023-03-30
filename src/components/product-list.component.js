import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Product = props => (
    <tr>
        {/* <td>{props.employee._id}</td> */}
        
        <td>{props.product.productID}</td>
        <td>{props.product.productName}</td>
        <td>{props.product.productCategory}</td>
        <td>{props.product.productSize}</td>
        <td>{props.product.price}</td>
        <td>{props.product.discount}</td>
        <td>{props.product.availability}</td>
        
       
        <td>
            <button ><Link to = {"/editProduct/"+props.product._id } >Edit</Link></button>
            <button  onClick ={() => {props.deleteProduct(props.product._id)}}>Delete</button>
        </td>
    </tr>
)

export class ProductList extends Component {

    constructor(props){
        super(props);

        this.deleteProduct = this.deleteProduct.bind(this);

        this.state = {product : [],
        searchProduct : ""};
    }


    componentDidMount() {
        axios.get('http://localhost:5000/product/')
        .then(response => {
            this.setState({ product : response.data })
        })
        .catch((error) => {
            console.log(error);
        })
        }

        deleteProduct(id){
            axios.delete('http://localhost:5000/product/' +id)
            .then(res => console.log(res.data));
            this.setState({
                product : this.state.product.filter(el => el._id !== id)
            })
        }

        productList(){
            return this.state.product.map(currentproduct => {
                return <Product product = {currentproduct} deleteProduct = {this.deleteProduct} key = {currentproduct._id}/>;
            })
        }

        searchProductList(){

            return this.state.product.map((currentproduct) => {
                if (
                    this.state.searchProduct ==
                    currentproduct.productName
                ){
                    return (
                        <tr>
                        <td style={{ width: "10%" }}>{currentproduct.productID}</td>
                        <td style={{ width: "10%" }}>{currentproduct.productName}</td>
                        <td style={{ width: "10%" }}>{currentproduct.productCategory}</td>
                        <td style={{ width: "10%" }}>{currentproduct.productSize}</td>
                        <td style={{ width: "10%" }}>{currentproduct.price}</td>
                        <td style={{ width: "10%" }}>{currentproduct.discount}</td>
                        <td style={{ width: "10%" }}>{currentproduct.availability}</td>
                        
                        <td style={{ width: "20%" }}>
                            {
                            <button >
                                <Link
                                to={"/editProduct/" + currentproduct._id}
                                
                                >
                                Edit
                                </Link>
                            </button>
                            }
                            {"  "}
                            {
                            <button
                                
                                onClick={() => {
                                  //Delete the selected record
                                axios
                                    .delete(
                                    "http://localhost:5000/product/" + currentproduct._id
                                    )
                                    .then(() => {
                                    alert("Delete Success");
                                      //Get data again after delete
                                    axios
                                        .get("http://localhost:5000/product")
                                        .then((res) => {
                                        console.log(res.data);
                                        this.setState({
                                            product: res.data,
                                        });
                                        })
                                        .catch((err) => console.log(err));
                                    })
                                    .catch((err) => {
                                    alert(err);
                                    });
                                }}
                            >
                                Delete
                            </button>
                            }
                        </td>
                        </tr>
                    );
                }
            });
        }


        // exportEmployee = () => {
        //     console.log( "Export PDF" )
    
    
        //     const unit = "pt";
        //     const size = "A3"; 
        //     const orientation = "landscape"; 
        //     const marginLeft = 40;
        //     const doc = new jsPDF( orientation, unit, size );
    
        //     const title = "Employee List Report ";
        //     const headers = [["Full Name","NIC","EMP ID","Date of Birth","Designation","Section","Address","Contact No","Emergancy No"]];
    
        //     const emp = this.state.employee.map(
        //         Employee=>[
        //             Employee.fullName,
        //             Employee.nic,
        //             Employee.empID,
        //             Employee.dob.substring(0,10),
        //             Employee.designation,
        //             Employee.section,
        //             Employee.address,
        //             Employee.contactNo,
        //             Employee.emergency,
        //         ]
        //     );
    
        //     let content = {
        //         startY: 50,
        //         head: headers,
        //         body:emp
        //     };
        //     doc.setFontSize( 20 );
        //     doc.text( title, marginLeft, 40 );
        //     require('jspdf-autotable');
        //     doc.autoTable( content );
        //     doc.save( "Employee-list.pdf" )
        // }


    render() {
        return (
            <div >
            
            
            
                <table >
                    <tr>
                        <th><h3>Product Details</h3></th>
                        <td><button ><Link to = {"/creatProduct" }>Add Product</Link></button>
                        <button>
                       
                        <Link to = {"/" }>Download Report Here</Link></button></td>
                    </tr>

                    <div >
                    <input style={{ width: "250px", marginTop:"10px"}}
                    class="form-control"
                    type="text"
                    placeholder="Search by Product Name"
                    aria-label="Search"
                    onChange={(e) => {
                        this.setState({
                        searchProduct: e.target.value
                        });
                    }}
                    />
            </div>
                </table>
            
            
                
                <table class="table table-bordered">
                <thead >
                    <tr>
                        <th className = "tbhead">Product ID</th>
                        <th className = "tbhead">Product Name</th>
                        <th className = "tbhead">Product Category</th>
                        <th className = "tbhead">Product Size</th>
                        <th className = "tbhead">Price</th>
                        <th className = "tbhead">Discount</th>
                        <th className = "tbhead">Availability</th>
                        
                        
                        
                    </tr>
                </thead>
                <tbody>
                    { this.state.searchProduct == "" ? this.productList() : this.searchProductList() }
                </tbody>
            </table>
           
           
        </div>
        )
    }
}
