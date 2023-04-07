import "./App.css";

function App() {
  // map function
  const list = [1, 2, 3, 4];
  const dataList = [
    {
      name: "taro",
      age: 21,
    },
    {
      name: "suzuki",
      age: 19,
    },
  ];

  return (
    <div className="App">
      <h1>Map lesson</h1>
      {list.map((number) => (
        <div>{number * 2}</div>
      ))}
      {dataList.map((data) => (
        <>
          <div>{data.name}</div>
          <div>{data.age}</div>
        </>
      ))}
    </div>
  );
}

export default App;
