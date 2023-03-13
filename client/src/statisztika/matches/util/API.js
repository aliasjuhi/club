const Api =  {
    
    getPlayerMatches: async function (gamerId, oldal) {
        if(!gamerId) return false
        gamerId = gamerId.replace("#", "%23");
        const rawData = await fetch(`/matches/${gamerId}/${oldal}`);
        return await rawData.json();;
    }


}

export default Api;