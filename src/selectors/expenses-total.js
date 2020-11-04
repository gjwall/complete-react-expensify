export default (expenses) => {
    
    // If no expenses passed in return 0
    // if(expenses.length < 1) {
    //     return 0;
    // }

    // If the array is undefined then one argument is passed in so covert to an array
    // if(expenses.length === undefined) {
    //     const temp = new Array(expenses);
    //     expenses = temp;
    // }

    // //Start the total at 0
    // return expenses.reduce( (total, expense) => {
    //     return total + expense.amount
    // }, 0);

    // Andrew answer
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum,value) => sum + value, 0);
};

//export default selectExpensesTotal;