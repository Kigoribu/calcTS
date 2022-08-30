import React, { useState } from 'react'

export default function Example() {

    const [count, setCount] = useState(0)
    
    const btnStyle:string = "bg-transparent w-24 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"

    let buff:number[] = []

    let buttonValue:number|null=null

    let result:string

    function plus(a:number, b:number) {
        buff = []
        return a+b;
    }

    function set(a:number) {
        if (buff[0]==undefined) {buff[0]=a}
        else if (buff[0]!==undefined && buff[1]==undefined) {buff[1]=a}
    }

    return (
        <div>
            <div className='grid h-screen place-items-center'>
                <div className="grid grid-cols-1 gap-4">
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" readOnly={true} value={buff[0]}></input>
                    <div>
                    <button className={btnStyle} onClick={()=>set(1)}>1</button>       <button className={btnStyle} onClick={()=>set(2)}>2</button>       <button className={btnStyle}>3</button>
                    </div>
                    <div>
                    <button className={btnStyle}>4</button>       <button className={btnStyle}>5</button>       <button className={btnStyle}>6</button>
                    </div>
                    <div>
                    <button className={btnStyle}>7</button>       <button className={btnStyle}>8</button>       <button className={btnStyle}>9</button>
                    </div>
                </div>
                <div>
                    <button onClick={()=>{buttonValue=1}}>+</button><button>-</button>
                </div>
                <button onClick={()=> setCount(plus(buff[0], buff[1]))}>=</button><span>{count}</span>
            </div>
        </div>
    )
}
