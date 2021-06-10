import "./App.css";
import Expenses from './components/Expenses';
const data = [
  {
    id: "1",
    title: "Car insurance",
    date: new Date(2021, 6, 28),
    amount: 100,
  },
  {
    id: "2",
    title: "Health insurance",
    date: new Date(2021, 5, 28),
    amount: 120,
  },
  {
    id: "3",
    title: "Buy Car",
    date: new Date(2021, 4, 20),
    amount: 130,
  },
];

function App() {
  return (
    <div className="App">
      <Expenses data={data} />
    </div>
  );
}

export default App;
