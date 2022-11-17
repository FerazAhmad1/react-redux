import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, increment5, decrement5 } from "../app/store";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(count);
  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };
  const incrementHandlerBy5 = () => {
    dispatch(increment5());
  };
  const decrementHandlerBy5 = () => {
    dispatch(decrement5());
  };
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <button onClick={incrementHandler}>INCREAMENT</button>
      <button onClick={decrementHandler}>DECREMENT</button>
      <button onClick={incrementHandlerBy5}>Increamentby5</button>
      <button onClick={decrementHandlerBy5}>decrementBY5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
