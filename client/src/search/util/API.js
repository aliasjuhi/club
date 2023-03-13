const Api =  {
    
    getPlayerSearch: async function (playerId, site) {
        if(!playerId) return false
        playerId = playerId.replace("#", "%23");
        const rawData = await fetch(`/search/${playerId}/${site}`);
        return await rawData.json();;
    }


}

export default Api;