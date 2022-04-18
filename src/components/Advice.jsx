import React from "react"

function Advice(props) {
  const advice = props.advice
  return (
    <div className="relative flex-1 max-w-[600px] px-6 pt-10 pb-24 bg-grayish-blue-dark rounded-lg text-center shadow-xl">
      <p className="text-xs text-neon-green leading-none uppercase tracking-[5px]">
        advice #<span>{advice.id}</span>
      </p>
      <h1 className="py-8 text-[28px] text-light-cyan leading-[3rem]">"{advice.advice}"</h1>
      <div className="">
        <img className="w-full" src="/pattern-divider-desktop.svg" alt="Pattern divider" />
      </div>
      <button disabled={props.fetching} onClick={() => props.setState(prev => ({ ...prev, fetchCount: prev.fetchCount + 1 }))} className="absolute left-[50%] bottom-0 translate-x-[-50%] translate-y-[50%] w-[60px] h-[60px] rounded-full bg-neon-green flex items-center justify-center hover:shadow-[0_0_50px_rgba(82,255,168,.9)] transition">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" />
        </svg>
      </button>
    </div>
  )
}

export default Advice
