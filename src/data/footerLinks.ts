export interface IFooterLinks {
  id: number;
  title: string;
  links: string[];
}

export const footerLinks = [
  {
    id: 1,
    title: "Company",
    links: ["About", "Features", "Works", "Career"],
  },
  {
    id: 2,
    title: "Help",
    links: [
      "Customer Support",
      "Delivery Details",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    id: 3,
    title: "FAQ",
    links: ["Account", "Manage Deliveries", "Orders", "Payments"],
  },
  {
    id: 4,
    title: "Resources",
    links: [
      "Free eBooks",
      "Development Tutorial",
      "How to - Blog",
      "Youtube Playlist",
    ],
  },
];
