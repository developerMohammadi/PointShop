import axios from "axios";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { incrementSort } from "./store/productSlice";

const sortProducts = async (item: string) => {
    // setLoading(true);
    const dispatch = useDispatch<AppDispatch>();
    const res = await axios.get(
      `https://fakestoreapi.com/products?sort=${item}`
    );
    if (res.status !== 200) throw new Error();
    dispatch(incrementSort());
    return res.data
    // setLoading(false);
  };
  export default sortProducts