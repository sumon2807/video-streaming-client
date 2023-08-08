import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../../redux/features/counter";

const Home = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <div className="bg-gray-50 shadow-xl rounded max-w-sm mx-auto my-10">
        <h1 className="text-4xl text-center">Hallo programars</h1>
        <h1 className="text-3xl font-bold text-center pt-4 ">Count {count.count}</h1>
        <div className="card-body  ">
          <button className="btn btn-secondary" onClick={incrementHandler}>
            Increment
          </button>
          <button className="btn btn-secondary" onClick={decrementHandler}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
