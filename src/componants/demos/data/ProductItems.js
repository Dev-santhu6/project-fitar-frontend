import sheenchair from "../assets/models/sheenchair.glb";
import ioschair from "../assets/models/sheenchair.usdz";
import painting from "../assets/models/Painting.glb";
import iospainting from "../assets/models/Painting.usdz";
import chairs from "../assets/models/the_kungsara_bench.glb";
import ioschairs from "../assets/models/scene.usdc";


const productItems = [
  {
    id: 1,
    name: "Sheen Chair",
    modelSrc: sheenchair,
    iOSSrc: ioschair,
    category: "Furniture",
    color: "Orange",
  },
  {
    id: 2,
    name: "Painting",
    modelSrc: painting,
    iOSSrc: iospainting,
    category: "Art",
    color: "Brown",
  }, {
    id: 3,
    name: "Chairs",
    modelSrc:chairs,
    iOSSrc: ioschairs,
    category: "Furniture",
    color: "Orange",
  }
];
export default productItems;
