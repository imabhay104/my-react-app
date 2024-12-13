
import { useState } from 'react';
import CounterButton from './CounterButton';
import './Counter.css'

export default function Counter()
{
    const [count,SetCount]=useState(0);

    function additionParent(by)
    {
        SetCount((count)=>count+by);
    }
    function deletionParent(by)
    {
        SetCount((count)=>count-by)
    }
    function multiplyParent(by)
    {
        SetCount((count)=>count*by)
    }
    function reset()
    {
        SetCount((count)=>count*0)
    }
    
    
    return(
            <>
            < span className="count">{count}</span>
            <CounterButton by={1}add1={additionParent} delete1={deletionParent} multiply1={multiplyParent} />
            <CounterButton by={2}add1={additionParent} delete1={deletionParent} multiply1={multiplyParent} />
            <CounterButton by={3}add1={additionParent} delete1={deletionParent} multiply1={multiplyParent} />
            <div>
                <button className="CounterButton" onClick={reset}>Reset</button>
                </div>
          </>
        )
}
