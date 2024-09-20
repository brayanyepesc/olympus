import { HeroesFormValues } from "../domain/Heroes.entity";

export const isFormEmpty = (formValues: HeroesFormValues) => {
    return Object.values(formValues).every(value => value !== '' && value !== null && value !== 0);
};
