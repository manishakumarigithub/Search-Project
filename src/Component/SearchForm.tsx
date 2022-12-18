import React from "react";
import { Form } from "react-router-dom";
type Props = {
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  userInput: string;
};

export default function SearchForm({ setUserInput, userInput }: Props) {
  function userInputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const input = event.target.value;
    setUserInput(input);
  }
  //console.log(userInput);

  return (
    <div>
      <form>
        <label>search name</label>
        <input type="text" onChange={userInputHandler}></input>
      </form>
    </div>
  );
}
