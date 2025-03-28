import { useState, useEffect } from "react";
import SelectedItems from "./SelectedItems";
import { useDispatch, useSelector } from "react-redux";
import { getBags } from "../../features/bagSlice";

const Bag = () => {
  const dispatch = useDispatch();
  // const [items, setItems] = useState([
  //   { name: "Roadster", price: 207, qty: 1 },
  //   { name: "Zeesh", price: 8199, qty: 1 },
  // ]);
  const { data: items } = useSelector((state) => state.bag);
  const [totalMRP, setTotalMRP] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    dispatch(getBags());
  }, []);
  useEffect(() => {
    let total = items.reduce((acc, item) => acc + item.price * item.qty, 0);
    setTotalMRP(total);
    setTotalAmount(total);
  }, [items]);

  return (
    <div className="px-5 w-5xl mx-auto flex h-full  border min-h-10  border-gray-200 rounded">
      <div className="w-[60%] mt-10 h-full pr-4 flex flex-col ">
        <div className="mb-5 border border-gray-200 p-2  flex justify-between items-center">
          <div>
            <h3>Deliver To:</h3>
            <p id="deliveryAddress">Dcxcvc, 272126</p>
          </div>
          <div>
            <button
              id="changeAddress"
              className="mt-2 px-5 py-2 bg-white text-red-600 rounded border border-red-500 text-xs font-bold"
            >
              CHANGE ADDRESS
            </button>
          </div>
        </div>
        <div>
          <div className="mb-5 p-2 border border-gray-200">
            <h4>Available Offers</h4>
            <p>
              7.5% Instant Discount on Axis Bank Credit Card on a min spend of
              ₹3,500.
            </p>
          </div>
        </div>
        <div>{<SelectedItems items={items} />}</div>
      </div>
      {/* {right Side} */}
      <div className="w-[40%] border-l-2 mt-10 pl-4 h-full border-gray-200  ">
        <div className="mb-5 ">
          <h4>Coupons</h4>
          <input
            type="text"
            id="couponInput"
            placeholder="Apply Coupons"
            className="border p-1"
          />
          <button
            id="applyCoupon"
            className="mt-2 px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700"
          >
            Apply
          </button>
        </div>

        <div className="mb-5">
          <h4>Price Details</h4>
          <p>
            Total MRSP: ₹<span>{totalMRP}</span>
          </p>
          <p>
            Discount on MRSP: -₹<span>0</span>
          </p>
          <p>
            Total Amount: ₹<span>{totalAmount}</span>
          </p>
        </div>

        <button
          id="placeOrder"
          className="mt-2 px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700"
          onClick={() => alert("Order placed successfully!")}
        >
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default Bag;
