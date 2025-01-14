import React, { useState, useRef, useEffect } from "react";
import "react-simple-keyboard/build/css/index.css";
import { FaArrowAltCircleRight, FaEye, FaEyeSlash } from "react-icons/fa";
import Keyboard from "react-simple-keyboard";
import ReactDOM from "react-dom";
import Loader from "../Loader/Loader";
import { Button } from "../Button/Button";

interface InputWithKeyboardProps {
  id?: string;
  placeholder?: string;
  type?: "text" | "password" | "number" | "email";
  handleSubmit?: (value: string) => void;
  getValue?: (value: Record<string, string>) => void;
  className?: string;
  defaultValue?: string;
  setCartPageKeyboard?: (isOpen: boolean) => void;
  bottom?: number;
  isButton?: boolean;
  isButtonDisabled?: boolean;
  autoClear?: boolean;
  isShow?: boolean;
  isButtonLoading?: boolean;
}

interface InputState {
  [key: string]: string;
}

const customDisplay = {
  "{bksp}": "&#x2B05",
  "{change}": "+/-",
  "{clear}": "C",
  "{dot}": ".",
  "{shift}": "shift",
  "{enter}": "↲",
  "{space}": " ",
  "{tab}": "Tab",
  "{lock}": "Caps",
  "{abc}": ".!?",
};

const customLayout: {
  text: string[];
  shift: string[];
  symbols: string[];
  number: string[];
} = {
  text: [
    "1 2 3 4 5 6 7 8 9 0 {bksp}",
    "q w e r t y u i o p",
    "a s d f g h j k l {abc}",
    "{shift} z x c v b n m .",
    "{space} @ .com",
  ],
  shift: [
    "! @ # $ % & * ( ) - {bksp}",
    "Q W E R T Y U I O P",
    "A S D F G H J K L {abc}",
    "{shift} Z X C V B N M .",
    "{space} @ .com",
  ],
  symbols: [
    "` ! @ # $ % ^ & { } {bksp}",
    "+ = * _ - \\ | / ( )",
    "< > € £ ¥ · [ ] ~ {abc}",
    "{shift} © : ; \" ' ? . ,",
    "{space} @ .com",
  ],
  number: ["1 2 3", "4 5 6", "7 8 9", "{bksp} 0 {enter}"],
};

