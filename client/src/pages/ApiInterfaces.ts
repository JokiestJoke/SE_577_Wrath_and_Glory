export interface TierOneArchetypes {
    archetypeTitle: string,
    archetypeSpecies: string,
    experiencePointCost: string,
    keywords: string,
    attributes: string,
    skills: string,
    strength: string,
    toughness: string,
    agility: string,
    willpower: string,
    intellect: string,
    fellowship: string,
    speed: string,
    ability: string,
    wargear: string
}

export interface ApiErrorInterface {
    isError: boolean,
    errorCode: number,
    errorMessage: string
}