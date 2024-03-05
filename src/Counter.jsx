import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementAsync, incrementByAmount } from './redux/counterSlice';
// import {Rootstate, AppDispatch} from './redux/store'

export default function Counter() {
    const count = useSelector((state) /* : RootState */ => state.counter.value);
    const dispatch = useDispatch /*<AppDispatch>*/();  
    return (
      <div>
        <h2>{count}</h2>
        <button onClick={() => dispatch(increment())}>+ increment</button>
        <button onClick={() => dispatch(decrement())}>- decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          + increment By 10
        </button>
        <button onClick={() => dispatch(incrementAsync(5))}>
          + increment async by 5
        </button>
      </div>
    );
}
