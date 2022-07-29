import { useState } from "react";
import './style.scss';

export default function SelectReact () {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(0);
  
    const optionsList = [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4",
      "Option 5"
    ];
  
    const toggleOptions = () => {
      setIsOptionsOpen(!isOptionsOpen);
    };
  
    const setSelectedThenCloseDropdown = (index: any) => {
      setSelectedOption(index);
      setIsOptionsOpen(false);
    };
  
    const handleKeyDown = (index: any) => (e: any) => {
      switch (e.key) {
        case " ":
        case "SpaceBar":
        case "Enter":
          e.preventDefault();
          setSelectedThenCloseDropdown(index);
          break;
        default:
          break;
      }
    };
  
    const handleListKeyDown = (e: any) => {
      switch (e.key) {
        case "Escape":
          e.preventDefault();
          setIsOptionsOpen(false);
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedOption(
            selectedOption - 1 >= 0 ? selectedOption - 1 : optionsList.length - 1
          );
          break;
        case "ArrowDown":
          e.preventDefault();
          setSelectedOption(
            selectedOption == optionsList.length - 1 ? 0 : selectedOption + 1
          );
          break;
        default:
          break;
      }
    };
  
    return (
      <div className="item-assinar-newsletter select-assinar-newsletter">
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={isOptionsOpen}
            className={isOptionsOpen ? "expanded assinar-newletter-select-button" : "assinar-newletter-select-button"}
            onClick={toggleOptions}
            onKeyDown={handleListKeyDown}
          >
            {optionsList[selectedOption]}
          </button>
          <ul
            className={`options ${isOptionsOpen ? "show" : ""}`}
            role="listbox"
            aria-activedescendant={optionsList[selectedOption]}
            tabIndex={-1}
            onKeyDown={handleListKeyDown}
          >
            {optionsList.map((option, index) => (
              <li
                id={option}
                role="option"
                aria-selected={selectedOption == index}
                tabIndex={0}
                onKeyDown={handleKeyDown(index)}
                onClick={() => {
                  setSelectedThenCloseDropdown(index);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
      </div>
    );
  };