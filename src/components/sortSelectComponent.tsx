import { useState } from "react";
import { useSortStore } from "../store/sortStore";
import { useShallow } from "zustand/shallow";

const selOptions: TSelOptions[] = [
  { value: "name", title: "По наименованию" },
  { value: "price", title: "По цене" },
  { value: "rating", title: "По рейтингу" },
  { value: "ratingcount", title: "По отзывам" },
];

export const SortSelectComponent = () => {
  const sorting: TSortedValue = useSortStore(
    useShallow((state) => state.sortValue)
  );

  const setSotrtedValue = useSortStore(
    useShallow((state) => state.setSortValue)
  );
  const [value, setValue] = useState<TSortedValue>(sorting);

  const SelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let Value: TSortedValue = event.currentTarget.value as TSortedValue;
    setValue(Value);
    setSotrtedValue(Value);
    //console.log(event.currentTarget.value);
  };

  return (
    <div className="relative p-1 before:content-['сортировать'] before:text-[0.6rem] before:absolute before:px-1 before:left-4 before:-top-1 before:text-slate-800 before:bg-white">
      <select
        name="sortedValue"
        id="sortedValue"
        className="outline-none bg-white border border-slate-500 px-2 py-1 rounded-md text-[0.8rem] overflow-hidden"
        value={value}
        onChange={SelectChange}
      >
        {selOptions.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};
