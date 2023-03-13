const Api =  {
    
    getPlayerStats: async function (userId, platform) {
        if(!userId) return false
        userId = userId.replace("#", "%23");
        const rawData = await fetch(`/api/${userId}/${platform}`);
        return await rawData.json();;
    }


}

export default Api;