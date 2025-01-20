export default class Cache {
    constructor(apiService) {
      this.apiService = apiService;
      this.cache = {};
      this.ttl = 1000; 
    }
  
    async get(identifier, force = false){
      const presentTime = Date.now();
  
      if ((!this.cache[identifier]) || (presentTime - this.cache[identifier].timestamp > this.ttl || force)){
        const response = await this.apiService.fetch(identifier);
        this.cache[identifier] = {
          data: response.data,
          timestamp: presentTime,
        };
        return {data: response.data, status:'Fresh'};
      } 
  
      return {data: this.cache[identifier].data, status:'Cached'};
    }
  
    setCacheRefresh(ttl = 1000) {
      this.ttl = ttl;
    }
  
  }