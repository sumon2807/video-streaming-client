import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../../redux/features/counter";
// import banner from '../../../../public/assets/images/banner/home-banner.png'

const Home = () => {
  // const url=`https://i.ibb.co/p4WvVqT/home-banner.png`
  // //count State
  // const count = useSelector((state) => state.count);
  // const dispatch = useDispatch();
  // //increment Handler
  // const incrementHandler = () => {
  //   dispatch(increment());
  // };
  // //deccrement Handler
  // const decrementHandler = () => {
  //   dispatch(decrement());
  // };
  // return (
  //   <div className="pt-32">
  //     {/* style={{ backgroundImage: `url('${url}')` }} */}
  //     <div className="shadow-xl rounded max-w-sm mx-auto">
  //       <h1 className="text-4xl text-center">Hallo programars</h1>
  //       <h1 className="text-3xl font-bold text-center pt-4 ">
  //         Count {count.count}
  //       </h1>
  //       <div className="card-body  ">
  //         <button className="btn btn-secondary" onClick={incrementHandler}>
  //           Increment
  //         </button>
  //         <button className="btn btn-secondary" onClick={decrementHandler}>
  //           Decrement
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Home;
