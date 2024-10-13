type TRating = {
  rate: number;
  count: number;
};

declare type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: TRating;
};

declare type TSortedValue = "name" | "price" | "rating" | "ratingcount";

declare type TSelOptions = {
  value: TSortedValue;
  title: string;
};

declare type TSortFunction = (
  paramA: TProduct,
  paramB: TProduct,
  paramSort: TSortedValue
) => number;
