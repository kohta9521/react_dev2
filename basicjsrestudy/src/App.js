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

  // 条件を満たした要素のみを残す関数
  // 条件を満たさない要素を削除する
  const words = ["spray", "limit", "exuberant", "destruction", "present"];

  const result = words.filter((ward) => words.length < 6);
  console.log(result);

  // splice lesson

  return (
    <div className="App">
      <h2>Map lesson</h2>
      {list.map((number) => (
        <div>{number * 2}</div>
      ))}
      {dataList.map((data) => (
        <>
          <div>{data.name}</div>
          <div>{data.age}</div>
        </>
      ))}

      <h2>filter lesson</h2>

      <h2>splice function lesson</h2>
    </div>
  );
}

export default App;
