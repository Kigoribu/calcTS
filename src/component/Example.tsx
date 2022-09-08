import React, { useState } from 'react'

export default function Example() {

    const [count, setCount] = useState(0)
    const [tempRes, setTempRes] = useState([''])
    
    const btnStyle:string = "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    const inputStyle: string = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

    let buff:number[] = []

    let buttonValue:number

    function plus(a:number, b:number) {
        buff = []
        return a+b;
    }

    function setNum(a:number) {
        setTempRes(arr => [...arr, `${a.toString()}`])
        if (buff[0]==undefined) {buff[0]=a}
        else if (buff[0]!==undefined && buff[1]==undefined) {buff[1]=a}
    }

    function setSym(symb:string) {
        {setTempRes(arr => [...arr, `${symb}`])}
        if (symb==='+') {}
    }

    return (
    <>  

        <div className = "flex items-center justify-center h-screen">

            <div className='w-96'>

                <input type="text" className={inputStyle} readOnly={true} value={tempRes}></input>

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
                    <button className={btnStyle} onClick={()=> setCount(plus(buff[0], buff[1]))}>=</button>


                </div>

                <span>{count}</span>

            </div>
            

        </div>

    </>
        
    )
}
