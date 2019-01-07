/**
 * This class is part of the "The dragonslayer" application.
 * "The dragonslayer" is a very simple, text based adventure game.
 *
 * Users can walk around some scenery. That's all. It should really be
 * extended to make it more interesting!
 *
 * To play this game, create an instance of this class and call the "play"
 * method.
 *
 * This main class creates and initialises all the others: it creates all
 * rooms, creates the parser and starts the game.  It also evaluates and
 * executes the commands that the parser returns.
 *
 * @author  Michael Kölling, David J. Barnes and Bugslayer
 * @version 2017.03.30
 */
var Game = (function () {
    /**
     * Create the game and initialise its internal map.
     */
    function Game(output, input) {
        this.parser = new Parser(this, input);
        this.out = new Printer(output);
        this.isOn = true;
        this.createRooms();
        this.printWelcome();
    }
    /**
     * Create all the rooms and link their exits together.
     */
    Game.prototype.createRooms = function () {
        // create the rooms
        var bunker = new Room("in the Bunker, you are safe now. The dragon is sleeping, and you got a loooong way to go to the Dragon tower. In the jungle is a guy called Tarnaz, he can help you further");
        var jungle = new Room("in the Jungle, (Tarnaz) Hey you, it's beautifel isn't it right?, but you got a long way to go so go to the mountain, you find there a village. Maybi there is someone to help you further to find where the Dragon tower is");
        var mountain = new Room("in the Mountain. There is nothing here, just one road to the Hobbit Village");
        var Hobbitvillage = new Room("in the Hobbit village. (Frodo) Hey you there, what are you doing?, oh the Dragon tower. You must be Hurry because the Dragon wants to kill Kendra and eat her alive. Here is a key, with this you can open the door inside and outside the Dragon tower. Go to this road to the Dragon Village and you see a big Tower. Good luck ! ");
        var Dragonvillage = new Room("in the Dragon Village. You see the big Dragon Tower. Use the key to open the door and find Kendra.");
        var Dragontower = new Room("in the Dragon Tower. You have opened the door with the key where Frodo gave it to you. (Kendra) AAAAAAAAAAAHH!! Rescue me HELP HELP!!!. (Dragon) Grrrrrrr!! you are mine!. You put a sword in his back and make a end to his life. But he is still alive, make run for it before he spitting fire on you both!!!");
        // return from DragonTower
        var AncientVillage = new Room("in the AncientVillage");
        var Kingslanding = new Room("in the Kindslanding");
        var Backinthebunker = new Room("in the Bunker");
       
        //create the items
        var key = new Item("Horse", "You have found a horse and go outside the city to the Bunker");
        //let key = new Item("Anker", "You have found a anker. Use it to kill the dragon!");
        Kingslanding.additem(key);
        console.log(Kingslanding);
        // initialise room exits 
        bunker.setExits(jungle, null, null, null);
        jungle.setExits(null, mountain, null, null);
        mountain.setExits(Hobbitvillage, null, null, null);
        Hobbitvillage.setExits(null, null, null, Dragonvillage);
        Dragonvillage.setExits(Dragontower, null, null, null);
        Dragontower.setExits(null, null, null, AncientVillage);
        // exits from DragonTower to bunker
        AncientVillage.setExits(null, null, Kingslanding, null);
        Kingslanding.setExits(null, null, null, null);
        Backinthebunker.setExits(null, null, null, null);
        // spawn player outside
        this.currentRoom = bunker;
    };
    /**
     * Print out the opening message for the player.
     */
    Game.prototype.printWelcome = function () {
        this.out.println();
        this.out.println("");
        this.out.println("");
        this.out.println("");
        this.out.println();
        this.out.println("You are " + this.currentRoom.description);
        this.out.print("Exits: ");
        if (this.currentRoom.northExit != null) {
            this.out.print("north ");
        }
        if (this.currentRoom.eastExit != null) {
            this.out.print("east ");
        }
        if (this.currentRoom.southExit != null) {
            this.out.print("south ");
        }
        if (this.currentRoom.westExit != null) {
            this.out.print("west ");
        }
        this.out.println();
        this.out.print(">");
    };
    Game.prototype.gameOver = function () {
        this.isOn = false;
        this.out.println("Thank you for playing.  Good bye.");
        this.out.println("Hit F5 to restart the game");
    };
    /**
     * Print out error message when user enters unknown command.
     * Here we print some erro message and a list of the
     * command words.
     *
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    Game.prototype.printError = function (params) {
        this.out.println("I don't know what you mean...");
        this.out.println();
        this.out.println("Your command words are:");
        this.out.println("   go quit help");
        return false;
    };
    /**
     * Print out some help information.
     * Here we print some stupid, cryptic message and a list of the
     * command words.
     *
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    Game.prototype.printHelp = function (params) {
        if (params.length > 0) {
            this.out.println("Help what?");
            return false;
        }
        this.out.println("You are lost. You are alone. You wander");
        this.out.println("around the world.");
        this.out.println();
        this.out.println("Your command words are:");
        this.out.println("   go quit help");
        return false;
    };
    /**
     * Try to go in one direction. If there is an exit, enter
     * the new room, otherwise print an error message.
     *
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    Game.prototype.goRoom = function (params) {
        if (params.length == 0) {
            // if there is no second word, we don't know where to go...
            this.out.println("Go where?");
            return;
        }
        var direction = params[0];
        // Try to leave current room.
        var nextRoom = null;
        switch (direction) {
            case "north":
                nextRoom = this.currentRoom.northExit;
                break;
            case "east":
                nextRoom = this.currentRoom.eastExit;
                break;
            case "south":
                nextRoom = this.currentRoom.southExit;
                break;
            case "west":
                nextRoom = this.currentRoom.westExit;
                break;
        }
        if (nextRoom == null) {
            this.out.println("There is no way?!");
        }
        else {
            this.currentRoom = nextRoom;
            this.out.println("You are " + this.currentRoom.description);
            this.out.print(" ");
            if (this.currentRoom.northExit != null) {
                this.out.print("north ");
            }
            if (this.currentRoom.eastExit != null) {
                this.out.print("east ");
            }
            if (this.currentRoom.southExit != null) {
                this.out.print("south ");
            }
            if (this.currentRoom.westExit != null) {
                this.out.print("west ");
            }
            this.out.println();
        }
        return false;
    };
    /**
     * "Quit" was entered. Check the rest of the command to see
     * whether we really quit the game.
     *
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    Game.prototype.quit = function (params) {
        if (params.length > 0) {
            this.out.println("Quit what?");
            return false;
        }
        else {
            return true; // signal that we want to quit
        }
    };
    return Game;
}());
