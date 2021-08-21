export class CountriesApi {
    static url:string = 'https://restcountries.eu/rest/v2/all'
}

export class CustomersApi{
    static url:string = 'http://localhost:3001/'

    static add:string = CustomersApi.url+'signup'
    
    static get:string = CustomersApi.url+'customers'

}