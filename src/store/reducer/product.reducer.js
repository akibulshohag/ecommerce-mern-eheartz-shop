import { productConstants } from "../action/constant"


const initState = {
    products: [],
    productsByPrice: {
        under10K: [],
        under15K: [],
        under25K: [],
        under35K: [],
        under60K: [],
    }
}

export default (state = initState, action) => {
    switch (action.type) {
        case productConstants.GET_PRODUCTS_BY_SLUG:
            state = {
                ...state,
                products: action.payload.products,
                productsByPrice: {
                    ...action.payload.productsByPrice
                }
            }
            break;
    }
    return state;
}