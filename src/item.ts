/**
 * This class is part of the "The dragonslayer" application. 
 * "The dragonslayer" is a very simple, text based adventure game.  
 * 
 * A "item" represents the items in the rooms. It is connected to other rooms via exits. 
 * You can use any items you want in the room, you can use them to escape etc. 
 * 
 * @author  Michael Kölling, David J. Barnes and Bugslayer
 * @version 2017.03.30
 */
class Item {
    name : string;
    description : string;

    useitem(){
        console.log("");
    }
    
    constructor (name: string, description:string){
        this.name = name;
        this.description = description;

        
    }
}