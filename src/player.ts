
 /**
 *  This class is the player class. This class is used to set the player
 * his name. The name is used to congratulate the user with it's completed
 * quest. It is also added to add feature functions.
 * 
 * @author  Milad Rahmani
 * @version 1.0
 * This is a sample code written in java. But it must be in Typescript. It is intended to give a kind of idea or help how it can be supplemented.
 */
 public class Player  {
    /*
     * Fields
     */
    private String playerName;
    private int currentRoomID;
    private Room currentRoom;
    
    /**
     * Set the current room ID where the player is
     * @param int The current room ID 
     */
    public void setCurrentRoomID(int currentRoomID)
    {
        this.currentRoomID = currentRoomID;
    }

    /**
     * Return the current room ID where the player is
     * @return int
     */
    public int getCurrentRoomID()
    {
        return currentRoomID;
    }
    
    /**
     * Set the players current room
     * @param Room The current room object 
     */
    public void setCurrentRoom(Room currentRoom)
    {
        this.currentRoom = currentRoom;
    }

    /**
     * Return the current room object the player is in
     * @return Room The current room object
     */
    public Room getCurrentRoom()
    {
        return currentRoom;
    }
    
    /**
     * Add an item to the inventory
     * @param Item The given item object.
     */
    public void addItem(Item item)
    {
        inventory.add(item);
    }    

    /**
     * Return inventory item
     * @param int
     */
    public Item getInventoryItem(int item)
    {
        return inventory.get(item);
    }
        

} 
