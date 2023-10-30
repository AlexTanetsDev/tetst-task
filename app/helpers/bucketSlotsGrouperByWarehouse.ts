import { IGropedSlots, IOrderSlot } from "../types/types";

export default function bucketSlotsGrouperByWarehouse(
  initialData: IOrderSlot[]
) {
  const groupedData: IGropedSlots = {};

  initialData.forEach((slot) => {
    if (Object.keys(groupedData).includes(slot.warehouse!.id)) {
      groupedData[slot.warehouse!.id].slots?.push(slot);
      return;
    }
    groupedData[slot.warehouse!.id] = { slots: [slot] };
  });
  return groupedData;
}
