import { useMachine } from "@xstate/react";

import { productMachine } from "../mashine/fetchMachine";
import { CardProductComponent } from "./cardProductComponent";
import { useCallback } from "react";
import { SortSelectComponent } from "./sortSelectComponent";
import { useSortStore } from "../store/sortStore";
import { useShallow } from "zustand/shallow";
import { sortFunction } from "../utils/functions";

export const ProductsComponent = () => {
  const sortValue = useSortStore(useShallow((state) => state.sortValue));
  const [current, send] = useMachine(productMachine);
  //console.log(current.context.data);
  const handleLoad = useCallback(() => {
    send({ type: "LOAD_DATA" });
  }, [send]);

  const handleIdle = useCallback(() => {
    send({ type: "IDLE" });
  }, [send]);

  return (
    <section className=" container mx-auto mt-5">
      <h3 className="w-fit mx-auto uppercase font-bold text-[24px]">
        В магазине
      </h3>
      <div className="w-fit mx-auto mt-5 flex items-center gap-x-8">
        {current.matches("idle") && (
          <button
            title="Получить данные"
            type="button"
            className="p-2 bg-slate-200 text-black/80 active:scale-90 outline outline-2 outline-slate-400/40 outline-offset-4"
            onClick={handleLoad}
          >
            Получить
          </button>
        )}
        {(current.matches("success") || current.matches("error")) && (
          <button
            type="button"
            className="p-2 bg-slate-800 text-white/90 active:scale-90 outline outline-2 outline-slate-400/40 outline-offset-4"
            onClick={handleIdle}
          >
            Повторить
          </button>
        )}
      </div>
      {current.matches("loading") && (
        <div className="w-fit mx-auto mt-5 animate-pulse">Load data...</div>
      )}
      {current.matches("error") && (
        <div className="w-fit mx-auto text-rose-500 mt-5">
          Ошибка при получении данных... Попробуйте повторить запрос!
        </div>
      )}
      {current.matches("success") && current.context.data.length > 0 && (
        <div className="w-fit mx-auto p-2 mt-2">
          <div className="flex items-start justify-evenly">
            <h5 className="text-[18px] upppercase font-bold">Продукция:</h5>
            <SortSelectComponent />
          </div>
          <ul className="mt-2 p-2 w-[95%] lg:w-[75%] xl:w-[60%] mx-auto">
            <li
              className="bg-slate-200 uppercase p-2 font-bold text-black"
              key={
                (current.context.data[0] as TProduct).id + Math.random() * 10
              }
            >
              {(current.context.data[0] as TProduct).category}
            </li>
            {(current.context.data as TProduct[])
              .sort(
                // (a: TProduct, b: TProduct) => b.rating.rate - a.rating.rate
                (a: TProduct, b: TProduct) => sortFunction(a, b, sortValue)
              )
              .map((item: TProduct) => {
                return (
                  <li key={item.id} className="my-4">
                    <CardProductComponent product={item} />
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </section>
  );
};
