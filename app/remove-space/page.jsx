"use client";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
const remove_space = () => {
  let [text, settext] = useState("Past and Remove all spaces...");

  function change(e) {
    settext(e.target.value);
  }

  function remove() {
    let splittext = text.split(/[ ]+/);
    settext(splittext.join(" "));
  }

  function clear() {
    settext("");
  }
  return (
    <>
      <section className="h-[80vh] w-full">
        <h1 className="text-center">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Remove the spacing between words",
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              "Remove the spacing between words",
              2000,
            ]}
            wrapper="span"
            speed={40}
            style={{
              fontSize: "2em",
              display: "inline-block",
              color: "#8b5cf6",
            }}
            repeat={Infinity}
          />
        </h1>

        <div className="p-4 flex items-center justify-center gap-4 flex-col">
          <textarea
            className="text-slate-400 p-4 resize-none bg-slate-800 rounded-lg  w-[60vw] mx-auto block focus:outline-slate-400 outline-1 outline-none h-60"
            value={text}
            onChange={change}
          ></textarea>
        </div>
        <div className="flex items-center justify-center gap-4 ">
          <button
            className="px-4 py-3 border border-slate-400 bg-slate-700 rounded-full text-center hover:border-white"
            onClick={remove}
          >
            Remove Spaces
          </button>

          <button
            className="px-4 py-3 border border-slate-400 bg-slate-700 rounded-full text-center hover:border-white"
            onClick={clear}
          >
            Clear Text
          </button>
        </div>
      </section>
    </>
  );
};

export default remove_space;
