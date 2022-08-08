import React, { useState } from "react";
import "./App.css";

const MyStore = React.createContext();

function App() {
  const [name, setName] = useState();
  return (
    <div className="App">
      <MyStore.Provider value={{ name, setName }}>
        {/* <MyStore.Consumer>
          {(value) => {
            return <div>{value.name}</div>;
          }}
        </MyStore.Consumer> */}
        <MyStoreConsumer />
      </MyStore.Provider>
    </div>
  );
}

const MyStoreConsumer = () => {
  const { name } = React.useContext(MyStore);
  return <div>{name}</div>;
};

export default App;
