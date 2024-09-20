export interface HeroesFormValues {
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

export interface Hero extends HeroesFormValues {
    id: string;
    updatedAt: Date;
    createdAt: Date;
}


