import React from 'react'









function AkAssault({data, name}) {
    const {
        hits,  kills, kdRatio,  headshots, accuracy, shots, deaths} = data.data.lifetime.itemData.weapon_assault_rifle.iw8_ar_akilo47.properties;
    return (

        <div  className="text-center" >
            <h3 color="text.primary" variant="h6" >AK 47</h3>
            <h3 color="text.primary">Hits: {hits}</h3>
            <h3 color="text.primary">Kills: {kills}</h3>
            <h3 color="text.primary">KDRatio:{kdRatio}</h3>
            <h3 color="text.primary">Headshots:{headshots}</h3>
            <h3 color="text.primary">Accuracy:{accuracy}</h3>
            <h3 color="text.primary">Deaths: {deaths}</h3>
            <h3 color="text.primary">Shots: {shots}</h3>
        
        </div>
    )
}

export default AkAssault