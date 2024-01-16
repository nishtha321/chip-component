import  { useState } from "react";

import "./chips.css";
const Chips = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const allItems = [
    {
      id: 1,
      name: "Nishtha Dawe",
      profile_pic:
        "https://media.licdn.com/dms/image/D4D03AQHRVYTyoyZdRQ/profile-displayphoto-shrink_800_800/0/1698676535804?e=1710979200&v=beta&t=SmB8HsL6Qn-MEBZJiicniyFCBWeN2yDglCN4rD-bcd4",
      email: "nishtha.dawe@zepto.com",
    },
    {
      id: 2,
      name: "Ashutosh Chaubey",
      profile_pic:
        "https://media.licdn.com/dms/image/D4D03AQF8GgkuWgovvA/profile-displayphoto-shrink_800_800/0/1689523101087?e=1710979200&v=beta&t=uu0yTURZI97e559mEOcWm4ESff3R_2fIPd8XxDGQTgc",
      email: "ashutosh.chaubey@zepto.com",
    },
    {
      id: 3,
      name: "Ansh Srivastava",
      profile_pic:
        "https://media.licdn.com/dms/image/D4D35AQHyamDqcLUIZA/profile-framedphoto-shrink_800_800/0/1679425094721?e=1706036400&v=beta&t=GVV3jA-0QSOxZIipa_CP_RyXlTh0Kzvn8sGjbUA1clo",
      email: "ansh.srivastava@zepto.com",
    },
    {
      id: 4,
      name: "Charu Goel",
      profile_pic:
        "https://media.licdn.com/dms/image/D4D35AQF1vwHk8jZ3eg/profile-framedphoto-shrink_800_800/0/1683258822850?e=1706036400&v=beta&t=VBqyJjBj-LGGmVA-jnP9hd9sXI9LbAviFdcmkRaBXlc",
      email: "charu.goel@zepto.com",
    },
  ];
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.taYadavget.value);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleItemClick = (item) => {
    setSelectedItems([...selectedItems, item]);
    setInputValue("");
  };

  const handleChipRemove = (removedItem) => {
    const updatedItems = selectedItems.filter(
      (item) => item.id !== removedItem.id
    );
    setSelectedItems(updatedItems);
  };

  const filteredItems = allItems.filter(
    (item) =>
      !selectedItems.find((value) => item.id == value.id) &&
      item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="autocomplete-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        placeholder="Type to search..."
      />
      {isInputFocused && (
        <ul className="autocomplete-list">
          {filteredItems.map((item) => (
            <li key={item.id} onClick={() => handleItemClick(item)}>
              <div className="item">
                <img src={item.profile_pic} className="profile_pic" />
                <a className="name">{item.name}</a>
                <a className="email">{item.email}</a>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="chip-container">
        {selectedItems.map((item) => (
          <div key={item.id} className="chip">
            <div className="item-chip">
              <img src={item.profile_pic} className="profile_pic" />
              <a className="name">{item.name}</a>
              <img
                src="https://logowik.com/content/uploads/images/close1437.jpg"
                alt="Remove"
                onClick={() => handleChipRemove(item)}
                style={{ width: "16px", height: "16px", marginLeft: "4px", borderRadius:"50%", padding:"4px" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chips;