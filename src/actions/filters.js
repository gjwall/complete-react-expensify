//SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//SORT_BY_AMOUNT_FILTER
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT_FILTER',
    sortBy: 'Amount'
});

// SORT_BY_DATE_FILTER
export const sortByDate = () => ({
    type: 'SORT_BY_DATE_FILTER',
    sortBy: 'Date'
});

//SET_START_DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
}); 

//SET_END_DATE
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate 
}); 