export const InputWithKeyboard: React.FC<InputWithKeyboardProps> = ({
  id = "input_without_id",
  placeholder,
  type = "text",
  handleSubmit = null,
  getValue = null,
  className = "",
  defaultValue = "",
  bottom = 0,
  isButton = false,
  isButtonLoading = false,
  isButtonDisabled = false,
  autoClear = false,
  isShow = true
}) => {
  const [layoutName] = useState<string>("ip");
  const [layoutType, setLayoutType] = useState<keyof typeof customLayout>("text");
  const [inputName, setInputName] = useState<string | undefined>();
  const [inputType, setInputType] = useState<string>(
    type === "number" ? "number" : type
  );
  const [input, setInput] = useState<InputState>({ [id]: defaultValue });
  const [keyboardOpen, setKeyboardOpen] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const keyboardRef = useRef<any>(null);
  const keyboardContainerRef = useRef<HTMLDivElement | null>(null);

  const onChangeAll = (inputObj: InputState) => {
    setInput(inputObj);
    if (getValue) {
      getValue({ [id]: keyboardRef.current.getInput() });
    }
  };

  const onKeyPress = (button: string) => {
    if (button === "{shift}") handleShift();
    if (button === "{abc}") handleSymbols();
    if (button === "{clear}") clearScreen();
    if (button === "{enter}") submit();

    if (
      button === "{change}" &&
      keyboardRef.current?.getInput(inputName || "") &&
      keyboardRef.current?.getInput(inputName || "") !== "-."
    ) {
      const currentInput = keyboardRef.current?.getInput(inputName || "");
      const newValue = `${parseFloat(currentInput) * -1}`;
      keyboardRef.current.setInput(newValue);
      keyboardRef.current.setCaretPosition(currentInput.length);
    }

    if (button === "{dot}") {
      const currentInput = keyboardRef.current?.getInput(inputName || "");
      if (!currentInput) {
        keyboardRef.current.setInput("0.");
      } else if (!currentInput.includes(".")) {
        keyboardRef.current.setInput(currentInput + ".");
      }
    }
  };

  const submit = () => {
    if (handleSubmit && inputName) {
      handleSubmit(input[inputName] || "");
    }
    if (autoClear) setTimeout(clearScreen, 100);
    setKeyboardOpen(false);
  };

  const handleShift = () => {
    setLayoutType((prev) => (prev === "text" || prev === "symbols" ? "shift" : "text"));
  };

  const handleSymbols = () => {
    setLayoutType((prev) => (prev === "text" || prev === "shift" ? "symbols" : "text"));
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = event.target.value;
    setInput((prev) => ({ ...prev, [inputName || ""]: inputVal }));

    if (keyboardRef.current) {
      keyboardRef.current.setInput(inputVal);
    }
  };

  const clearScreen = () => {
    if (inputName) {
      setInput((prev) => ({ ...prev, [inputName]: "" }));
      keyboardRef.current?.clearInput(inputName);
    }
  };

  const handleChangeInputType = () => {
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const focusedInputName = event.currentTarget.id; // Get the `id` of the clicked input
    setActiveInput(focusedInputName); // Set the active input

    const currentValue = event.currentTarget.value; // Retrieve the current value of the clicked input
    if (keyboardRef.current) {
      // Sync the keyboard with the clicked input's value
      keyboardRef.current.setInput(currentValue);
    }
  };

  const setActiveInput = (name: string) => {
    setInputName(name);
    if (isShow) setKeyboardOpen(true);
  };

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        keyboardContainerRef.current &&
        !keyboardContainerRef.current.contains(event.target as Node)
      ) {
        setKeyboardOpen(false);
        inputRef.current?.blur();
      }
    };

    document.getElementById("root")?.addEventListener("click", handleOutsideClick);
    return () => {
      document.getElementById("root")?.removeEventListener("click", handleOutsideClick);
    };
  }, [keyboardOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        inputRef?.current?.blur()
        submit(); // Trigger the button's action when Enter is pressed
      }
    };
  
    document.addEventListener("keydown", handleKeyDown);
  
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [input, inputName]);

  useEffect(() => {
    if (defaultValue) {
      setInput((prev) => ({ ...prev, [id]: defaultValue }));
      keyboardRef.current.setInput(defaultValue)
    }
  }, [])

  useEffect(() => {
    if (getValue) {
      getValue({ [id]: input[id] });
    }
  }, [input])

  return (
    <>
      <div ref={keyboardContainerRef} className="input-wrapper">
        {[id].map((id: string) => (
          <React.Fragment key={id}>
            <label className="input-keyboard-label" onClick={() => setActiveInput(id)}>
              <input
                className={`keyboard-input ${className}`}
                ref={inputRef}
                value={input[id] || ""}
                placeholder={placeholder || id}
                onChange={onChangeInput}
                type={inputType}
                onClick={handleClick}
                id={id}
              />
              {type === "password" && (
                <span
                  onTouchStart={handleChangeInputType}
                  onTouchEnd={handleChangeInputType}
                  style={{ zIndex: 10 }}
                >
                  {inputType === "password" ? <FaEye /> : <FaEyeSlash />}
                </span>
              )}
            </label>
            {isButton && (
              <Button
                isLoading={isButtonLoading}
                onClick={submit}
                disabled={
                  id === "email"
                    ? !validateEmail(input[inputName || ""]) || isButtonDisabled || isButtonLoading
                    : !input[inputName || ""]
                }
              >
                {isButtonDisabled && isButtonLoading ? <Loader /> : <FaArrowAltCircleRight />}
              </Button>
            )}
          </React.Fragment>
        ))}

        {ReactDOM.createPortal(
          <div
            className={`modal-keyboard-container ${!keyboardOpen ? "hide" : "show"}`}
            style={{ bottom: `${bottom}vh` }}
          >
            <div className="modal-keyboard-container-content">
              <div
                className={`${type === "number" ? "numbers-wrapper" : "w-100"} keyboard-wrapper`}
              >
                <Keyboard
                  keyboardRef={(r: any) => (keyboardRef.current = r)}
                  inputName={id}
                  layoutName={layoutName}
                  onChangeAll={onChangeAll}
                  onKeyPress={onKeyPress}
                  preventMouseDownDefault={true}
                  stopMouseDownPropagation={true}
                  layout={{
                    ip: customLayout[layoutType],
                  }}
                  display={customDisplay}
                />
              </div>
            </div>
          </div>,
          document.getElementById("root-modal-keyboard")!
        )}
      </div>
    </>
  );
};
