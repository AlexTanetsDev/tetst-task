"use client";

import { useBucketContext } from "../bucket/useBucketContext.hook";
import SortedItemsList from "./sortedItemsList";

function BucketListItem({ fromId }: { fromId: string }) {
  return (
    <li className=" rounded-md bg-slate-100">
      <p>{fromId}</p>

      <SortedItemsList fromId={fromId} />
    </li>
  );
}

export default BucketListItem;
