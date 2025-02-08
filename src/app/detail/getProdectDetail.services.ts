import axios from "axios";
import { ProductProps } from "../page";

const getProduct  = async (id:string):Promise<ProductProps> => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    if (res.status !== 200) throw new Error();
    return res.data
  };
  export default getProduct