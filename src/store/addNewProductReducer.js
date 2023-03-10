const defaultState = {
    product: {
        name: "",
        category: "",
        price: 0,
        newImageProductList: []
    }
}

export const addNewProductReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_FOTO":
            state.product.newImageProductList.push(action.payload)
            return {...state, state}
        default:
            return state;
    }
}