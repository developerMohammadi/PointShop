import axios from "axios";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { incrementFilter } from "./store/productSlice";

const specificCategory = async (filter: string) => {
    // setLoading(true);
    const dispatch = useDispatch<AppDispatch>();
    const res = await axios.get(
      `https://fakestoreapi.com/products/category/${filter}`
    );
    if (res.status !== 200) throw new Error();
    dispatch(incrementFilter());
    return res.data
    // setProducts(res.data);
    
    // setLoading(false);
  };
  export default specificCategory