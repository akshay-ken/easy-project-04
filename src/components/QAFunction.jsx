import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import { useState } from "react";

export function QAFunction({ info }) {
  //   const [activeIndext, setActiveIndex] = useState(null);

  //   const toggleAnswer = (index) => {
  //     setActiveIndex(activeIndext === index ? null : index);
  //   };

  const [activeState, setActiveState] = useState(null);

  function handleClick(index) {
    setActiveState(() => {
      return activeState === index ? null : index;
    });
  }

  return (
    <>
      {info.QandA.map((qa, index) => (
        <div className="my-8">
          <div
            key={index}
            className="flex items-center justify-between my-4"
            // onClick={() => toggleAnswer(index)}
            onClick={() => handleClick(index)}
          >
            <p className="font-worksans text-xl font-semibold text-purple-950 hover:text-purple-500 active:text-purple-500">
              {qa.Q}
            </p>
            <img
              //   src={activeIndext === index ? minusIcon : plusIcon}
              src={activeState === index ? minusIcon : plusIcon}
              className="self-start"
              alt=""
            />
          </div>
          {/* {activeIndext === index && (
            <p className="font-worksans text-purple-400 font-normal">{qa.A}</p>
          )} */}
          {activeState === index ? (
            <p className="font-worksans text-purple-400 font-normal">{qa.A}</p>
          ) : null}
        </div>
      ))}
    </>
  );
}
