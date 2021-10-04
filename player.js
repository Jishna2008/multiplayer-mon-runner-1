class Player{
    constructor(){
        this.index=null;
        this.name=null;
    }
    getCount(){
        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value",(data)=>{playerCount=data.val()});
     }
    updateCount(count){
        database.ref('/').update({playerCount:count});
    }
    
    updateName(){
    var playerIndex="player"+this.index;
    database.ref(playerIndex).set(
        {name:this.name});
    }


}