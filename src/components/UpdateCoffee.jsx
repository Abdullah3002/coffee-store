import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2"; // Make sure you import Swal

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  // Destructure the coffee object to get the necessary fields
  const { _id, name, quantity, supplier, price, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const price = form.price.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updateCoffee = {
      name,
      quantity,
      supplier,
      price,
      category,
      details,
      photo,
    };
    console.log(updateCoffee);

    // send data to the server
    fetch(
      `https://coffee-store-server-qsqe2uwgr-zubaers-projects.vercel.app/coffee/${_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleUpdateCoffee} className="card-body">
              <fieldset className="fieldset flex">
                <label className="fieldset-label">Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  className="input"
                  placeholder="Item Name...."
                />
                <label className="fieldset-label">Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  className="input"
                  placeholder="Quantity...."
                />
              </fieldset>

              <fieldset className="fieldset flex">
                <label className="fieldset-label">Supplier:</label>
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  className="input"
                  placeholder="Supplier...."
                />
                <label className="fieldset-label">Price:</label>
                <input
                  type="text"
                  className="input"
                  name="price"
                  defaultValue={price}
                  placeholder="Price...."
                />
              </fieldset>

              <fieldset className="fieldset flex">
                <label className="fieldset-label">Category</label>
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  className="input"
                  placeholder="Category...."
                />
                <label className="fieldset-label">Details</label>
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  className="input"
                  placeholder="Details...."
                />
              </fieldset>

              <fieldset className="fieldset">
                <label className="fieldset-label">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  className="input"
                  placeholder="PhotoUrl...."
                />
              </fieldset>

              <input
                type="submit"
                className="btn btn-secondary"
                value="Update Coffee"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
