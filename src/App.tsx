

import { useState } from 'react'
import { AccordionItem, } from './AccordionItem'
import './App.css'



const prop = [{
  id:0,
  question: "What is Frontend Mentor, and How will it help me?",
  answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id:1,
    question:"Is Frontend Mentor free?",
    answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",

  },
  {  
    id:2,
    question:"Can I use Frontend Mentor projects in my portfolio?",
    answer:"Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",

  },
  {
    id:3,
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  }

]

function App() {
  const [openItem, setOpenItem] = useState(0);
  return (
    <main className='flex flex-col w-[23em] md:w-[36em] bg-white rounded-lg p-7 mt-[15em] md:mt-[10em]  h-fit'>
      <div className="flex h-50 w-50 text-3xl font-bold md:text-4xl items-center mb-3">
        <img src="/images/icon-star.svg" className='w-6 h-6 mr-3' alt="star icon"/>
        <div>FAQs</div>
      </div>
      {prop.map((e)=>{        
        return (
        <>
          {e.id!=0 &&  <div className='text-slate-200'><hr/></div>}
          <AccordionItem {...e} setOpenItem={setOpenItem} openItem={openItem}/> 
          
        </>
      )})}
    </main>
  )
}

export default App
