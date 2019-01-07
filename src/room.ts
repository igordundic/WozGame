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

}

