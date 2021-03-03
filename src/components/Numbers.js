import React, { useState } from "react";

export const Numbers = (props) => {
  const [word, setWord] = useState("");
  const [filterDisplay, setFilterDisplay] = useState(props.persons);

  const handleChange = (value) => {
    setWord(value);
    let oldList = props.persons.map((person) => {
      // return { name: person.name, number: person.number };
      return person;
      // name: person.name.toLowerCase()
    });

    console.log(value);
    // console.log(oldList);

    if (value !== "") {
      let newList = [];

      newList = oldList.filter((person) =>
        person.full_name.toLowerCase().includes(value.toLowerCase())
      );
      setFilterDisplay(newList);
    } else {
      setFilterDisplay(props.persons);
    }
  };

  const styles = {
    border: "1px solid rgba(0, 0, 0, 0.05)",
  };

  const outer_styles = {
    border: "5vh solid rgba(0, 0, 0, 0.00)",
  };

  return (
    <div style={outer_styles}>
      <h1>Destination Search</h1>
      <p>500 countries from SG, MY, JP</p>
      filter: <input onChange={(e) => handleChange(e.target.value)}></input>
      {filterDisplay.map((destination, i) => (
        <div key={i} style={styles}>
          <li>
            {destination.full_name} ----{" "}
            <span>
              {destination.uid}, {destination.name}, {destination.country_code},{" "}
              {destination.lonlat}
            </span>
          </li>
        </div>
      ))}
    </div>
  );
};
