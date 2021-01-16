class Form{
    constructor(){

    }

    display(){
        //heading - h1,h2,h3 
        var title = createElement("h1");
        title.html("Car race");
        title.position(100,0);
        var input = createInput("Name");
        input.position(400,0);
        var button = createButton("Play");
        button.position(400,30);
        button.mousePressed(function(){
            var name = input.value();
            input.hide();
            button.hide();
            var greeting = createElement("h2");
            greeting.html("Welcome " + name);
            playerCount = playerCount+1;
            player.updateCount(playerCount);
            player.updateName(name)
        })
    }
};