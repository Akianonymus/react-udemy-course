import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart.js";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("");

  const filterChangeHandler = (selectedYear) => {
    selectedYear = parseInt(selectedYear);
    setFilteredYear(isNaN(selectedYear) ? "" : selectedYear);
  };

  const filterByYear = ({ date }) => {
    const year = date.getFullYear();
    return filteredYear ? filteredYear === year : true;
  };

  const filteredExpenses = items?.filter(filterByYear) ?? [];

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
