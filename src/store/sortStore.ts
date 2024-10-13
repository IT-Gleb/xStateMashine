import { create } from "zustand";

type TState = {
  sortValue: TSortedValue;
};

type TActions = {
  setSortValue: (paramVal: TSortedValue) => void;
};

export const useSortStore = create<TState & TActions>((set) => ({
  sortValue: "price",
  setSortValue: (paramVal: TSortedValue) =>
    set(() => ({ sortValue: paramVal })),
}));
