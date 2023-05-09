export interface TierOneArchetypes {
    archetypeTitle: string,
    archetypeSpecies: string,
    experiencePointCost: string,
    keywords: string,
    skills: string,
    attributes: string,
    ability: string,
    wargear: string
}

export interface ApiErrorInterface {
    isError: boolean,
    errorCode: number,
    errorMessage: string
}