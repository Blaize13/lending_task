import blackTShirt from "../assets/images/card-images/black-t-shirt.png";
import skinnyJeans from "../assets/images/card-images/skinny-jeans.png";
import checkeredShirt from "../assets/images/card-images/checkered-shirt.png";
import stripedTShirt from "../assets/images/card-images/striped-t-shirt.png";
import stripedShirt from "../assets/images/card-images/striped-shirt.png";
import graphicTShirt from "../assets/images/card-images/graphic-t-shirt.png";
import bermudaShorts from "../assets/images/card-images/bermuda-shorts.png";
import fadedSkinnyJeans from "../assets/images/card-images/faded-skinny-jeans.png";
import contrastTrims from "../assets/images/card-images/polp-contrast-trims.png";
import gradientTShirt from "../assets/images/card-images/gradient-graphic-t-shirt.png";
import poloDetails from "../assets/images/card-images/polo-tipping-details.png";
import blackStripedTShirt from "../assets/images/card-images/black-striped-t-shirt.png";

export interface ICrad {
  id: number;
  imgSrc: string;
  cardTitle: string;
  rate: number;
  price: number;
  discount?: number;
}

export const newArrivals = [
  {
    id: 1,
    imgSrc: blackTShirt,
    cardTitle: "T-shirt With Tape Details",
    rate: 4.5,
    price: 120,
  },
  {
    id: 2,
    imgSrc: skinnyJeans,
    cardTitle: "Skinny Fit Jeans",
    rate: 3.5,
    price: 260,
    discount: 20,
  },

  {
    id: 3,
    imgSrc: checkeredShirt,
    cardTitle: "Checked Shirt",
    rate: 4.5,
    price: 180,
  },

  {
    id: 4,
    imgSrc: stripedTShirt,
    cardTitle: "Sleeve Striped T-shirt",
    rate: 4.5,
    price: 160,
    discount: 30,
  },
];

export const topSelling = [
  {
    id: 1,
    imgSrc: stripedShirt,
    cardTitle: "Vertical Striped Shirt",
    rate: 5,
    price: 232,
    discount: 20,
  },
  {
    id: 2,
    imgSrc: graphicTShirt,
    cardTitle: "Courage Graphic T-shirt",
    rate: 4,
    price: 145,
  },
  {
    id: 3,
    imgSrc: bermudaShorts,
    cardTitle: "Loose Fit Bermuda Shorts",
    rate: 3,
    price: 80,
  },
  {
    id: 4,
    imgSrc: fadedSkinnyJeans,
    cardTitle: "Faded Skinny Jeans",
    rate: 4.5,
    price: 210,
  },
];

export const alsoLike = [
  {
    id: 1,
    imgSrc: contrastTrims,
    cardTitle: "Polo with Contrast Trims",
    rate: 4,
    price: 242,
    discount: 20,
  },
  {
    id: 2,
    imgSrc: gradientTShirt,
    cardTitle: "Gradient Graphic T-shirt",
    rate: 3.5,
    price: 145,
  },
  {
    id: 3,
    imgSrc: poloDetails,
    cardTitle: "Polo with Tipping Details",
    rate: 4.5,
    price: 180,
  },
  {
    id: 4,
    imgSrc: blackStripedTShirt,
    cardTitle: "Black Striped T-shirt",
    rate: 5,
    price: 150,
    discount: 30,
  },
];
