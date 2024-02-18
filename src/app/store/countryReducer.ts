const initialState = {
    country: {
        id: 0,
        name: '',
        states: []
    }
}

export function countryReducer(state: any = initialState, action: any) {
    switch (action.type) {
        case '[Demo Component] updateCountry': {
            return { ...state, ...action.country }
        }
        default: return state;
    }
}