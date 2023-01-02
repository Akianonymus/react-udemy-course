import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "Netflix",
    amount: 69,
    date: new Date(2010, 7, 20),
  },
  { id: "2", title: "Laptop", amount: 799.49, date: new Date(2022, 6, 12) },
  {
    id: "3",
    title: "Washing machine",
    amount: 400.67,
    date: new Date(2020, 9, 1),
  },
  {
    id: "4",
    title: "Hair Dryer",
    amount: 100,
    date: new Date(2023, 1, 1),
  },
  {
    id: "5",
    title: "Gym",
    amount: 10,
    date: new Date(2021, 1, 1),
  },
  {
    id: "6",
    title: "Headphones",
    amount: 300,
    date: new Date(2022, 10, 10),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
