"use client";

import { ApiHandler } from "../bucket/apiHandler";
import { useBucketContext } from "../bucket/useBucketContext.hook";
import { IOrderSlot } from "../types/types";
import BucketListItem from "./bucketListItem";

const newSlot: IOrderSlot = {
  owner: {
    id: "ownerID-1",
  },
  order: {
    id: "orderId-1",
  },
  warehouse: {
    id: "from-1",
  },
  product: {
    id: "productId-342",
    label: "some shoes",
    price: {
      out: 123,
    },
    productPhoto: "some url",
  },
  quantity: 34,
};

function Bucket() {
  const { initialState, setInitialState } = useBucketContext();
  const handleAddSlot = async () => {
    const res = await ApiHandler.addBucketSlots(newSlot);
    const slots = await ApiHandler.getGroupedBucketSlots();
    setInitialState(slots);
    console.log(res);
  };

  return (
    <div className=" bg-slate-400 p-14 flex flex-col items-center justify-center">
      <button type="button" onClick={handleAddSlot}>
        Add slot
      </button>

      <ul className=" self-center mx-auto w-[500px] flex flex-col gap-2">
        {Object.keys(initialState).map((key) => (
          <BucketListItem fromId={key} key={key} />
        ))}
      </ul>
    </div>
  );
}

export default Bucket;
