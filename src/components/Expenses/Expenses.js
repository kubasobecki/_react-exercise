import { useState } from 'react';
import { useEffect } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2022');

    useEffect(() => {
        console.log(selectedYear);
    }, [selectedYear]);

    const yearChangeHandler = year => {
        setSelectedYear(year);
    };

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

    return (
        <Card className="expenses">
            <ExpensesFilter
                onYearChange={yearChangeHandler}
                initialValue={selectedYear}
            />
            {expenseItems}
        </Card>
    );
}

export default Expenses;
