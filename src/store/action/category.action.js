import axios from "../../helper/axios";
import { categoryConstansts } from "./constant";

export const getAllCategory = () => async dispatch => {

    dispatch({ type: categoryConstansts.GET_ALL_CATEGORIES_REQUEST })
    const res = await axios.get('/category/getAllCategory')
    console.log('category===',res);
    const { categories } = res.data;
        // console.log('category===',res.data)
    if (res.status === 200) {
        dispatch({
            type: categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
            payload: { categoryList: categories }
        })
    } else {
        dispatch({
            type: categoryConstansts.GET_ALL_CATEGORIES_FAILURE,
            payload: { error: res.data.error }
        })
    }
}

