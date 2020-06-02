import React, { useState } from 'react';
import Player from "./Player"
import AddPlayer from "./AddPlayer"
import "./Scoreboard.css";

export default function App() {
  const [players, setPlayers] = useState([
    {id: 0, name: "Gandalf", score: 2},
    {id: 1, name: "Sauron", score: 1},
    {id: 2, name: "Gimli", score: 3},
    {id: 3, name: "Legolas", score: 4}
  ]);

  function incrementScoreOfPlayer(id) {
      const incrementScore = players.map(player => (
          player.id === id
          ? {...player, score: player.score + 1}
          : player
      ))

      setPlayers(incrementScore)
  }

  function addPlayer(name) {
    const newPlayer = { id: Math.random(), name: name, score: 0 };
    const addedPlayer = [...players, newPlayer];
    setPlayers(addedPlayer);
  }

  return (
    <>
    <div className="scoreboard">
    <h1>Scoreboard</h1>
    <ul>
      {players
      .sort((a, b) => b.score - a.score)
      .map(player => <Player {...player} key={player.id} incrementScore={incrementScoreOfPlayer} />)}
    </ul>
    <AddPlayer addPlayer={addPlayer}/>
    </div>
    </>
  )
}

      
  