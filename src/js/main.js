var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Axe = (function (_super) {
    __extends(Axe, _super);
    function Axe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Axe;
}(Weapon));
var Game = (function () {
    function Game(output, input) {
        this.parser = new Parser(this, input);
        this.out = new Printer(output);
        this.isOn = true;
        this.createRooms();
        this.printWelcome();
    }
    Game.prototype.createRooms = function () {
        var bunker = new Room("in the Bunker, you are safe now. The dragon is sleeping, and you got a loooong way go to the Dragon Tower. Take the path to the jungle. In the jungle you going to meet a guy called, Tarzan, he can help you further.");
        var jungle = new Room("in the Jungle, (Tarzan) Hey you, it's beautiful here isn't?, but you got a long way to go, first you got to take the mountain, you'll find there a road to the a place called, Hobbit village. In the Village you find this guy called, Frodo. He has been there in the dragon tower, he can help you further. This road you can take to the mountain.");
        var mountain = new Room("in the Mountain. There is nothing here, just one road to the Hobbit Village.");
        var Hobbitvillage = new Room("in the Hobbit village. (Frodo) Hey you there, what are you doing?, oh the Dragon tower. You must be Hurry, because the Dragon wants to kill Kendra and eat her alive. Here is a key, with this you can open the door inside and outside the Dragon tower. Go to this road to the Dragon Village and you see a big Tower. Good luck ! ");
        var Dragonvillage = new Room("in the Dragon Village. You see the big Dragon Tower. Use the key to open the door and find Kendra.");
        var Dragontower = new Room("in the Dragon Tower. You have opened the door with the key.");
        var firsthall = new Room("in the firsthall. You hear a voice of the dragon. He's starting to irritate Kendra. You must be hurry, take the stairs and find the weaponroom. You will need a sword to put a end to his life.");
        var weaponroom = new Room("in the Weaponroom. You have found a sword. This would be very usefull to kill the Dragon. You must be hurry because the voice gets even worse. Find the dragonhall.");
        var dragonhall = new Room("in the Dragonhall. (Kendra) AAAAAAAAAAAHH!! Rescue me HELP HELP!!!. (Dragon) Grrrrrrr!! you are mine!. You climb up through the walls and jump on his wings and through his wings you come to his back head and put a sword on his head. Unfortunately he's still alive. Make run for it before he getting up and spitting fire on you both!!!. Take the door and use the key and take the escaperoad.");
        var escaperoad = new Room("in the escaperoad. You must take this road to escape. The dragon is getting up and following you. You are lucky that you put a sword to his back, it makes him slower. This road gives you time to go to the bunker. ");
        var AncientVillage = new Room("in the AncientVillage. This village is about 3000 years old. From far away you see most places are destroyed by the dragon. But in the end of the city road you see a great view of an other village, the HobbitVillage. You can go back there and take the road back to the bunker. You must be hurry the dragon is almost close at you. ");
        var hobbitvillage = new Room("are back in the Hobbitvillage. The dragon is very close. The dragon is burning everything. The people in this village are screeming and fleeing. You are now stuck in a house, and you wanna open the door but it is locked. On the floor there's a ax. Pick it up and use it to break the door to go outside. When you opened the door, take a horse and this road to the bunker, you very close. Be quick before it's to late. ");
        var Backinthebunker = new Room("in the Bunker. You and Kendra are still not safe. You have taken the tunnel and came out somewhere else. The dragon burned the bunker but Kendra is rescued and you have won the game. Congratz !!");
        var key = new Key("Key", "You have found a key and you can open the door right now.");
        var weapon = new Sword("Sword", "You have found a weapon and you can kill the dragon.", 50);
        var axe = new Axe("Axe", "You have picked up the Axe, and can now break the door open. ", 100);
        Hobbitvillage.additem(key);
        weaponroom.additem(weapon);
        hobbitvillage.additem(axe);
        console.log(Hobbitvillage);
        bunker.setExits(jungle, null, null, null, null, null, null);
        jungle.setExits(null, mountain, null, null, null, null, null);
        mountain.setExits(Hobbitvillage, null, null, null, null, null, null);
        Hobbitvillage.setExits(null, null, null, Dragonvillage, null, null, null);
        Dragonvillage.setExits(Dragontower, null, null, null, null, null, null);
        Dragontower.setExits(null, null, null, firsthall, null, null, null);
        firsthall.setExits(null, null, weaponroom, null, null, null, null);
        weaponroom.setExits(null, null, null, dragonhall, null, null, null);
        dragonhall.setExits(null, null, escaperoad, null, null, null, null);
        escaperoad.setExits(null, AncientVillage, null, null, null, null, null);
        AncientVillage.setExits(null, null, hobbitvillage, null, null, null, null);
        hobbitvillage.setExits(null, null, null, Backinthebunker, null, null, null);
        Backinthebunker.setExits(null, null, null, null, null, null, null);
        this.currentRoom = bunker;
    };
    Game.prototype.printWelcome = function () {
        this.out.println("");
        this.out.println("");
        this.out.println("You are " + this.currentRoom.description);
        this.out.print(" go ");
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
        this.out.print("");
    };
    Game.prototype.gameOver = function () {
        this.isOn = false;
        this.out.println("Thank you for playing.  Good bye.");
        this.out.println("Hit F5 to restart the game");
    };
    Game.prototype.printError = function (params) {
        this.out.println("I don't know what you mean...");
        this.out.println();
        this.out.println("Your command words are:");
        this.out.println("   quit help");
        return false;
    };
    Game.prototype.printHelp = function (params) {
        if (params.length > 0) {
            this.out.println("Help what?");
            return false;
        }
        this.out.println("You are lost. You are alone. You wander around the world.");
        this.out.println();
        this.out.println("Your command words are:");
        this.out.println("    get quit help");
        return false;
    };
    Game.prototype.getItem = function (params) {
        return false;
    };
    Game.prototype.goRoom = function (params) {
        if (params.length == 0) {
            this.out.println("Go where?");
            return;
        }
        var direction = params[0];
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
            case "First hall":
                nextRoom = this.currentRoom.firsthallExit;
                break;
            case "weaponroom":
                nextRoom = this.currentRoom.weaponroomExit;
                break;
            case "Dragon hall":
                nextRoom = this.currentRoom.dragonhallExit;
                break;
        }
        if (nextRoom == null) {
            this.out.println("There is no way?!");
        }
        else {
            this.currentRoom = nextRoom;
            this.out.println("You are " + this.currentRoom.description);
            this.out.print(" go ");
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
            if (this.currentRoom.inventory != null) {
                this.out.println("There is a " + this.currentRoom.inventory.name + " on the floor.");
            }
        }
        return false;
    };
    Game.prototype.pickupItem = function (i) {
        if (i == null) {
            this.out.println("There is nothing to pickup here.");
            this.parser.input.value = "";
        }
        this.out.println("You picked up the " + i.name + ", now you can use it and you go west.");
        this.inventory = i;
        this.currentRoom.inventory = null;
        this.parser.input.value = "";
    };
    Game.prototype.quit = function (params) {
        if (params.length > 0) {
            this.out.println("Quit what?");
            return false;
        }
        else {
            return true;
        }
    };
    return Game;
}());
var Item = (function () {
    function Item(name, description) {
        this.name = name;
        this.description = description;
    }
    return Item;
}());
var Key = (function (_super) {
    __extends(Key, _super);
    function Key() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Key;
}(Item));
var Parser = (function () {
    function Parser(game, input) {
        var _this = this;
        this.game = game;
        this.input = input;
        input.onkeyup = function (e) {
            if (e.keyCode == 13 && _this.game.isOn) {
                var command = _this.input.value;
                _this.game.out.println(command);
                _this.parse(command.split(" "));
                _this.input.value = "";
                _this.game.out.print("");
            }
        };
    }
    Parser.prototype.parse = function (words) {
        var wantToQuit = false;
        var params = words.slice(1);
        switch (words[0]) {
            case "":
                break;
            case "help":
                wantToQuit = this.game.printHelp(params);
                break;
            case "go":
                wantToQuit = this.game.goRoom(params);
                break;
            case "get":
                this.game.pickupItem(this.game.currentRoom.inventory);
                break;
            case "quit":
                wantToQuit = this.game.quit(params);
                break;
            default:
                wantToQuit = this.game.printError(params);
        }
        if (wantToQuit) {
            this.input.disabled = true;
            this.game.gameOver();
        }
    };
    return Parser;
}());
var Printer = (function () {
    function Printer(output) {
        this.output = output;
    }
    Printer.prototype.print = function (text) {
        this.output.innerHTML += text;
    };
    Printer.prototype.println = function (text) {
        if (text === void 0) { text = ""; }
        this.print(text + "<br/>");
        this.output.scrollTop = this.output.scrollHeight;
    };
    return Printer;
}());
var Room = (function () {
    function Room(description) {
        this.description = description;
    }
    Room.prototype.setExits = function (north, east, south, west, firsthall, weaponroom, dragonhall) {
        if (north != null) {
            this.northExit = north;
        }
        if (east != null) {
            this.eastExit = east;
        }
        if (south != null) {
            this.southExit = south;
        }
        if (west != null) {
            this.westExit = west;
        }
        if (firsthall != null) {
            this.firsthallExit = firsthall;
        }
        if (weaponroom != null) {
            this.weaponroomExit = weaponroom;
        }
        if (dragonhall != null) {
            this.dragonhallExit = dragonhall;
        }
    };
    Room.prototype.additem = function (item) {
        this.inventory = item;
    };
    return Room;
}());
var Sword = (function (_super) {
    __extends(Sword, _super);
    function Sword() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Sword;
}(Weapon));
var Weapon = (function (_super) {
    __extends(Weapon, _super);
    function Weapon(name, description, damage) {
        var _this = _super.call(this, name, description) || this;
        _this.damage = damage;
        return _this;
    }
    return Weapon;
}(Item));
