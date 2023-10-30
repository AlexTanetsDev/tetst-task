import { useBucketContext } from "../bucket/useBucketContext.hook";
import SortedListItem from "./sortedListItem";

function SortedItemsList({ fromId }: { fromId: string }) {
  const { initialState } = useBucketContext();

  return (
    <ul>
      {initialState[fromId].slots?.map((slot) => (
        <SortedListItem key={slot.product?.id} slot={slot} />
      ))}
    </ul>
  );
}

export default SortedItemsList;
