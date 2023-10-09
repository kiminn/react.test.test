import { atom, selector } from "recoil";

// atom엔 두 가지 속성이 들어간다. key:전역적으로 유일한 값, default
export const CartAtom = atom({
  key: "CartAtom",
  default: [],
});

// key와 get 필요.. get method로 atom을 받아옴
export const QuantitySelector = selector({
  key: "QuantitySelector",
  get: ({ get }) => {
    const CurrentItem = get(CartAtom);
    return CurrentItem.length.toLocaleString();
  },
});

export const TotalPriceSelector = selector({
  key: "TotlaPriceSelector",
  get: ({ get }) => {
    const CurrentItem = get(CartAtom);
    return CurrentItem.reduce(
      (acc, cur) => acc + cur.price,
      0
    ).toLocaleString();
  },
});

// rclselector 
