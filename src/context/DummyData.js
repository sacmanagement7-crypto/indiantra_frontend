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
    { id: 1, name: "Handloom Cotton Kurta", price: 999, category: "Clothing", image: `${Shawl}` },
    { id: 2, name: "Banarasi Silk Saree", price: 3499, category: "Clothing", image: `${Banarasi}` },
    { id: 3, name: "Khadi Nehru Jacket", price: 1499, category: "Clothing", image: `${Jacket}` },
    { id: 4, name: "Cotton Printed Dupatta", price: 499, category: "Clothing", image: `${Dupatta}` },
    { id: 5, name: "Handwoven Wool Shawl", price: 1999, category: "Clothing", image: `${Shawl}` },
    { id: 6, name: "Block Print Kurti", price: 899, category: "Clothing", image: `${Kurta}` },
    { id: 7, name: "Terracotta Clay Pot", price: 399, category: "Handmade", image: `${HomeMade}` },
    { id: 8, name: "Handmade Jute Bag", price: 599, category: "Handmade", image: `${HomeMade2}` },
    { id: 9, name: "Wooden Spice Box", price: 799, category: "Handmade", image: `${HomeMade3}` },
    { id: 10, name: "Brass Diya Lamp", price: 999, category: "Handmade", image: `${HomeMade4}` },
    { id: 11, name: "Madhubani Painting", price: 2499, category: "Handmade", image: `${HomeMade}` },
    { id: 12, name: "Handwoven Bamboo Basket", price: 499, category: "Handmade", image: `${HomeMade2}` },
     { id: 32, name: "Kadai", price: 209, category: "Handmade", image: `${mitti}` },
    { id: 13, name: "Wooden Wall Hanging", price: 1299, category: "Home Decor", image: `${HomeDecor1}` },
    { id: 14, name: "Handcrafted Table Lamp", price: 1599, category: "Home Decor", image: `${HomeDecor2}` },
    { id: 15, name: "Ceramic Flower Vase", price: 899, category: "Home Decor", image: `${HomeDecor3}` },
    { id: 16, name: "Macrame Wall Hanging", price: 1199, category: "Home Decor", image: `${HomeDecor4}` },
    { id: 17, name: "Brass Buddha Idol", price: 2499, category: "Home Decor", image: `${HomeDecor5}` },
    { id: 18, name: "Handloom Cushion Cover Set", price: 799, category: "Home Decor", image: `${HomeDecor1}` },
    { id: 33, name: "Arti Machine", price: 5599, category: "Home Decor", image: `${item1}` },
    { id: 19, name: "Organic Basmati Rice (5kg)", price: 899, category: "Groceries", image: `${Herbal}` },
    { id: 20, name: "Cold Pressed Mustard Oil", price: 299, category: "Groceries", image: `${Herbal1}` },
    { id: 21, name: "Organic Turmeric Powder", price: 219, category: "Groceries", image: `${Herbal2}` },
    { id: 22, name: "Whole Wheat Atta (10kg)", price: 450, category: "Groceries", image: `${Herbal3}` },
    { id: 23, name: "Raw Honey (500ml)", price: 349, category: "Groceries", image: `${Herbal4}` },
    { id: 24, name: "Organic Green Tea", price: 299, category: "Groceries", image: `${Herbal}` },
    { id: 25, name: "Ashwagandha Churna", price: 299, category: "Ayurvedic Products", image: `${HomeMade}` },
    { id: 26, name: "Triphala Powder", price: 249, category: "Ayurvedic Products", image: `${HomeMade3}` },
    { id: 27, name: "Brahmi Capsules", price: 399, category: "Ayurvedic Products", image: `${HomeMade2}` },
    { id: 28, name: "Neem Oil (200ml)", price: 219, category: "Ayurvedic Products", image: `${HomeMade4}` },
    { id: 29, name: "Aloe Vera Gel", price: 349, category: "Ayurvedic Products", image: `${HomeMade}` },
    { id: 30, name: "Chyawanprash (1kg)", price: 549, category: "Ayurvedic Products", image: `${HomeMade2}`},
    { id: 31, name: "Home Made Ghee", price: 999, category: "Ayurvedic Products", image: `${Ghee}` },
]   


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
