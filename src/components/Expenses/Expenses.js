import { useState } from 'react';
import { useEffect } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2021');

    useEffect(() => {
        console.log(selectedYear);
    }, [selectedYear]);

    const yearChangeHandler = year => {
        setSelectedYear(year);
    };

    const expenseItemsFiltered = props.items
        .filter(expense => expense.date.getFullYear() === +selectedYear)
        .map(expense => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));

    return (
        <Card className="expenses">
            <ExpensesFilter
                onYearChange={yearChangeHandler}
                initialValue={selectedYear}
            />
            {expenseItemsFiltered}
        </Card>
    );
}

export default Expenses;
