import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');
  const expenseFilterData = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(filteredYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        onSelectYear={filteredYear}
        onExpenseFilterData={expenseFilterData}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
