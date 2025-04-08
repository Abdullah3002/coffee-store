import { useState } from "react";
import "./App.css";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/coffeeCard";
import Swal from "sweetalert2";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-qsqe2uwgr-zubaers-projects.vercel.app//coffee/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <>
      <h2 className="text-xl font-bold text-orange-500">
        Hot hot cold coffee: {coffees.length} ☕
      </h2>

      <div className="space-y-6 space-x-4 pt-4">
        <Link to="/addcoffee">
          <button className="btn btn-primary">Add Coffee</button>
        </Link>
        <Link to="/signup">
          <button className="btn btn-primary">SignUp</button>
        </Link>
        <Link to="users">
          <button className="btn btn-primary">Users</button>
        </Link>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pt-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
}

export default App;
