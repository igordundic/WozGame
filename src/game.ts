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
class Game {
    parser : Parser;
    out : Printer;
    player : Player;
    bunker : Room;
    jungle : Room;
    mountain : Room;
    Hobbitvillage : Room;
    Dragonvillage : Room;
    Dragontower : Room;
    firsthall : Room;
    weaponroom : Room;
    dragonhall : Room;
    escaperoad : Room;
    AncientVillage : Room; 
    hobbitvillage : Room; 
    Backinthebunker : Room; 

    isOn : boolean;

    /**
     * Create the game and initialise its internal map.
     */
    constructor(output: HTMLElement, input: HTMLInputElement) {
        this.parser = new Parser(this, input);
        this.out = new Printer(output);
        this.isOn = true;
        this.createRooms();
        this.printWelcome();
    }

    /**
     * Create all the rooms and link their exits together.
     */
    createRooms() : void {
        // create the rooms
        this.bunker = new Room("in the Bunker, you are safe now. The dragon is sleeping, and you got a loooong way go to the Dragon Tower. Take the path to the jungle. In the jungle you going to meet a guy called, Tarzan, he can help you further.");
        this.jungle = new Room("in the Jungle, (Tarzan) Hey you, it's beautiful here isn't?, but you got a long way to go, first you got to take the mountain, you'll find there a road to the a place called, Hobbit village. In the Village you find this guy called, Frodo. He has been there in the dragon tower, he can help you further. This road you can take to the mountain.");
        this.mountain = new Room("in the Mountain. There is nothing here, just one road to the Hobbit Village.");
        this.Hobbitvillage = new Room("in the Hobbit village. (Frodo) Hey you there, what are you doing?, oh the Dragon tower. You must be Hurry, because the Dragon wants to kill Kendra and eat her alive. Here is a key, with this you can open the door inside and outside the Dragon tower. Go to this road to the Dragon Village and you see a big Tower. Good luck ! ");
        this.Dragonvillage = new Room("in the Dragon Village. You see the big Dragon Tower. Use the key to open the door and find Kendra."); 
        this.Dragontower = new Room("in the Dragon Tower. You have opened the door with the key.")
        this.firsthall = new Room("in the firsthall. You hear a voice of the dragon. He's starting to irritate Kendra. You must be hurry, take the stairs and find the weaponroom. You will need a sword to put a end to his life.")
        this.weaponroom = new Room("in the Weaponroom. You have found a sword. This would be very usefull to kill the Dragon. You must be hurry because the voice gets even worse. Find the dragonhall.")
        this.dragonhall = new Room("in the Dragonhall. (Kendra) AAAAAAAAAAAHH!! Rescue me HELP HELP!!!. (Dragon) Grrrrrrr!! you are mine!. You climb up through the walls and jump on his wings and through his wings you come to his back head and put a sword on his head. Unfortunately he's still alive. Make run for it before he getting up and spitting fire on you both!!!. Take the door and use the key and take the escaperoad.")
        this.escaperoad = new Room("in the escaperoad. You must take this road to escape. The dragon is getting up and following you. You are lucky that you put a sword to his back, it makes him slower. This road gives you time to go to the bunker. ")

        // return from DragonTower
        this.AncientVillage = new Room("in the AncientVillage. This village is about 3000 years old. From far away you see most places are destroyed by the dragon. But in the end of the city road you see a great view of an other village, the HobbitVillage. You can go back there and take the road back to the bunker. You must be hurry the dragon is almost close at you. "); 
        this.hobbitvillage = new Room("are back in the Hobbitvillage. The dragon is very close. The dragon is burning everything. The people in this village are screeming and fleeing. You are now stuck in a house, and you wanna open the door but it is locked. On the floor there's a ax. Pick it up and use it to break the door to go outside. When you opened the door, take a horse and this road to the bunker, you very close. Be quick before it's to late. ");
        this.Backinthebunker = new Room("in the Bunker. You and Kendra are still not safe. You have taken the tunnel and came out somewhere else. The dragon burned the bunker but Kendra is rescued and you have won the game. Congratz !!");
    }
        SetExits() : void {
        // initialise room exits
        // veel type werk (feedback)
        this.bunker.setExits(this.jungle, null, null, null, null, null, null);
        this.jungle.setExits(null, this.mountain, null, null, null, null, null);
        this.mountain.setExits(this.Hobbitvillage, null, null, null, null, null, null);
        this.Hobbitvillage.setExits(null, null, null, this.Dragonvillage, null, null, null);
        this.Dragonvillage.setExits(this.Dragontower, null, null, null, null, null, null);
        this.Dragontower.setExits(null, null, null, this.firsthall, null, null, null);
        this.firsthall.setExits(null, null, this.weaponroom, null, null, null, null);
        this.weaponroom.setExits(null, null, null, this.dragonhall, null, null, null);
        this.dragonhall.setExits(null, null, this.escaperoad, null, null, null, null);
        this.escaperoad.setExits(null, this.AncientVillage, null, null, null, null, null);

        // special rooms
        this.AncientVillage.setExits(null, null, this.hobbitvillage, null, null, null, null);
        this.hobbitvillage.setExits(null, null, null, this.Backinthebunker, null, null, null);
        this.Backinthebunker.setExits(null, null, null, null, null, null, null);
        
    }

