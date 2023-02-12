import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesChart from './ExpensesChart'

import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');
  const expenseFilterData = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredItems = props.items.filter((exp) => {
    const year = exp.date.getFullYear().toString();
    return year == filteredYear;
  });

  
  return (
    <Card className="expenses">
      <ExpenseFilter
        onSelectYear={filteredYear}
        onExpenseFilterData={expenseFilterData}
      />
      <ExpensesChart expenses={filteredItems}/>
      <ExpensesList items={filteredItems}/>
    </Card>
  );
};

export default Expenses;
