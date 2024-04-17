import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  const times = [
    {
      title: "Easy",
      targetTime: 3
    },
    {
      title: "Not Easy",
      targetTime: 33
    },
    {
      title: "Very Easy",
      targetTime: 5
    },
    {
      title: "Too Easy",
      targetTime: 7
    },
    {
      title: "Absolutely Easy",
      targetTime: 6
    },
    {
      title: "Not so Easy",
      targetTime: 34
    },
  ]
  return (
    <>
      <Player />
      <div id="challenges">
        {
          times.map((item, index) => <TimerChallenge key={ index } {...item} /> )
        }
      </div>
    </>
  );
}

export default App;
