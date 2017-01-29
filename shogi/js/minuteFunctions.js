//games specified functions. its allmost called from PHASEs.js .

function putTokenFromHold(){
    var d = new $.Deferred; 
    d.resolve();//go next
    return d.promise();    
};

function selectAndPlay(){
    var d = new $.Deferred; 
    d.resolve();//go next
    uniqueClick = "select";
    var takenToken;
    $(".token").on("click",function(){
        if (uniqueClick != "select") return;
        playSound("onepoint22");
        $(this).addClass("inHand");
        takenToken = this;
        uniqueClick = "play";
    });
    
    $(".square").on("click",function(){
        if (uniqueClick != "play") return;
        
        setTimeout(function(){
            if (uniqueClick != "play") return;
           $(takenToken).removeClass("inHand");
           uniqueClick = "play";
        },300);
        
        
    });
    
    
    return d.promise();
}

function selectTokenOrConcede(){
    var d = new $.Deferred; 
    d.resolve();//go next
    return d.promise();    
}

function whereToMove(){
    var d = new $.Deferred; 
    d.resolve();//go next
    return d.promise();    
}

function movedProcess(){
    var d = new $.Deferred; 
    d.resolve();//go next
    return d.promise(); 
}

function tokensMove(){
    var d = new $.Deferred; 
    d.resolve();//go next
    return d.promise();
}
function takeTokenCheck(){
    var d = new $.Deferred; 
    d.resolve();//go next
    return d.promise();    
}
function headToTaleCeck(){
    var d = new $.Deferred; 
    d.resolve();//go next
    return d.promise();    
}

function gameOverCheck(){
    var d = new $.Deferred; 
    d.resolve();//go next
    return d.promise();    
}

function errorPlaying(MODE){
    //MODE is"NIHU" or"HUDUME".
    var d = new $.Deferred; 
    d.resolve();//go next
    return d.promise();    
}