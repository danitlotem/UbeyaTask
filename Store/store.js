import {createStore} from 'redux';

const Reducer = (state = {lastMessage: '', massages: []}, action) => {
	if (action.type === 'MESSAGE_SENT') {
		return {
			...state,
			lastMessage: action.newMessage,
			massages: [...state.massages, action.newMessage],
		};
	}

	return state;
};

const store = createStore(Reducer, {
	lastMessage: '',
	massages: [],
});

export default store;
