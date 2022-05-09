"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "input": [
        {
            "firstName": "Faizan",
            "lastName": "Zafar",
            "dateOfBirth": "05/05/1993",
            "jobTitle": "Software developer",
            "company": "Luckytruck",
            "country": "PK"
        },
        {
            "firstName": "Roy",
            "lastName": "Testerton",
            "dateOfBirth": "19/02/1990",
            "jobTitle": "Software developer",
            "company": "Test co",
            "country": "US"
        },
        {
            "firstName": "Lisa",
            "lastName": "Testora",
            "dateOfBirth": "11/07/1984",
            "jobTitle": "CTO",
            "company": "Test co",
            "country": "GBR"
        },
        {
            "firstName": "Simon",
            "lastName": "McTester",
            "dateOfBirth": "01/11/1987",
            "jobTitle": "Product manager",
            "company": "Mock industries",
            "country": "IND"
        },
        {
            "firstName": "Selina",
            "lastName": "Testo",
            "dateOfBirth": "23/11/1972",
            "jobTitle": "Software developer",
            "company": "Mock industries",
            "country": "IND"
        },
        {
            "firstName": "Tim",
            "lastName": "Mockman",
            "dateOfBirth": "12/11/1972",
            "jobTitle": "Software developer",
            "company": "Mock industries",
            "country": "IND"
        },
        {
            "firstName": "Melissa",
            "lastName": "Mocker",
            "dateOfBirth": "10/01/1982",
            "jobTitle": "Software developer",
            "company": "Mock industries",
            "country": "US"
        }
    ],
    "expectedOutput": {
        "status": 200,
        "message": "Success",
        "payload": [
            {
                "firstName": "Faizan",
                "lastName": "Zafar",
                "dateOfBirth": "05/05/1993",
                "jobTitle": "Software developer",
                "company": "Luckytruck",
                "country": {
                    "name": "Pakistan",
                    "region": "Asia",
                    "currency": "PKR",
                    "languages": [
                        "Urdu",
                        "English"
                    ],
                    "timezones": [
                        "UTC+05:00"
                    ]
                },
                "additionalID": "FaizanZafar05/05/1993"
            },
            {
                "firstName": "Roy",
                "lastName": "Testerton",
                "dateOfBirth": "19/02/1990",
                "jobTitle": "Software developer",
                "company": "Test co",
                "country": {
                    "name": "United States of America",
                    "region": "Americas",
                    "currency": "USD",
                    "languages": [
                        "English"
                    ],
                    "timezones": [
                        "UTC-12:00",
                        "UTC-11:00",
                        "UTC-10:00",
                        "UTC-09:00",
                        "UTC-08:00",
                        "UTC-07:00",
                        "UTC-06:00",
                        "UTC-05:00",
                        "UTC-04:00",
                        "UTC+10:00",
                        "UTC+12:00"
                    ]
                }
            },
            {
                "firstName": "Lisa",
                "lastName": "Testora",
                "dateOfBirth": "11/07/1984",
                "jobTitle": "CTO",
                "company": "Test co",
                "country": {
                    "name": "United Kingdom of Great Britain and Northern Ireland",
                    "region": "Europe",
                    "currency": "GBP",
                    "languages": [
                        "English"
                    ],
                    "timezones": [
                        "UTC-08:00",
                        "UTC-05:00",
                        "UTC-04:00",
                        "UTC-03:00",
                        "UTC-02:00",
                        "UTC",
                        "UTC+01:00",
                        "UTC+02:00",
                        "UTC+06:00"
                    ]
                },
                "additionalID": "LisaTestora11/07/1984"
            },
            {
                "firstName": "Simon",
                "lastName": "McTester",
                "dateOfBirth": "01/11/1987",
                "jobTitle": "Product manager",
                "company": "Mock industries",
                "country": {
                    "name": "India",
                    "region": "Asia",
                    "currency": "INR",
                    "languages": [
                        "Hindi",
                        "English"
                    ],
                    "timezones": [
                        "UTC+05:30"
                    ]
                },
                "additionalID": "SimonMcTester01/11/1987"
            },
            {
                "firstName": "Selina",
                "lastName": "Testo",
                "dateOfBirth": "23/11/1972",
                "jobTitle": "Software developer",
                "company": "Mock industries",
                "country": {
                    "name": "India",
                    "region": "Asia",
                    "currency": "INR",
                    "languages": [
                        "Hindi",
                        "English"
                    ],
                    "timezones": [
                        "UTC+05:30"
                    ]
                },
                "additionalID": "SelinaTesto23/11/1972"
            },
            {
                "firstName": "Tim",
                "lastName": "Mockman",
                "dateOfBirth": "12/11/1972",
                "jobTitle": "Software developer",
                "company": "Mock industries",
                "country": {
                    "name": "India",
                    "region": "Asia",
                    "currency": "INR",
                    "languages": [
                        "Hindi",
                        "English"
                    ],
                    "timezones": [
                        "UTC+05:30"
                    ]
                },
                "additionalID": "TimMockman12/11/1972"
            },
            {
                "firstName": "Melissa",
                "lastName": "Mocker",
                "dateOfBirth": "10/01/1982",
                "jobTitle": "Software developer",
                "company": "Mock industries",
                "country": {
                    "name": "United States of America",
                    "region": "Americas",
                    "currency": "USD",
                    "languages": [
                        "English"
                    ],
                    "timezones": [
                        "UTC-12:00",
                        "UTC-11:00",
                        "UTC-10:00",
                        "UTC-09:00",
                        "UTC-08:00",
                        "UTC-07:00",
                        "UTC-06:00",
                        "UTC-05:00",
                        "UTC-04:00",
                        "UTC+10:00",
                        "UTC+12:00"
                    ]
                }
            }
        ]
    }
};
//# sourceMappingURL=test.sample.js.map