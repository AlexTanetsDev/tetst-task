export interface IBase {
  id: string;
}

export interface IProduct extends IBase {
  label?: string;
  warehouse?: IBase;
  price?: IPriceBase;
  sku?: string;
  productPhoto?: string;
}

export enum ProductTypeEnum {
  goods = "goods",
  service = "service",
}
export interface AmountAndPercentage {
  amount?: number;
  percentage?: number;
}
export type PriceAmountAndPercentageFieldsKey =
  | "discount"
  | "cashback"
  | "bonus"
  | "markup"
  | "commission"
  | "tax"
  | "vat";

export interface PriceAmountAndPercentageFields
  extends Record<PriceAmountAndPercentageFieldsKey, AmountAndPercentage> {}

export interface IPriceBase extends Partial<PriceAmountAndPercentageFields> {
  label?: string;

  //   in?: number;
  out?: number; //! must have

  discountLabel?: string;
  cashbackLabel?: string;
}

//?
export interface IOrderSlotBase extends IPriceBase {
  quantity?: number; //?
  total?: number; //?
  //   status?: OrderStatusEnum;

  product?: IProduct;
  variation?: IVariation;
  origin?: Partial<IPriceBase>; //?
  inventory?: IBase; //! з якої партії
  warehouse?: IBase;
  id?: string; //??? i`m add
}

//! відмальовую це. групувати по wherehouse id
export interface IOrderSlot extends IPriceBase, IOrderSlotBase {
  owner?: IBase;
  order?: IBase;

  //   shipment?: IShipment;
}

export interface IGropedSlots {
  [key: string]: { slots: IOrderSlot[] };
}

//! -----------------------------
const orderslot: IOrderSlot = {
  owner: {
    id: "owner-Id",
  },
  order: {
    id: "order id",
  },
  warehouse: {
    id: "where ID",
  },
  product: {
    id: "some product id",
    label: "sone shoes",
    price: {
      out: 123,
    },
    productPhoto: "some url",
  },
  quantity: 15,
  total: 350,
};
//!------------------------------

//? temporary
export interface IOrderTempSlot extends IOrderSlotBase {
  tempId?: string;
}

export interface IVariationBase {
  label?: string;
  warehouse?: IBase;
  price?: IPriceBase;
  sku?: string;
}

export interface IVariation extends IVariationBase, IBase {
  owner?: IBase;

  product?: IProduct;
  price?: IPriceBase;
  //   inventories?: IProductInventory[];

  properties?: IPropertyValue[];
}

export interface IPropertyBase extends IBase {
  label?: string;
  type?: ProductTypeEnum;
  isSelectable?: boolean;

  parent?: IPropertyBase;
  childrenList?: IPropertyBase[];
}

export interface IVariationTemplate extends Omit<IPropertyBase, "parent"> {
  childrenList?: IProperty[];
}
export interface IProperty extends IPropertyBase {
  parent?: IVariationTemplate;
  childrenList?: IPropertyValue[];
}

export interface IPropertyValue extends Omit<IPropertyBase, "childrenList"> {
  parent?: IProperty;
}

export interface IMockapiEndpointsMap {
  getOrderSlots: string;
  getSlotById: (id: string) => string;
  addSlot: string;
  updateSlotById: (id: string) => string;
  deleteSlotById: (id: string) => string;
}
