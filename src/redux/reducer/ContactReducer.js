const initial_state = [
    {
        id: 1,
        first_name: 'Christopher',
        last_name: 'Delos Reyes',
        middle_name: 'Cinco',
        mobile_no: '09972686236',
        email: 'delosreyeschris77@gmail.com'
    },
    {
        id: 2,
        first_name: 'Mike',
        last_name: 'Cargajente',
        middle_name: '',
        mobile_no: '09976236268',
        email: 'cargajentemike@gmail.com'
    }
];

const contactReducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            state = [...state, action.payload];
            return state;
        case 'UPDATE_CONTACT':
            const updated_state = state.map(contact => contact.id === action.payload.id ? action.payload : contact);
            state = updated_state
            return state;
        case 'DELETE_CONTACT':
            const deleted_state = state.filter(contact => contact.id !== action.payload);
            state = deleted_state;
            return state;
        default:
            return state
    }
}

export default contactReducer;