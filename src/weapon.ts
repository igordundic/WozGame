class Weapon extends Item {
    damage: number;


    // 
    constructor (name: string, description:string, damage:number){
        super(name, description);
        this.damage = damage;
    }
}