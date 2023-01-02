import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const years = props?.years?.sort().reverse();

  if (years.length < 1) return;

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {years?.map((year) => {
            return <option value={year}>{year}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
