import { FC } from 'react'

interface Customer {
    _id: number,
    username: string,
    country?: string,
    active?: boolean
}

interface Customers {
    customers: Customer[]
}

const PeopleList: FC<Customers> = (props): JSX.Element => {
    const {customers} = props

    return (
        <div>
            <ul>
                {
                    customers.map(customer => 
                        <li key={customer._id}>
                            {customer.username} - {customer.country || 'colombia'}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default PeopleList
