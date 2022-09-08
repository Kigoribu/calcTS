import React, { useState } from 'react'

export default function Example() {

    const [count, setCount] = useState(0)
    const [tempOut, setTempOut] = useState('')
    
    const btnStyle:string = "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    const inputStyle: string = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

    let tempStrNum:string = ''

    function plus(firstvalue:number) {
        return (secondvalue:number) => {return secondvalue + firstvalue}
    }

    function setNum(a:number) {
        setTempOut(tempOut.concat(a.toString()))
        tempStrNum.concat(a.toString())
    }

    function setSym(symb:string) {
        {setTempOut(tempOut.concat(symb.toString()))}
        if (symb==='+') {
            value = plus(Number(tempStrNum))
            tempStrNum = ''
        }
    }

    function calcResult() {
        setTempOut(value(Number(tempStrNum)))
        console.log(value)
    }

    return (
    <>  

        <div className = "flex items-center justify-center h-screen">

            <div className='w-96'>

                <input type="text" className={inputStyle} readOnly={true} value={tempOut}></input>

                <div className="mt-5 grid gap-5 grid-cols-3 justify-between">

                    <button className={btnStyle} onClick={()=>setNum(1)}>1</button>
                    <button className={btnStyle} onClick={()=>setNum(2)}>2</button>
                    <button className={btnStyle} onClick={()=>setNum(3)}>3</button>
                    <button className={btnStyle} onClick={()=>setNum(4)}>4</button>
                    <button className={btnStyle} onClick={()=>setNum(5)}>5</button>
                    <button className={btnStyle} onClick={()=>setNum(6)}>6</button>
                    <button className={btnStyle} onClick={()=>setNum(7)}>7</button>
                    <button className={btnStyle} onClick={()=>setNum(8)}>8</button>
                    <button className={btnStyle} onClick={()=>setNum(9)}>9</button>
                    <button className={btnStyle} onClick={()=>setSym('+')}>+</button>
                    <button className={btnStyle}>-</button>
                    <button className={btnStyle} onClick={()=>calcResult()}>=</button>

                </div>

                <span>{count}</span>

            </div>
            

        </div>

    </>
        
    )
}
