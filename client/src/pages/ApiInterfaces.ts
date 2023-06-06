export interface TierOneArchetypes {
    archetypeTitle: string,
    archetypeSpecies: string,
    experiencePointCost: string,
    keywords: string,
    attributes: string,
    strength: string,
    toughness: string,
    agility: string,
    willpower: string,
    intellect: string,
    fellowship: string,
    speed: string,
    ability: string,
    skills: string,
    athletics: string,
    awareness: string,
    ballisticskill: string,
    cunning: string,
    deception: string,
    insight: string,
    intimidation: string,
    leadership: string,
    investigation: string,
    medicae: string,
    persuasion: string,
    pilot: string,
    psychic: string,
    scholar: string,
    stealth: string,
    survival: string,
    tech: string,
    weaponskill: string,
    wargear: string
}

export interface WrathAndGloryNames {
    name: string,
    gender: string,
    species: string
}

export interface ApiErrorInterface {
    isError: boolean,
    errorCode: number,
    errorMessage: string
}