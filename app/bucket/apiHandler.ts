import axios, { AxiosInstance, AxiosResponse } from "axios";
import { IGropedSlots, IMockapiEndpointsMap, IOrderSlot } from "../types/types";
import bucketSlotsGrouperByWarehouse from "../helpers/bucketSlotsGrouperByWarehouse";

export class ApiHandler {
  private static BASE_URL: string =
    "https://653e47d0f52310ee6a9ac528.mockapi.io/api/";

  private static client: AxiosInstance = axios.create({
    baseURL: this.BASE_URL,
  });

  private static apiEndpoints: IMockapiEndpointsMap = {
    getOrderSlots: "ordersSlots",
    getSlotById(id) {
      return `ordersSlots/${id}`;
    },
    addSlot: "ordersSlots",
    updateSlotById(id) {
      return `ordersSlots/${id}`;
    },
    deleteSlotById(id) {
      return `ordersSlots/${id}`;
    },
  };

  public static async getBucketSlots(): Promise<AxiosResponse<IOrderSlot[]>> {
    return this.client.get(this.apiEndpoints.getOrderSlots);
  }

  public static async getGroupedBucketSlots() {
    const initialData: IOrderSlot[] = (await this.getBucketSlots()).data;
    return bucketSlotsGrouperByWarehouse(initialData);
  }

  public static async addBucketSlots(
    slot: IOrderSlot
  ): Promise<AxiosResponse<IOrderSlot[]>> {
    const res = this.client.post(this.apiEndpoints.addSlot, slot);
    return (await res).data;
  }

  public static async deleteBucketSlotById(
    id: string
  ): Promise<AxiosResponse<IOrderSlot[]>> {
    const res = this.client.delete(this.apiEndpoints.deleteSlotById(id));
    return (await res).data;
  }

  public static async updateSlotById(
    id: string,
    updatedSlot: IOrderSlot
  ): Promise<AxiosResponse<IOrderSlot[]>> {
    const res = this.client.put(
      this.apiEndpoints.updateSlotById(id),
      updatedSlot
    );
    return (await res).data;
  }
}
