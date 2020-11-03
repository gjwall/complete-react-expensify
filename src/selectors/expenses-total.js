function myFunc(total, num) {
    return total + num;
  }

const selectExpensesTotal = (expenses = []) => {
    
    // If no expenses passed in return 0
    if(expenses.length < 1) {
        return 0;
    }

    // If the array is undefined then one argument is passed in so covert to an array
    if( expenses.length === undefined) {
        const temp = new Array(expenses);
        expenses = temp;
    }

    //Start the total at 0
    return expenses.reduce( (total, expense) => {
        return total + expense.amount
    }, 0);

};

export default selectExpensesTotal;