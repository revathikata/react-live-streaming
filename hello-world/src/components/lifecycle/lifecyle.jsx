import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react'


const Lifecyle = () => {
    const data = {
        "data": [{
            id: "0",
            type: "Item",
            attributes: {
                title: "Angular",
                body: "lorem ipsum",
            }
        }, {
            id: "1",
            type: "Item",
            attributes: {
                title: "React",
                body: "lorem ipsum",
            }
        }, {
            id: "2",
            type: "Item",
            attributes: {
                title: "vue",
                body: "lorem ipsum",
            }
        }, {
            id: "3",
            type: "Item",
            attributes: {
                title: "Javascript",
                body: "lorem ipsum",
            }
        }]
    }
    // another
    const keyObjects = {
        key1: {
            id: "key1",
            name: "Object 1"
        },
        key2: {
            id: "key2",
            name: "Object 2"
        }
    };

    const dataa = {
        key1: {
            title: "Title 1",
            body: "Body 1"
        },
        key2: {
            title: "Title 2",
            body: "Body 2"
        }
    };
    const [count, setCount] = useState(0);
    const [countCalculation, setCountCalculation] = useState(0)
    useEffect(() => {
    //   setTimeout(() => {
            setCountCalculation(() => count * 2);
        }, [count]);
    // }, 500)
    // use ref
    const [inputVal, setInput] = useState("")
    const countVal = useRef(0);
    useEffect(() => {
        countVal.current = countVal.current + 1
    })
    function incrementCount() {
        setCount(prevState => prevState + 1)
    }
    useEffect(() => {
        console.log('mount');
        // mount phase is only once update of starting 
    }, [])
    useEffect(() => {
        console.log('update');
        // mount phase is only once update of starting 
    }, [count])
    // useReducer
    const initialState = { countRed: 0 };
    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return { countRed: state.countRed + 1 };
            case 'decrement':
                return { countRed: state.countRed - 1 };
            default:
                throw new Error();
        }
    }
    const [reduc, setReduce] = useReducer(reducer, initialState)
    // call back
    const [age, setAge] = useState(0);
    const [salary, setSalary] = useState(7000)
    const incrementAge = useCallback(() => {
        setAge(age + 1)
    })
    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    })
    const fact = (n) => {
        let answer = 1;
        for (var i = n; i >= 1; i--) {
            answer = answer * 1
            console.log('factorila');
            return answer
        }
    }
    const factorial = React.useMemo(() => fact(count), [count])

    return (
        <div>
            <button onClick={() => incrementCount()}>IncrementCount</button>
            <h2>{count}</h2>
            <p>{countCalculation}</p>
            <input type="text" value={inputVal} onChange={(e) => setInput(e.target.value)} />
            <h1>Render Count: {countVal.current}</h1>
            {/* reducer */}
            <center>
                count:{reduc.countRed}
                <button onClick={() => setReduce({ type: 'decrement' })}>-</button>
                <button onClick={() => setReduce({ type: 'increment' })}>+</button>
            </center>
            {/* callback */}
            <p>{age}</p>
            <button onClick={incrementAge}>incrementage</button>
            <p>{salary}</p>
            <button onClick={incrementSalary}>incrementage</button>
            factorial: {factorial}

            <h3>list</h3>
            {
                data.data.map((el) => {
                    return (<div key={el.id}>
                        <div>{el.id} {el.attributes.title}</div>
                        <div>{el.attributes.body}</div>
                    </div>
                    )
                })
            }
            {/* another */}
            {Object.keys(dataa).map((key) => (
                <div key={keyObjects[key].id}>
                    <h2>{keyObjects[key].name}</h2>
                    <p>{dataa[key].title}</p>
                    <p>{dataa[key].body}</p>
                </div>
            ))}
        </div>
    )
}

export default Lifecyle