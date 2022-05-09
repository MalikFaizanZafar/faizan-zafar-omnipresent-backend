"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
let UserService = class UserService {
    constructor(httpService) {
        this.httpService = httpService;
        this.apiEndpoint = 'https://restcountries.com/v2/alpha/';
        this.regionsForAdditionalID = ['Asia', 'Europe'];
    }
    getUniqueCountries(usersData) {
        let countries = usersData.map((ud) => ud.country);
        const uniqueCountries = new Set([...countries]);
        countries = Array.from(uniqueCountries);
        return countries;
    }
    async getDataFromRestCountries(countries) {
        let promises = [];
        countries.forEach((country) => {
            promises.push(this.httpService.get(`${this.apiEndpoint}/${country}`).toPromise());
        });
        const restCountriesResponse = await Promise.all(promises);
        const restCountriesData = [];
        restCountriesResponse.forEach(r => {
            restCountriesData.push(r.data);
        });
        return restCountriesData;
    }
    formatRestCountries(restCountries) {
        const formattedCountries = [];
        const countriesObject = {};
        restCountries.forEach((rc, i) => {
            const country = {
                name: rc.name,
                region: rc.region,
                currency: rc.currencies[0].code,
                languages: rc.languages.map(lang => lang.name),
                timezones: rc.timezones,
            };
            countriesObject[`${rc.alpha2Code}`] = country;
            countriesObject[`${rc.alpha3Code}`] = country;
            formattedCountries.push(country);
        });
        return [formattedCountries, countriesObject];
    }
    formatUsers(usersData, countriesObject) {
        const formattedUsers = [];
        usersData.forEach((ud, i) => {
            const formattedUser = Object.assign(Object.assign({}, ud), { country: countriesObject[`${ud.country}`] });
            if (this.regionsForAdditionalID.includes(formattedUser.country.region)) {
                formattedUser.additionalID = `${ud.firstName}${ud.lastName}${ud.dateOfBirth}`;
            }
            formattedUsers.push(formattedUser);
        });
        return formattedUsers;
    }
    async getUsers(usersData) {
        const countries = this.getUniqueCountries(usersData);
        const restCountriesData = await this.getDataFromRestCountries(countries);
        const [formattedCountries, countriesObject] = this.formatRestCountries(restCountriesData);
        const formattedUsers = this.formatUsers(usersData, countriesObject);
        const response = {
            status: 200,
            message: 'Success',
            payload: formattedUsers
        };
        return response;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map