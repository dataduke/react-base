const user = (state = {}, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return Object.assign({}, state, {name: action.name});
        case 'SET_AGE':
            return Object.assign({}, state, {age: action.age});
        case 'RESET_APP':
            return Object.assign({}, state, {name: action.name, age: action.age});
        default:
            return state;
    }
}

export default user;