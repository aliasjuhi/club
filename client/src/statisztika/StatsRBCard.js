import React from 'react'
function PlayerStatsCard({data, name}) {

    const {kdRatio, kills, deaths,gamesPlayed, wins, topTen, topFive } = data.data.lifetime.mode.br.properties;

    return (


           <div  className="text-center" >
                      <h3 color="text.primary" variant="h6" >{name}</h3>
                      <h3 color="text.primary">KD: {kdRatio}</h3>
                      <h3 color="text.primary">Wins:{wins}</h3>
                      <h3 color="text.primary">Top 5 :{topFive}</h3>
                      <h3 color="text.primary">Top 10 :{topTen}</h3>
                      <h3 color="text.primary">Kills: {kills}</h3>
                      <h3 color="text.primary">Deaths: {deaths}</h3>
                      <h3 color="text.primary">Games Played: {gamesPlayed}</h3>
                      </div>
    )
}

export default PlayerStatsCard;



