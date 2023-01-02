import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("");

  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const years = [];
  const filteredExpenses = props?.items?.filter((expense) => {
    const currYear = expense.date.getFullYear().toString();
    if (selectedYear === "") setSelectedYear(currYear);
    years.push(currYear);
    return currYear === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onChangeFilter={filterChangeHandler}
          years={years}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
