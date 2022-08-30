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
                <input type="text" readOnly={true} value={buff[0]}></input>
                <div className="grid grid-cols-1 gap-4">
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
