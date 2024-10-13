import { useEffect, useState } from "react";
import { FormatPrice, randomVal } from "../utils/functions";
import { motion } from "framer-motion";
import { CardClipButtonComponent } from "./cardClipButtonComponent";

export const CardProductComponent = ({ product }: { product: TProduct }) => {
  const [starText, setStarText] = useState<string>(
    String.fromCodePoint(128526)
  );

  useEffect(() => {
    let st: string = "";
    let all: number = product.rating.rate;
    let num: number = Math.floor(all);
    let maxLength: number = 10;
    for (let i: number = 0; i < num; i++) {
      st += String.fromCodePoint(128516);
    }
    let condition: boolean = (all - num) * 10 >= 5 ? true : false;
    //console.log(st.length);
    if (condition) {
      while (st.length < maxLength) {
        st += String.fromCodePoint(129300);
      }
    } else {
      while (st.length < maxLength) {
        st += String.fromCodePoint(128556);
      }
    }

    setStarText(st);
  }, [product.rating.rate]);

  return (
    <motion.article
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: [-randomVal(100, 450), 0], opacity: 1 }}
      className="flex flex-col w-full overflow-hidden"
    >
      <header className="bg-slate-700 text-white p-2 text-[0.8rem] font-bold md:text-[1.1rem] md:font-normal">
        <div className="flex items-start flex-wrap gap-x-2 justify-between md:grid md:grid-cols-[1.9fr_25px] md:px-2 md:py-1">
          {product.title}
          <CardClipButtonComponent
            paramText={
              product.title.toUpperCase() +
              " " +
              product.description +
              " Price=" +
              product.price
            }
          />
        </div>
      </header>
      <main className=" md:grid md:grid-cols-[0.5fr_1fr] gap-y-2 py-2">
        <div className=" mx-auto w-[220px] md:mx-0 object-center rounded-xl md:shadow-xl p-2 overflow-hidden md:row-span-3">
          <img
            className="w-full"
            src={product.image}
            alt="image"
            loading="lazy"
          />
        </div>
        <p className="pl-2 xl:pl-0 mt-2 md:mt-0 indent-3 first-letter:capitalize pr-2 text-[0.9rem] md:text-[1rem]">
          {product.description}
        </p>
        <div></div>
        <div className="mt-4 md:mt-0 text-right pr-4 text-[1.2rem] border-t-2 border-t-slate-400 relative before:content-['Рейтинг'] before:absolute before:left-2 before:-top-3 before:text-[0.85rem] before:bg-white before:text-black before:px-1 font-thin ">
          <span className="text-[0.85rem] font-semibold mr-8">{starText}</span>
          {product.rating.rate}
          <div>
            <span className="mr-10 text-[0.85rem] font-bold uppercase">
              Отзывов:
            </span>
            <span className="font-medium">{product.rating.count} </span>
          </div>
        </div>
        <div></div>
        <div className="mt-4 md:mt-0 text-right pr-4 text-[2.5rem] border-t-2 border-t-slate-400 relative before:content-['Цена'] before:absolute before:left-2 before:-top-3 before:text-[0.85rem] before:bg-white before:text-black before:px-1 font-thin ">
          <motion.div
            whileHover={{ scaleY: 1.2 }}
            className="w-fit ml-auto cursor-pointer"
          >
            {FormatPrice(product.price)}
          </motion.div>
        </div>
      </main>
      <footer className="mt-1 bg-slate-950 w-full p-1 text-[0.65rem] text-white text-center">
        --- &copy; All Right Reserved ---
      </footer>
    </motion.article>
  );
};
