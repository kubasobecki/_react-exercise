import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props => {
    const expensesFallback = (
        <h2 className="expenses-list__fallback">No expenses found</h2>
    );

    const expensesContent = props.items.map(expense => (
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
    ));

    return (
        <ul className="expenses-list">
            {props.items.length ? expensesContent : expensesFallback}
        </ul>
    );
};

export default ExpensesList;
