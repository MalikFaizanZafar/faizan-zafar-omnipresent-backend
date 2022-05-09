export interface Response<T> {
    status: number;
    message: string;
    payload: T[];
}
export interface User {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    jobTitle: string;
    company: string;
    country: Country;
    additionalID?: string;
}
export interface Country {
    name: string;
    region: string;
    currency: string;
    languages: string[];
    timezones: string[];
}
