export default function reducerBase(reducers, defaultState) {
    return function (state = defaultState, action) {
        if (reducers.hasOwnProperty(action.type)) {
            return reducers[action.type](state, action.payload);
        }
        return state;
    }
}