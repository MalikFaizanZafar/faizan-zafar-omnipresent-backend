import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Country, Response, User } from './interfaces';
import UserDTO from './user.dto';

@Injectable()
export class UserService {
    apiEndpoint: string = 'https://restcountries.com/v2/alpha/'
    regionsForAdditionalID: string[] = ['Asia', 'Europe']
    
    constructor(private readonly httpService: HttpService) {}

    // Will return array of unique countries
    // Purpose is to not make multiple requests for multiple users of same countries
    private getUniqueCountries(usersData: UserDTO[]): string[]{
        // Getting list of countries from users objects
        let countries: string[] = usersData.map((ud:UserDTO) => ud.country)

        // Removing duplicate countries
        const uniqueCountries: Set<string> = new Set([...countries])

        // Converting set back to array
        countries = Array.from(uniqueCountries)
        return countries
    }

    // Will be used to make http requests to rest countries website for getting data for each country
    // expects array of unique countries
    private async getDataFromRestCountries(countries: string[]){
        // Will contain list of of all http requests promises
        let promises: any[] = [] 

        // Sending request against each country
        countries.forEach((country: string) => {
            promises.push(
                this.httpService.get(`${this.apiEndpoint}/${country}`).toPromise()
            )
        })

        // Resolving all promises
        const restCountriesResponse = await Promise.all(promises)
        
        // Storing only relevant response data from rest countries api
        // relevant data exists inside the data field of response object
        const restCountriesData = []
        restCountriesResponse.forEach(r => {
            restCountriesData.push(r.data)
        })
        return restCountriesData
    }
    // The purpose is to convert array of country objects into key value pairs of { country => countryData }
    private formatRestCountries(restCountries: any[]){
        const formattedCountries: Country[] = []
        const countriesObject: any = {}
        restCountries.forEach((rc, i) => {
            const country: Country = {
                name: rc.name,
                region: rc.region,
                currency: rc.currencies[0].code,
                languages: rc.languages.map(lang => lang.name),
                timezones: rc.timezones,
            }
            countriesObject[`${rc.alpha2Code}`] = country
            countriesObject[`${rc.alpha3Code}`] = country
            formattedCountries.push(country)
        })
        return [formattedCountries, countriesObject]
    }

    // Purpose is to merge user and country data into one big object
    private formatUsers(usersData: UserDTO[], countriesObject: any){
        const formattedUsers: User[] = []
        usersData.forEach((ud, i) => {
            const formattedUser: User = {
                ...ud,
                country: countriesObject[`${ud.country}`]
            }
            if(this.regionsForAdditionalID.includes(formattedUser.country.region)){
                formattedUser.additionalID = `${ud.firstName}${ud.lastName}${ud.dateOfBirth}`
            }
            formattedUsers.push(formattedUser)
        })
        return formattedUsers
    }


    async getUsers(usersData: UserDTO[]):Promise<Response<User>>{
        // Getting unique list of countries
        const countries: string[] = this.getUniqueCountries(usersData)

        // Getting data from  the restCountries api for each of the countries
        const restCountriesData = await this.getDataFromRestCountries(countries)
        
        // Converting array of countries to single object
        const [formattedCountries, countriesObject] = this.formatRestCountries(restCountriesData)
        
        // Updating every user with related country data
        const formattedUsers = this.formatUsers(usersData, countriesObject)

        const response: Response<User> = {
            status: 200,
            message: 'Success',
            payload: formattedUsers
        }
        return response
    }
}
