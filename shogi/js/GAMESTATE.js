
function STARTING(){
    var d = new $.Deferred;
 
    d.resolve();//go next
    
    $("#OU").addClass("Y H").prependTo("#"+"5kyuu");
    //putTokenFromHold("Y","#OU","#"+"5kyuu");
    
    $("#KIN1").addClass("Y H").prependTo("#"+"6kyuu");
    $("#KIN3").addClass("Y H").prependTo("#"+"4kyuu");
    $("#GIN1").addClass("Y H").prependTo("#"+"7kyuu");
    $("#GIN3").addClass("Y H").prependTo("#"+"3kyuu");
    $("#KEI1").addClass("Y H").prependTo("#"+"8kyuu");
    $("#KEI3").addClass("Y H").prependTo("#"+"2kyuu");
    $("#KYO1").addClass("Y H").prependTo("#"+"9kyuu");
    $("#KYO3").addClass("Y H").prependTo("#"+"1kyuu");
    
    $("#KAKU1").addClass("Y H").prependTo("#"+"8hachi");
    $("#HI1").addClass("Y H").prependTo("#"+"2hachi");
    
    $("#FU1").addClass("Y H").prependTo("#"+"9nana");
    $("#FU3").addClass("Y H").prependTo("#"+"8nana");
    $("#FU5").addClass("Y H").prependTo("#"+"7nana");
    $("#FU7").addClass("Y H").prependTo("#"+"6nana");
    $("#FU9").addClass("Y H").prependTo("#"+"5nana");
    $("#FU11").addClass("Y H").prependTo("#"+"4nana");
    $("#FU13").addClass("Y H").prependTo("#"+"3nana");
    $("#FU15").addClass("Y H").prependTo("#"+"2nana");
    $("#FU17").addClass("Y H").prependTo("#"+"1nana");
    
    $("#GYOKU").addClass("O H").prependTo("#"+"5ichi");
    
    $("#KIN2").addClass("O H").prependTo("#"+"6ichi");
    $("#KIN4").addClass("O H").prependTo("#"+"4ichi");
    $("#GIN2").addClass("O H").prependTo("#"+"7ichi");
    $("#GIN4").addClass("O H").prependTo("#"+"3ichi");
    $("#KEI2").addClass("O H").prependTo("#"+"8ichi");
    $("#KEI4").addClass("O H").prependTo("#"+"2ichi");
    $("#KYO2").addClass("O H").prependTo("#"+"9ichi");
    $("#KYO4").addClass("O H").prependTo("#"+"1ichi");
    
    $("#KAKU2").addClass("O H").prependTo("#"+"2ni");
    $("#HI2").addClass("O H").prependTo("#"+"8ni");
    
    $("#FU2").addClass("O H").prependTo("#"+"9san");
    $("#FU4").addClass("O H").prependTo("#"+"8san");
    $("#FU6").addClass("O H").prependTo("#"+"7san");
    $("#FU8").addClass("O H").prependTo("#"+"6san");
    $("#FU10").addClass("O H").prependTo("#"+"5san");
    $("#FU12").addClass("O H").prependTo("#"+"4san");
    $("#FU14").addClass("O H").prependTo("#"+"3san");
    $("#FU16").addClass("O H").prependTo("#"+"2san");
    $("#FU18").addClass("O H").prependTo("#"+"1san");
    return d.promise();
}
    
function PLAYING(){
    var d = new $.Deferred;

    function TURN(){
        if ( whatGamestate != "ENDING" ){
            
            whoseTurn = turn[ (turnCount % 2)];
            turnCount ++;
            
            //1.choice Token to move (or Conceed the game)
            //2.choice Where to move (if same square is clicked, return 1)(errorAlert "NI-FU" "FU-DUME")
            //3.moved process (tokensMove,takeTokenCheck,headToTaleCeck,gameOverCheck)
            selectAndPlay()
                .then(movedProcess)
                .then(TURN)
            
                
        }else{
            d.resolve();//go next    
        }
        
    };
    TURN();



    
    return d.promise();
}
    
function ENDING(){
    var d = new $.Deferred;

    d.resolve();//go next 

    return d.promise();
}

 