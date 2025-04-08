import React from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const price = form.price.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {name,quantity,supplier,price,category,details,photo}
    console.log(newCoffee);

    // send data to the server 
    fetch('http://localhost:5003/coffee',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            Swal.fire({
                title:'Success',
                text: 'User Added Successfully',
                icon:'Success',
                confirmButtonText:'Cool'
            })
        }
    })

  };
  return (
    <div>

     <Link to="/"> <button className="btn btn-primary">Home</button> </Link>
     <Link to="/updatecoffee"> <button className="btn btn-primary">Update Coffee</button> </Link>
     <Link to="/coffecard"> <button className="btn btn-primary"> Coffee Card</button> </Link>


      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleAddCoffee} className="card-body">
              <fieldset className="fieldset flex ">
                <label className="fieldset-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Item Name...."
                />
                <label className="fieldset-label">Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  className="input"
                  placeholder="Quantity...."
                />
              </fieldset>

              <fieldset className="fieldset flex">
                <label className="fieldset-label">Supplier:</label>
                <input
                  type="text"
                  name="supplier"
                  className="input"
                  placeholder="Supplier...."
                />
                <label className="fieldset-label">Price:</label>
                <input
                  type="text"
                  className="input"
                  name="price"
                  placeholder="Price...."
                />
              </fieldset>

              <fieldset className="fieldset flex">
                <label className="fieldset-label">category</label>
                <input
                  type="text"
                  name="category"
                  className="input"
                  placeholder="category...."
                />
                <label className="fieldset-label">details</label>
                <input
                  type="text"
                  name="details"
                  className="input"
                  placeholder="details...."
                />
              </fieldset>

              <fieldset className="fieldset">
                <label className="fieldset-label">Details</label>
                <input
                  type="text"
                  name="photo"
                  className="input"
                  placeholder="PhotoUrl...."
                />
              </fieldset>

              <input
                type="submit"
                className="btn btn-secondary"
                value="Add Coffee"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
