import { useState } from "react";

export type inputType ={
    id:number;
    question: string;
    answer: string;
    openItem: React.ComponentState;
    setOpenItem: React.Dispatch<number>;
  }
export const AccordionItem = (props: inputType) => {
    const [isOpen, setIsOpen] = useState(props.id==0 ? true : false);

    const toggleFn = () => {
      if( props.id == props.openItem){
        setIsOpen(!isOpen)
      }
      else{
        props.setOpenItem(props.id)
        setIsOpen(true)
      }
    }

    return (
        <div className="flex-col py-2">
        <div className="flex justify-between font-semibold text-lg my-2">
          <div className='w-[14em] md:w-[28em] text-md  active:text-purple-600 cursor-pointer' onClick={toggleFn}>
            {props.question}
          </div>
          <button onClick={toggleFn}><img className='w-8 h-8' src={(props.openItem==props.id&&isOpen)? "/images/icon-minus.svg" :"/images/icon-plus.svg"} alt="Minus icon"/></button>
        </div>
        
        <div className={`grid text-slate-400 py-2 transition-all duration-300 ease-in-out overflow-hidden ${
          ((props.openItem==props.id)&&isOpen)? "grid-rows-[1fr] opacit-100": "grid-rows-[0fr] opacity-0"
        }`}>
          <div className="overflow-hidden">
            {props.answer}
          </div>
        </div>
  
      </div>
    )
}