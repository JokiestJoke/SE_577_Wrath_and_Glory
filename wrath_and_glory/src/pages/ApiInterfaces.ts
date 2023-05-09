export interface StudentApiInterface {
    studentId: string,
    studentName: string,
    courseId: string
}

export interface TierOneArchetypes {
    archetypeTitle: string,
    archetypeSpecies: string,
    experiencePointsCost: string,
    keywords: string
}

export interface ApiErrorInterface {
    isError: boolean,
    errorCode: number,
    errorMessage: string
}