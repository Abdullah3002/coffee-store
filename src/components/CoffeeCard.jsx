import React from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee ,coffees, setCoffees ,handleDelete}) => {
  const { _id, name, quantity, supplier, price, category, details, photo } = coffee;

  return (
    <div className="">
      <div className="flex p-4 rounded">
        <div className="flex space-x-5 bg-orange-100 p-2 rounded">
          <div className="">
            <img
              className="w-60 h-auto max-h-40 object-cover rounded"
              src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Image"
            />

            <p>Name: {name} </p>
            <p>Supplier: {supplier} </p>
            <p>Price : ${price} </p>
          </div>

          <div className="space-y-2">
            <button className="btn btn-secondary bg-orange-400 mb-2">
              <FaEye />
            </button>

            <Link to={`updatecoffee/${_id}`}>
              <button className="btn btn-secondary">
                <FaEdit />
              </button>
            </Link>

            <br />
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-secondary bg-red-600"
            >
              <FaDeleteLeft />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
