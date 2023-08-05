//import React, {useEffect, useState} from "react";

//const TypingEffect = ({words: text}) => {
//  const [currentWordIndex, setCurrentWordIndex] = useState(0);
//  const [currentWord, setCurrentWord] = useState("");
//  const [isDeleting, setIsDeleting] = useState(false);

//  useEffect(() => {
//    const typingInterval = setInterval(() => {
//      if (isDeleting) {
//        deleteLastCharacter();
//      } else {
//        typeNextCharacter();
//      }
//    }, 200);

//    return () => {
//      clearInterval(typingInterval);
//    };
//  }, [isDeleting]);

//  useEffect(() => {
//    if (!isDeleting && currentWord.length === text[currentWordIndex].length) {
//      setIsDeleting(true);
//    } else if (isDeleting && currentWord.length === 0) {
//      setIsDeleting(false);
//      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % text.length);
//    }
//  }, [currentWord, currentWordIndex, text, isDeleting]);

//  const typeNextCharacter = () => {
//    const currentText = text[currentWordIndex];
//    setCurrentWord((prevWord) => prevWord + currentText[prevWord.length]);
//  };

//  const deleteLastCharacter = () => {
//    // const currentText = text[currentWordIndex];
//    setCurrentWord((prevWord) => prevWord.slice(0, -1));
//  };

//  return (
//    <div className="flex">
//      <h1>&#8203;</h1>
//      <h1>{currentWord}</h1>
//    </div>
//  );
//};

//export default TypingEffect;
