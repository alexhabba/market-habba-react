const defaultState = {
    user: {
        token: "",
        roles: [],
    }
}

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "USER":
            state.user.roles.push(action.roles)
            return {...state, user: {token: action.token}}
        default:
            return state;
    }
}