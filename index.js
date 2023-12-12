function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout (string) {
    console.log(string.toUpperCase());
}

function logWhisper (string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate (aString) {
    var cantAnswer = "I can't hear you!";
    var yesAnswer = "YES INDEED!";
    var lovAnswer = "I would love to!";
    if (aString.toLowerCase(aString) === aString) {
        return cantAnswer;
    }
    else if (aString.toUpperCase(aString) === aString) {
        return yesAnswer;  
    }
    else if ("Let's have dinner together!" === aString) {
        return lovAnswer
    }

}