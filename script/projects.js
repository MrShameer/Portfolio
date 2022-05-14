function makecard(title,text,link) {
    let card=['<div class="col-md-4 g-4"><div class="card h-100 text-center bg-dark"><div class="card-body"><h4 class="card-title">'+title+'</h4><p class="card-text">'+text+'</p><a href="'+link+'" target="_blank" class="btn btn-primary">See Project</a></div></div></div>']
    return card.join('\n');
}

let arr = {
    "Vroom" : ["A mobile app for renting and sharing cars with ease. This application is built with Laravel <a href=\"https://github.com/MrShameer/vroom-api\" target=\"_blank\">API</a> and Android Studio (Java).", "https://github.com/MrShameer/Vroom"],
    "Alfread AI" : ["A discord music bot that has speach recognition function","https://github.com/MrShameer/Alfread-AI"],
    "Classroom" : ["A simple classroom multiplayer game and server","https://github.com/MrShameer/Classroom"],
    "Maze" : ["A maze game where the maze is generated randomly using Kruskal's algorithm","https://github.com/MrShameer/Maze"],
    "Wall" : ["A multiplayer survival game where player's need to find their way throught mazes and fight other teams. This game is built with Unity Game Engine","https://github.com/MrShameer/TheWall"],
    "Discord Meme Sound" : ["A simple bot to play popular meme sounds in voice channel","https://github.com/MrShameer/DiscordMemeSound"],
    "EncryptDecrypt" : ["A simple Encryption and Decryption program using Vigenere cipher, Text Flip and XOR Encryption","https://github.com/MrShameer/EncryptDecrypt"],
    "ThreeJS Template" : ["ThreeJS & WebGL website templates to use","https://github.com/MrShameer/ThreeJS-WebGL-Template"],
    "Structural Analysia" : ["A program to calculate Reaction force, Internal Shear and Internal Moment of a beam","https://github.com/MrShameer/StructuralAnalysis"],
    "Swamp Server" : ["Commands & Guide for a Garry's Mod Sever","https://github.com/MrShameer/Swamp-Server"],
    "Tetris-Concept" : ["Simple tetris-concept game made using python","https://github.com/MrShameer/Tetris-Concept"],
    
    "Flutter Games" : ["Collection of mobile game made using Flutter framework","https://github.com/lepak-xyz/Flutter-Games"],
    };

for(var i in arr) {
    $("#projectRow").append(makecard(i,arr[i][0],arr[i][1]));
}