/**
 * Class Room - a room in an adventure game.
 *
 * This class is part of the "The dragonslayer" application. 
 * "The dragonslayer" is a very simple, text based adventure game.  
 *
 * A "Room" represents one location in the scenery of the game.  It is 
 * connected to other rooms via exits.  The exits are labelled north, 
 * east, south, west.  For each direction, the room stores a reference
 * to the neighboring room, or null if there is no exit in that direction.
 * 
 * @author  Michael Kölling, David J. Barnes and Bugslayer
 * @version 2017.03.30
 */
class Room {
    description : string;
    out : Printer;
    inventory: Item;

    northExit : Room;
    southExit : Room;
    eastExit : Room;
    westExit : Room;
    firsthallExit : Room;
    weaponroomExit : Room;
    dragonhallExit : Room;

    /**
     * Create a room described "description". Initially, it has
     * no exits. "description" is something like "a kitchen" or
     * "an open court yard".
     * @param description The room's description.
     */
    constructor(description : string,) {
        this.description = description
       
        
    }

    /**
     * Define the exits of this room.  Every direction either leads
     * to another room or is null (no exit there).
     * @param north The north exit.
     * @param east The east east.
     * @param south The south exit.
     * @param west The west exit.
     */
    setExits(north : Room, east : Room, south : Room, west : Room, firsthall : Room, weaponroom : Room, dragonhall : Room) : void {
        if(north != null) {
            this.northExit = north;
        }
        if(east != null) {
            this.eastExit = east;
        }
        if(south != null) {
            this.southExit = south;
        }
        if(west != null) {
            this.westExit = west;
        }
        if(firsthall != null) {
            this.firsthallExit = firsthall;
        }
        if(weaponroom != null) {
            this.weaponroomExit = weaponroom;
        }
        if(dragonhall!= null) {
            this.dragonhallExit = dragonhall;
        }
    }

    additem(item:Item){
        this.inventory = item;
    }
    
    /** 
     * Try to go in one direction. If there is an exit, enter
     * the new room, otherwise print an error message.
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    goRoom(params : string[]) : boolean {
        if(params.length == 0) {
            // if there is no second word, we don't know where to go...
            this.out.println("Go where?");
            return;
        }

        let direction = params[0];

        // Try to leave current room.
        let nextRoom = null;
        switch (direction) {
            case "north" : 
                nextRoom = this.currentRoom.northExit;
                break;
            case "east" : 
                nextRoom = this.currentRoom.eastExit;
                break;
            case "south" : 
                nextRoom = this.currentRoom.southExit;
                break;
            case "west" : 
                nextRoom = this.currentRoom.westExit;
                break;
        }

        if (nextRoom == null) {
            this.out.println("There is no way?!");
        }
        else {
            this.currentRoom = nextRoom;
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
            if (this.currentRoom.inventory != null) {
                this.out.println("There is a "+this.currentRoom.inventory.name+" on the floor.")
            }
        }
        return false;
    }


}

