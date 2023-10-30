import { ApiHandler } from "../bucket/apiHandler";
import { useBucketContext } from "../bucket/useBucketContext.hook";
import { IOrderSlot } from "../types/types";

function SortedListItem({ slot }: { slot: IOrderSlot }) {
  const { initialState, setInitialState } = useBucketContext();

  const price = slot?.product?.price?.out;
  const quantity = slot.quantity;
  let total: number = getTotal(price, quantity);

  const handleDelete = async () => {
    if (!slot.id) return;

    const res = await ApiHandler.deleteBucketSlotById(slot.id);
    console.log("slot was deleted :", res);
    const slots = await ApiHandler.getGroupedBucketSlots();
    setInitialState(slots);
  };

  const handleIncrement = async () => {
    if (slot.quantity && slot.id) {
      const updatedSlot = { ...slot, quantity: slot.quantity + 1 };
      const res = await ApiHandler.updateSlotById(slot.id, updatedSlot);
      console.log("quantity was updated :", res);
      const slots = await ApiHandler.getGroupedBucketSlots();
      setInitialState(slots);
    }
  };

  const handleDecrement = async () => {
    if (slot.quantity && slot.id) {
      const updatedSlot = { ...slot, quantity: slot.quantity - 1 };
      const res = await ApiHandler.updateSlotById(slot.id, updatedSlot);
      console.log("quantity was updated :", res);
      const slots = await ApiHandler.getGroupedBucketSlots();
      setInitialState(slots);
    }
  };

  return (
    <li className=" border-y-2">
      <h3>Label: {slot.product?.label}</h3>
      <p>{slot.product?.id}</p>
      <p>
        Quantity: {slot.quantity}
        <span
          className=" mx-1 cursor-pointer  bg-slate-500 rounded-full p-1 w-6 h-6 text-white inline-flex items-center justify-center"
          onClick={handleIncrement}
        >
          +
        </span>
        <span
          className=" bg-slate-500 rounded-full p-1 cursor-pointer w-6 h-6 text-white inline-flex items-center justify-center"
          onClick={handleDecrement}
        >
          -
        </span>
      </p>
      <p>Price: {slot.product?.price?.out}</p>
      <p>Total: {total}</p>
      <button
        type="button"
        className=" w-36 bg-gray-500 text-fuchsia-50 p-1 "
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
}

export default SortedListItem;

function getTotal(price: number | undefined, quantity: number | undefined) {
  if (price && quantity) return quantity * price;
  return 0;
}
