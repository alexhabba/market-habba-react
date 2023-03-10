const defaultState = {
    cach: 1,
    isManager: true,
    isShowManagerPanel: false,
    newImageProductList: []
}

export const reducerTest = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD":
            return {...state, cach: state.cach + action.payload}
        case "SHOW_ADMIN_PANEL":
            return {...state, isShowManagerPanel: !state.isShowManagerPanel}
        default:
            return state;
    }
}