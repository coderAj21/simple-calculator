import React, {useState } from 'react'

const Calculator = () => {
    const [input,setInput]=useState("");
    function clickHandler(data){
        try{
            if (data==="AC"){
                setInput("0");
                return;
            }
            if (data==="+/-"){
                const check=parseInt(input);
                setInput(parseInt(check>0?"-"+check:check));
                return;
            }
            if (data==="%"){
                const val=(parseFloat(input)/100)%100000000+"";
                setInput(val.length>9?"E+245625":val);
                return;
            }
            if (data==="C"){
                const val=input.substring(0,input.length-1);
                setInput(val);
                return;
            }
            if ("0123456789+-*/".includes(data)){
                if (input==='0'){
                    setInput(data);
                }else{
                    setInput(input+data);
                }
            } 
            if (data==="="){
                const result=eval(input);
                setInput(result);
            }
        }catch(error){
            setInput("Error");
        }
    }
  return (
    <div className='w-full h-screen bg-black text-white flex flex-col
    justify-center items-center'>
        <div className='flex w-[20%] justify-end'>
            <p className='py-4 text-6xl '>
                {input}
            </p>
        </div>
        <div className='flex flex-col w-1/3 gap-4 justify-center items-center '>
            <div className='flex text-3xl font-semibold gap-x-5  text-black hover:cursor-pointer '>
                <p onClick={()=>(clickHandler("AC"))} className='w-[70px] aspect-square p-4 text-center bg-[#D4D4D2] rounded-full  hover:bg-slate-100'>AC</p>
                <p onClick={()=>(clickHandler("+/-"))} className='w-[70px] aspect-square p-4 text-center bg-[#D4D4D2] rounded-full hover:bg-slate-100 '>+/-</p>
                <p onClick={()=>(clickHandler("%"))} className='w-[70px] aspect-square p-4 text-center bg-[#D4D4D2] rounded-full hover:bg-slate-100 '>%</p>
                <p onClick={()=>(clickHandler("/"))} className='w-[70px] aspect-square p-4 text-center text-white bg-[#FF9500] rounded-full hover:bg-slate-100 hover:text-[#FF9500] '>÷</p>
            </div>
            <div className='flex text-3xl font-semibold gap-x-5  text-white hover:cursor-pointer'>
                <p onClick={()=>(clickHandler("7"))} className='w-[70px] aspect-square p-4 text-center bg-[#1C1C1C] rounded-full hover:bg-[#505050]'>7</p>
                <p onClick={()=>(clickHandler("8"))} className='w-[70px] aspect-square p-4 text-center bg-[#1C1C1C] rounded-full hover:bg-[#505050]'>8</p>
                <p onClick={()=>(clickHandler("9"))} className='w-[70px] aspect-square p-4 text-center bg-[#1C1C1C] rounded-full hover:bg-[#505050]'>9</p>
                <p onClick={()=>(clickHandler("*"))} className='w-[70px] aspect-square p-4 text-center bg-[#FF9500] rounded-full hover:bg-slate-100 hover:text-[#FF9500]'>x</p>
            </div>
            <div className='flex text-3xl font-semibold gap-x-5  text-white hover:cursor-pointer'>
                <p onClick={()=>(clickHandler("4"))} className='w-[70px] aspect-square p-4 text-center bg-[#1C1C1C] rounded-full hover:bg-[#505050]'>4</p>
                <p onClick={()=>(clickHandler("5"))} className='w-[70px] aspect-square p-4 text-center bg-[#1C1C1C] rounded-full hover:bg-[#505050]'>5</p>
                <p onClick={()=>(clickHandler("6"))} className='w-[70px] aspect-square p-4 text-center bg-[#1C1C1C] rounded-full hover:bg-[#505050]'>6</p>
                <p onClick={()=>(clickHandler("-"))} className='w-[70px] text-4xl aspect-square p-4 text-center bg-[#FF9500] rounded-full  hover:bg-slate-100 hover:text-[#FF9500]'>-</p>
            </div>
            <div className='flex text-3xl font-semibold gap-x-5  text-white hover:cursor-pointer'>
                <p onClick={()=>(clickHandler("1"))} className='w-[70px] aspect-square p-4 text-center bg-[#1C1C1C] rounded-full hover:bg-[#505050]'>1</p>
                <p onClick={()=>(clickHandler("2"))} className='w-[70px] aspect-square p-4 text-center bg-[#1C1C1C] rounded-full hover:bg-[#505050]'>2</p>
                <p onClick={()=>(clickHandler("3"))} className='w-[70px] aspect-square p-4 text-center bg-[#1C1C1C] rounded-full hover:bg-[#505050]'>3</p>
                <p onClick={()=>(clickHandler("+"))} className='w-[70px] aspect-square p-4 text-center bg-[#FF9500] rounded-full  hover:bg-slate-100 hover:text-[#FF9500]'>+</p>
                
            </div>
            <div className='flex text-3xl font-semibold gap-x-5  text-white hover:cursor-pointer'>
                <p onClick={()=>(clickHandler("0"))} className='w-[70px] aspect-square p-4 text-center bg-[#1C1C1C] rounded-full hover:bg-[#505050]'>0</p>
                <p onClick={()=>(clickHandler("."))} className='w-[70px] aspect-square p-4 text-center bg-[#1C1C1C] rounded-full hover:bg-[#505050]'>.</p>
                <p onClick={()=>(clickHandler("C"))} className='w-[70px] aspect-square p-4 text-center bg-[#1C1C1C] rounded-full hover:bg-[#505050]'>C</p>
                <p onClick={()=>(clickHandler("="))} className='w-[70px] aspect-square p-4 text-center bg-[#FF9500] rounded-full  hover:bg-slate-100 hover:text-[#FF9500]'>=</p>
            </div>
        </div>
    </div>
  )
}

export default Calculator