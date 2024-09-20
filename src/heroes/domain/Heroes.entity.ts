export interface Hero {
    id: string;
    updatedAt: Date;
    createdAt: Date;
    name: string;
    picture: string;
    attributes: {
        agility: number;
        strength: number;
        weight: number;
        endurance: number;
        charisma: number;
    }
}