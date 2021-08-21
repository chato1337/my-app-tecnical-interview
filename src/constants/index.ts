export class CountriesApi {
    static url:string = 'https://restcountries.eu/rest/v2/all'
}

export class CustomersApi{
    static url:string = 'http://ec2-3-128-203-154.us-east-2.compute.amazonaws.com:3001/'

    static add:string = CustomersApi.url+'signup'
    
    static get:string = CustomersApi.url+'customers'

}