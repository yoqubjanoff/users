

export const initialState = {
	userData: {
		name: '',
		avatar: '',
		price: 0,
		description: '',
		manufacture: '',
		size: 0,
	},
	selected: {},
	blogList: [],
	users: [],
};


export const reducer = (state, action) => {
	switch (action.type) {
		case 'setUsers':
			return { ...state, users: action.payload };
		case 'setSelected':
			return { ...state, selected: action.payload };
		case 'searchUsers':
			return { ...state, userData: action.payload };
		default:
			return state;
	}
};
