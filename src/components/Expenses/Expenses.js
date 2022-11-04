import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    const expenseItems = props.items.map((expense, index) => {
        return (
            <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                key={index}
            />
        );
    });

    return <Card className="expenses">{expenseItems}</Card>;
}

export default Expenses;
