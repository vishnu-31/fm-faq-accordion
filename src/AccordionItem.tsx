import { useState } from "react";

export type inputType ={
    question: string;
    answer: string;
  }
export const AccordionItem = (props: inputType) => {


    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex-col py-2">
        <div className="flex justify-between font-semibold text-lg my-3">
          <div className='w-[14em] lg:w-[28em] text-md  active:text-purple-600 cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            {props.question}
          </div>
          <button onClick={() => setIsOpen(!isOpen)}><img className='w-8 h-8' src={isOpen? "/images/icon-minus.svg" :"/images/icon-plus.svg"} alt="Minus icon"/></button>
        </div>
        {isOpen && 
        <div className="text-slate-400 py-2 ">
          {props.answer}

        </div>
        }
      </div>
    )
}