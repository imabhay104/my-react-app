import PropTypes from 'prop-types';
export default function CounterButton({by,add1,delete1,multiply1})
{
    
    return(
            <div className="Counter">
            <div>
                <button className="CounterButton" onClick={()=>add1(by)}>+{by}</button>
                <button className="CounterButton" onClick={()=>delete1(by)}>-{by}</button>
                <button className="CounterButton" onClick={()=>multiply1(by)}>*{by}</button>

         
                </div>
                
        </div>
    )
}
CounterButton.propTypes ={
    by : PropTypes.number
}
CounterButton.defaultProps = {
    by: 1
};