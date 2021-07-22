const expenseReducer = (state, action) => {
    switch(action.type) {
        case "DELETE_TRANSACTION":
            return state.filter((transaction) => transaction.id !== action.payload);
        case "ADD_TRANSACTION":
            return [action.payload, ...state];
        default:
            return state;
    };
};

export default expenseReducer;