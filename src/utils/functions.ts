function FormatPrice(param: number): string {
  let res: string = "";
  res = new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(param);
  return res;
}

function randomVal(min: number, max: number): number {
  let res: number = Math.floor(min + Math.random() * (max + 1 - min));
  //console.log(res);

  return res;
}

function sortFunction(
  paramA: TProduct,
  paramB: TProduct,
  paramSort: TSortedValue
) {
  let res: number = -1;
  switch (paramSort) {
    case "name":
      if (paramA.title.toLowerCase() < paramB.title.toLowerCase()) {
        res = -1;
      } else {
        res = 1;
      }
      break;
    case "price":
      res = paramB.price - paramA.price;
      break;
    case "rating":
      res = paramB.rating.rate - paramA.rating.rate;
      break;
    case "ratingcount":
      res = paramB.rating.count - paramA.rating.count;
      break;
  }
  return res;
}

export { FormatPrice, randomVal, sortFunction };
