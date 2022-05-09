declare const _default: {
    input: {
        firstName: string;
        lastName: string;
        dateOfBirth: string;
        jobTitle: string;
        company: string;
        country: string;
    }[];
    expectedOutput: {
        status: number;
        message: string;
        payload: ({
            firstName: string;
            lastName: string;
            dateOfBirth: string;
            jobTitle: string;
            company: string;
            country: {
                name: string;
                region: string;
                currency: string;
                languages: string[];
                timezones: string[];
            };
            additionalID: string;
        } | {
            firstName: string;
            lastName: string;
            dateOfBirth: string;
            jobTitle: string;
            company: string;
            country: {
                name: string;
                region: string;
                currency: string;
                languages: string[];
                timezones: string[];
            };
            additionalID?: undefined;
        })[];
    };
};
export default _default;
