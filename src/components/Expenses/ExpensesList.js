import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

  if (props.items.length > 0) {
    // Show this when there is expense in the selected year
    return (
        <ul className="expenses-list">
          {props.items.map(  (expense) => (<ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            dateText={expense.date}
          />
          )) }
        </ul>
      );
    }

    else{  // Show this when year does not match
        return(
            <h2 className="expenses-list__fallback">No expense found!</h2>
        );
    }
  };

export default ExpensesList;
