import axios from "axios"
import { CountriesApi } from "../constants"


export class CountryService {
    static getCountries = async () => {
        const res = await axios.get(CountriesApi.url)
        return res
    }
}