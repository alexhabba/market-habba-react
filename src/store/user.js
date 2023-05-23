const defaultState = {
    user: {
        token: "",
        role: "",
    }
}

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "USER":
            const role = action.roles.contains("ADMIN") ? "ADMIN" : action.roles.contains("SUPER_ADMIN") ? "SUPER_ADMIN" : "USER"
            return {...state, user: {token: action.token, role: role}}
        default:
            return state;
    }
}