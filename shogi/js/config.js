//
var gameName = "shogi";

//AUDIO VARIABLEs
var AUDIOs = {
    "onepoint22"        :{ name : "onepoint22"       , buffer:{}},
    "WIN"        :{ name : "WIN"       , buffer:{}},
    "LOSE"       :{ name : "LOSE"      , buffer:{}}
};
var audioFilePath = "../" + gameName + "/audio/";

//PROGRESS MANAGE VARIABLEs
var gamestate  = ["STARTING","RUNNING","ENDING"];
var turn  = ["PL1","PL2"];

//GAME VARIABLEs
var whatGamestate = "";
var whoseTurn = "";
var turnCount;
var uniqueClick;

var columns = [null,"9","8","7","6","5","4","3","2","1"];
var rows    = [null,"ichi","ni","san","yon","go","roku","nana","hachi","kyuu"];
var SQUAREs = [];
for (var c=1;c<=8;c++){
    for (var r=1;r<=8;r++){
         SQUAREs[columns[c] + rows[r]] = {
            onToken  : null,
            tokenID  : null
         }
    }
}




