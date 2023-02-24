import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { fetchCustomers } from './asyncActions/customers';
import { AsyncDecrementCreator, AsyncIncrementCreator, decrementCreator, incrementCreator } from './store/countReducer';
import { fetchUsers } from './store/userReducer';




function App() {
    const count = useSelector(state => state.countReducer.count)
    const users = useSelector(state => state.userReducer.users)
    const dispatch = useDispatch();


    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers);

    const addCash = (cash) => {
        dispatch({type:"ADD_CASH", payload: cash});
    }

    const getCash = (cash) => {
        dispatch({type:"GET_CASH", payload: cash});
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }

        dispatch(addCustomerAction(customer));
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <div className="App">
            <div>
                <div className="count">{count}</div>
                <div className="btns">
                    <button className="btn" onClick={() => dispatch(AsyncIncrementCreator())}>ИНКРЕМЕНТ++</button>
                    <button className="btn" onClick={() => dispatch(AsyncDecrementCreator())}>ДИКРЕМЕНТ--</button>
                    <button className="btn" onClick={() => dispatch(fetchUsers())}>ПОЛУЧИТЬ ЮЗЕРОВ--</button>
                </div>
                <div className="users">
                    {users.map(user =>
                        <div className="user">
                            {user.name}
                        </div>
                    )}
                </div>
            </div>
            <div style={{fontSize:"3rem"}}>{cash}</div>
            <div style={{display:"flex"}}>
                <button
                    onClick={() => addCash(Number(prompt()))}
                    className="btn btn-info btn-lg m-3" 
                >
                    Пополнить счет
                </button>
                <button
                    onClick={() => getCash(Number(prompt()))}
                    className="btn btn-info btn-lg m-3"
                >
                    Снять со счета
                </button>
                <button
                    onClick={() => addCustomer(prompt())}
                    className="btn btn-primary btn-lg m-3"
                >
                    Добавить клиента
                </button>
                <button
                    onClick={() => dispatch(fetchCustomers())}
                    className="btn btn-primary btn-lg m-3"
                >
                    Получить клиентов из базы
                </button>
                <button
                    className="btn btn-primary btn-lg m-3"
                >
                    Удалить клиента
                </button>
            </div>
            {customers.length > 0 ?
                <div  className="list-group">
                {customers.map(customer =>
                    <div onClick={() => removeCustomer(customer)} className='list-group-item'>{customer.name}</div>  
                )}
                </div>
                :
                <div style={{fontSize:"2rem", maginTop:20}}>
                    Клиенты отсутствуют
                </div>
            }
        </div>
    );
}

export default App;