    createItems() : void {
        //create the items.
        let key = new Key("Key", "You have found a key and you can open the door right now.");
        let sword = new Sword("Sword", "You have found a weapon and you can kill the dragon.", 50);
        let axe = new Axe("Axe", "You have picked up the Axe, and can now break the door open. ", 100);
        this.Hobbitvillage.additem(key);
        this.weaponroom.additem(sword);
        this.hobbitvillage.additem(axe);
        console.log(this.Hobbitvillage);
    }   

    /**
     * Print out the opening message for the player.
     */
    printWelcome() : void {
        this.out.println("");
        this.out.println("");
        this.out.println("You are " + this.currentRoom.description);
        this.out.print(" go ");
        if(this.currentRoom.northExit != null) {
            this.out.print("north ");
        }
        if(this.currentRoom.eastExit != null) {
            this.out.print("east ");
        }
        if(this.currentRoom.southExit != null) {
            this.out.print("south ");
        }
        if(this.currentRoom.westExit != null) {
            this.out.print("west ");
        }
        this.out.println();
        this.out.print("");
    }

    gameOver() : void {
        this.isOn = false;
        this.out.println("Thank you for playing.  Good bye.");
        this.out.println("Hit F5 to restart the game");
    }

    /**
     * Print out error message when user enters unknown command.
     * Here we print some erro message and a list of the 
     * command words.
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    printError(params : string[]) : boolean {
        this.out.println("I don't know what you mean...");
        this.out.println();
        this.out.println("Your command words are:");
        this.out.println("   get quit help");
        return false;
    }

    /**
     * Print out some help information.
     * Here we print some stupid, cryptic message and a list of the 
     * command words.
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    printHelp(params : string[]) : boolean {
        if(params.length > 0) {
            this.out.println("Help what?");
            return false;
        }
        this.out.println("You are lost. You are alone. You wander around the world.");
        this.out.println();
        this.out.println("Your command words are:");
        this.out.println("    get quit help");
        return false;
    }

    

    pickupItem(i:Item) {
        if (i == null) {
            this.out.println("There is nothing to pickup here.")
            this.parser.input.value = "";
        }
        this.out.println("You picked up the "+i.name+", now you can use it and you go west.");
        this.currentRoom.inventory = null;
        this.parser.input.value = "";
        
        
    }


    /** 
     * "Quit" was entered. Check the rest of the command to see
     * whether we really quit the game.
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    quit(params : string[]) : boolean {
        if(params.length > 0) {
            this.out.println("Quit what?");
            return false;
        }
        else {
            return true;  // signal that we want to quit
        }
    }

    useItem(i:Item){
        i.useitem();
   
    }

    useKey(k:Key){
        k.useKey();
    }
    
}