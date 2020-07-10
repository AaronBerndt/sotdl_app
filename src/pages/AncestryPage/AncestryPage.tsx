import React, {
  useState,
  useEffect,
  createContext,
  useReducer,
  useContext,
} from "react";
import { List } from "../../molecules/";
import { AncestryDialog } from "../../organisms/";
import axios from "axios";
import BuildCharacterContext from "../../context/BuildCharacterContext";

export const AncestryDialogContext = createContext({});

function reducer(state, action) {
  const actionSwitch = {
    toggle: { open: !state.open },
  };

  return actionSwitch[action.type];
}

export function AncestryPage() {
  const { setAncestry, setStartingScores } = useContext(BuildCharacterContext);
  const [ancestryList, setAncestryList] = useState([]);
  const [selectedAncestryIndex, setSelectedAncestryIndex] = useState(0);
  const [state, dispatch] = useReducer(reducer, { open: false });

  const getData = async () => {
    const { data } = await axios("https://sotdl-api.herokuapp.com/ancestries");
    setAncestryList(data);
  };

  useEffect(() => {
    if (ancestryList.length === 0) {
      getData();
    }
  }, [ancestryList]);

  const listItemOnClick = (index: number) => {
    setSelectedAncestryIndex(index);
    dispatch({ type: "toggle" });
  };

  const submitOnClick = () => {
    const { name, characteristics } = ancestryList[selectedAncestryIndex];
    const filteredArray = ["Strength", "Agility", "Will", "Intellect"].map(
      (score) => {
        const [{ name, value }] = characteristics.filter(
          ({ name }) => name === score
        );
        return { [name.toLowerCase()]: value };
      }
    );
    const scoreObject = Object.assign({}, ...filteredArray);

    dispatch({ type: "toggle" });
    setAncestry(name);
    setStartingScores(scoreObject);
  };

  return (
    <>
      <List listItemArray={ancestryList} onClickFunction={listItemOnClick} />
      <AncestryDialog
        ancestryInfo={ancestryList[selectedAncestryIndex]}
        isOpen={state}
        onClickFuncion={() => dispatch({ type: "toggle" })}
        submitOnClickFunction={submitOnClick}
      />
    </>
  );
}

export default AncestryPage;

