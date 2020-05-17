import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface ButtonCompType {
  set: () => void;
  value: number;
  text: string;
  dis: boolean;
  check: boolean;
  classButton: string;
  classSpan: string;
}
const ButtonComp: React.FC<ButtonCompType> = ({
  set,
  value,
  text,
  classButton,
  classSpan,
}) => {
  return (
    <button className={classButton} onClick={set}>
      <span className={classSpan}>
        {text} | {value}
      </span>
    </button>
  );
};

const App: React.FC = () => {
  const [like, setLike] = useState<number>(150);
  const [dislike, setDislike] = useState<number>(12);
  const [checkLike, setCheckLike] = useState<boolean>(false);
  const [checkdislike, setCheckdislike] = useState<boolean>(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div>
          <ButtonComp
            text="Like"
            check={true}
            classButton={
              checkLike === true ? "like-button liked" : "like-button"
            }
            classSpan={checkLike === true ? "like-couter" : "like-couter"}
            dis={checkLike}
            value={like}
            set={() => {
              checkLike === false ? setLike(like + 1) : setLike(like - 1);
              setCheckLike(!checkLike);
              checkdislike ? setDislike(dislike - 1) : setDislike(dislike);
              checkdislike
                ? setCheckdislike(!checkdislike)
                : setDislike(dislike);
            }}
          />
          <ButtonComp
            text="Dislike"
            check={false}
            classButton={
              checkdislike === true
                ? "dislike-button disliked"
                : "dislike-button"
            }
            classSpan={
              checkdislike === true ? "like-couter disliked" : "like-couter"
            }
            dis={checkLike}
            value={dislike}
            set={() => {
              checkdislike === false
                ? setDislike(dislike + 1)
                : setDislike(dislike - 1);
              setCheckdislike(!checkdislike);
              checkLike ? setLike(like - 1) : setLike(like);
              checkLike ? setCheckLike(!checkLike) : setLike(like);
            }}
          />
        </div>
      </header>
    </div>
  );
};

export default App;
