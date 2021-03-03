import React, { useState } from "react";

export const Numbers = (props) => {
  const [word, setWord] = useState("");
  const [filterDisplay, setFilterDisplay] = useState(props.persons);

  const handleChange = (value) => {
    let oldList = props.persons.map((person) => {
      return { name: person.name, number: person.number };
      // name: person.name.toLowerCase()
    });

    console.log(value);
    console.log(oldList);

    if (value !== "") {
      let newList = [];
      setWord(value);
      newList = oldList.filter((person) =>
        person.name.includes(word.toLowerCase())
      );
      setFilterDisplay(newList);
    } else {
      setFilterDisplay(props.persons);
    }
  };

  return (
    <div>
      <h1>Numbers</h1>
      filter: <input onChange={(e) => handleChange(e.target.value)}></input>
      {filterDisplay.map((person, i) => (
        <div key={i}>
          <li>
            {person.name} <span>{person.number}</span>
          </li>
        </div>
      ))}
    </div>
  );
};
