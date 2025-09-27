import Shawl from "../assets/Clothing/Shawl.png"
import Banarasi from "../assets/Clothing/BanarasiSaree.png"
import Jacket from "../assets/Clothing/Jacket.png"
import Dupatta from "../assets/Clothing/Dupatta.png"
import Kurta from "../assets/Clothing/Kurta.png"
import HomeMade from "../assets/HomeMade.png"
import HomeMade2 from "../assets/HomeMade2.png"
import HomeMade3 from "../assets/HomeMade3.png"
import HomeMade4 from "../assets/HomeMade4.png"
import HomeDecor1 from "../assets/HomeDecor1.png"
import HomeDecor2 from "../assets/HomeDecor2.png"
import HomeDecor3 from "../assets/HomeDecor3.png"
import HomeDecor4 from "../assets/HomeDecor4.png"
import HomeDecor5 from "../assets/HomeDecor5.png"
import Herbal from "../assets/Herbal.png"
import Herbal1 from "../assets/Herbal1.png"
import Herbal2 from "../assets/Herbal2.png"
import Herbal3 from "../assets/Herbal3.png"
import Herbal4 from "../assets/Herbal4.png"
import item1 from "../assets/item1.webp"
import mitti from "../assets/mitticool-handi.webp"
import Ghee from "../assets/Ghee.webp"
import Clothing from "../assets/Clothing.png"
import Grocery from "../assets/Grocery.png"
import Handicrafts from "../assets/Handicrafts.png"
import jwelery from "../assets/jwelery.png"
import Home from "../assets/Home.png"

