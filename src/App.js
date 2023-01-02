import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
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
];

const App = () => {
  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
