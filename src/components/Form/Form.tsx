import { ChangeEvent, useEffect, useState } from 'react'
import { CountryService } from '../../services/countryService'
import { SelectSearchOption } from 'react-select-search';
import './formStyles.scss'
import { useForm } from '../../hooks/useForm';
import { CustomerService } from '../../services/customerService';

interface formData {
    name: string,
    country: string,
    active: boolean
}

type Props = {
    setToggleReload: React.Dispatch<React.SetStateAction<any>>;
    toggleReload: boolean
};

const Form: React.FC<Props> = ({ setToggleReload, toggleReload }) => {
    const [countryList, setCountryList] = useState<SelectSearchOption[]>([])

    const {form, handleChange} = useForm<formData>({
        name: '',
        country: '',
        active: true
    })

    const getData = async () => {
        const res = await CountryService.getCountries()
        setCountryList(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    const handleSubmit = async (e: ChangeEvent<any>) => {
        e.preventDefault()
        console.log(form)

        await CustomerService.addNewCustomer(form)
        setToggleReload(!toggleReload)
    }

    return (
        <div className="form-container">
            <form>
                <label htmlFor="">Name:</label>
                <input onChange={handleChange} type="text" name="name" />
                <label htmlFor="">Country:</label>
                {/* <SelectSearch options={countryList} placeholder="Choose your country" /> */}
                <select name="country" onChange={handleChange}>
                    <option value="">select</option>
                    {
                        countryList.map(country => (
                            <option
                                key={country.name}
                                value={country.name}
                            >
                                {country.name}
                            </option>
                        ))
                    }
                </select>
                <button onClick={(e) => handleSubmit(e)}>Add person</button>
            </form>
        </div>
    )
}

export default Form
