import axios from "axios"
import { CustomersApi } from "../constants"

type Customer = {
    name: string,
    country: string
}

export class CustomerService {
    static addNewCustomer = async (data:Customer) => {
        const newUser = {
            username: data.name,
            email: 'test@tst.me',
            password: 'test123',
            role: 'normal',
            country: data.country
        }
        return await axios.post(CustomersApi.add, newUser)
            .then(res => console.log('saved: ', data))
            .catch(err => console.log(err))
    }

    static getCustomers = async () => {
        const res = await axios.get(CustomersApi.get)
        return res.data
    }
}