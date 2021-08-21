import { ChangeEvent, useState } from "react"

export const useForm = <T extends Object>(initState: T) => {
    const [form, setForm] = useState(initState)

    const handleChange = ({target}: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = target
        console.log(name, value)
        setForm({
            ...form,
            [name]: value
        })
    }

    return {
        form,
        handleChange,
        ...form
    }
}