import moment from 'moment';

// Filter reducer
const filtersReducerDefaultState = {
    text: '', 
    sortBy: 'date', 
    startDate: moment().startOf('month'), 
    endDate: moment().endOf('month')
};

const filterReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state, 
                text: action.text
            };
        case 'SORT_BY_AMOUNT_FILTER':
            // Fall through the SORT_BY_AMOUNT_FILTER case
        case 'SORT_BY_DATE_FILTER':
            return {
                ...state,
                sortBy: action.sortBy
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default: 
            return state;
    }
};

export default filterReducer;