export const Products = [
  {
    id: 1,
    name: "Handloom Cotton Kurta",
    price: 999,
    category: "Clothing",
    images: [Shawl, Kurta, Dupatta],
  },
  {
    id: 2,
    name: "Banarasi Silk Saree",
    price: 3499,
    category: "Clothing",
    images: [Banarasi, Dupatta, Shawl],
  },
  {
    id: 3,
    name: "Khadi Nehru Jacket",
    price: 1499,
    category: "Clothing",
    images: [Jacket, Kurta, Shawl],
  },
  {
    id: 4,
    name: "Cotton Printed Dupatta",
    price: 499,
    category: "Clothing",
    images: [Dupatta, Kurta, Shawl],
  },
  {
    id: 5,
    name: "Handwoven Wool Shawl",
    price: 1999,
    category: "Clothing",
    images: [Shawl, Jacket, Banarasi],
  },
  {
    id: 6,
    name: "Block Print Kurti",
    price: 899,
    category: "Clothing",
    images: [Kurta, Dupatta, Shawl],
  },
  {
    id: 7,
    name: "Terracotta Clay Pot",
    price: 399,
    category: "Handmade",
    images: [HomeMade, HomeMade2, HomeMade3],
  },
  {
    id: 8,
    name: "Handmade Jute Bag",
    price: 599,
    category: "Handmade",
    images: [HomeMade2, HomeMade, HomeMade4],
  },
  {
    id: 9,
    name: "Wooden Spice Box",
    price: 799,
    category: "Handmade",
    images: [HomeMade3, HomeMade2, HomeMade],
  },
  {
    id: 10,
    name: "Brass Diya Lamp",
    price: 999,
    category: "Handmade",
    images: [HomeMade4, HomeMade, HomeMade2],
  },
  {
    id: 11,
    name: "Madhubani Painting",
    price: 2499,
    category: "Handmade",
    images: [HomeMade, HomeMade2, HomeMade3],
  },
  {
    id: 12,
    name: "Handwoven Bamboo Basket",
    price: 499,
    category: "Handmade",
    images: [HomeMade2, HomeMade3, HomeMade4],
  },
  {
    id: 32,
    name: "Kadai",
    price: 209,
    category: "Handmade",
    images: [mitti, HomeMade, HomeMade2],
  },
  {
    id: 13,
    name: "Wooden Wall Hanging",
    price: 1299,
    category: "Home Decor",
    images: [HomeDecor1, HomeDecor2, HomeDecor3],
  },
  {
    id: 14,
    name: "Handcrafted Table Lamp",
    price: 1599,
    category: "Home Decor",
    images: [HomeDecor2, HomeDecor1, HomeDecor4],
  },
  {
    id: 15,
    name: "Ceramic Flower Vase",
    price: 899,
    category: "Home Decor",
    images: [HomeDecor3, HomeDecor2, HomeDecor5],
  },
  {
    id: 16,
    name: "Macrame Wall Hanging",
    price: 1199,
    category: "Home Decor",
    images: [HomeDecor4, HomeDecor1, HomeDecor2],
  },
  {
    id: 17,
    name: "Brass Buddha Idol",
    price: 2499,
    category: "Home Decor",
    images: [HomeDecor5, HomeDecor3, HomeDecor4],
  },
  {
    id: 18,
    name: "Handloom Cushion Cover Set",
    price: 799,
    category: "Home Decor",
    images: [HomeDecor1, HomeDecor2, HomeDecor3],
  },
  {
    id: 33,
    name: "Arti Machine",
    price: 5599,
    category: "Home Decor",
    images: [item1, HomeDecor1, HomeDecor2],
  },
  {
    id: 19,
    name: "Organic Basmati Rice (5kg)",
    price: 899,
    category: "Groceries",
    images: [Herbal, Herbal1, Herbal2],
  },
  {
    id: 20,
    name: "Cold Pressed Mustard Oil",
    price: 299,
    category: "Groceries",
    images: [Herbal1, Herbal, Herbal3],
  },
  {
    id: 21,
    name: "Organic Turmeric Powder",
    price: 219,
    category: "Groceries",
    images: [Herbal2, Herbal1, Herbal],
  },
  {
    id: 22,
    name: "Whole Wheat Atta (10kg)",
    price: 450,
    category: "Groceries",
    images: [Herbal3, Herbal, Herbal4],
  },
  {
    id: 23,
    name: "Raw Honey (500ml)",
    price: 349,
    category: "Groceries",
    images: [Herbal4, Herbal1, Herbal],
  },
  {
    id: 24,
    name: "Organic Green Tea",
    price: 299,
    category: "Groceries",
    images: [Herbal, Herbal2, Herbal3],
  },
  {
    id: 25,
    name: "Ashwagandha Churna",
    price: 299,
    category: "Ayurvedic Products",
    images: [HomeMade, HomeMade2, HomeMade3],
  },
  {
    id: 26,
    name: "Triphala Powder",
    price: 249,
    category: "Ayurvedic Products",
    images: [HomeMade3, HomeMade, HomeMade4],
  },
  {
    id: 27,
    name: "Brahmi Capsules",
    price: 399,
    category: "Ayurvedic Products",
    images: [HomeMade2, HomeMade, HomeMade3],
  },
  {
    id: 28,
    name: "Neem Oil (200ml)",
    price: 219,
    category: "Ayurvedic Products",
    images: [HomeMade4, HomeMade2, HomeMade],
  },
  {
    id: 29,
    name: "Aloe Vera Gel",
    price: 349,
    category: "Ayurvedic Products",
    images: [HomeMade, HomeMade3, HomeMade2],
  },
  {
    id: 30,
    name: "Chyawanprash (1kg)",
    price: 549,
    category: "Ayurvedic Products",
    images: [HomeMade2, HomeMade, HomeMade4],
  },
  {
    id: 31,
    name: "Home Made Ghee",
    price: 999,
    category: "Ayurvedic Products",
    images: [Ghee, HomeMade, Herbal4],
  },
];
 


export const Categories = [{
    id:1,
    image:`${Home}`,
    name:"All"
},
  {
    id: 2,
    image: `${Clothing}`, 
    name:"Clothing"// adjust path
  },
  {
    id: 3,
    image: `${Grocery}`,
    name:"Groceries"
  },
  {
    id: 4,
    image: `${Herbal}`,
    name:"Ayurvedic Products"
  },
  {
    id: 5,
    image: `${Handicrafts}`,
    name:"Handmade"
  },
  {
    id: 6,
    image: `${Home}`,
    name:"Home Decor"
  },
  {
    id: 7,
    image: `${jwelery}`,
    name:"Jwelery"
  },
];
