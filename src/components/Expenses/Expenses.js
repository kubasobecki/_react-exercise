import { useState } from 'react';
import { useEffect } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2021');

    useEffect(() => {
        console.log(selectedYear);
    }, [selectedYear]);

    const yearChangeHandler = year => {
        setSelectedYear(year);
    };

    const expensesFiltered = props.items.filter(
        expense => expense.date.getFullYear() === +selectedYear
    );

    return (
        <Card className="expenses">
            <ExpensesFilter
                onYearChange={yearChangeHandler}
                initialValue={selectedYear}
            />
            <ExpensesChart expenses={expensesFiltered} />
            <ExpensesList items={expensesFiltered} />
        </Card>
    );
}

export default Expenses;
