export interface HeroesFormValues {
    name: string | null;
    agility: number | null;
    strength: number | null;
    weight: number | null;
    endurance: number | null;
    charisma: number | null;
    photoURL: string | null;
}

export const isFormEmpty = (formValues: HeroesFormValues) => {
    return Object.values(formValues).every(value => value !== '' && value !== null);
};
