import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.data.map((value) => {
        return (
          <ExpenseItem
            amount={value.amount}
            title={value.title}
            date={value.date}
          />
        );
      })}
    </div>
  );
}

export default Expenses;