export interface HeroesFormValues {
    name: string | null;
    picture: string | null;
    attributes: {
        agility: number | null;
        strength: number | null;
        weight: number | null;
        endurance: number | null;
        charisma: number | null;
    }
}

export interface Hero extends HeroesFormValues {
    id: string;
    updatedAt: Date;
    createdAt: Date;
}


