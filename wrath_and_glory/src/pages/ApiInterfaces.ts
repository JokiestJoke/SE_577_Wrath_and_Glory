export interface StudentApiInterface {
    studentId: string,
    studentName: string,
    courseId: string
}

export interface TierOneArchetypes {
    archetypeTitle: string,
    archetypeSpecies: string,
    experiencePointsCost: string,
    keywords: string,
    attributes: string,
    skills: string,
    ability: string,
    wargear: string
}

export interface ApiErrorInterface {
    isError: boolean,
    errorCode: number,
    errorMessage: string
}