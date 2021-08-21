import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import PeopleList from './components/PeopleList/PeopleList';
import { CustomerService } from './services/customerService';
interface Customer {
  _id: number,
  username: string,
  country?: string,
  active?: boolean
}


function App() {

  const [customers, setCustomers] = useState<Customer[]>([])
  const [toggleReload, setToggleReload] = useState(false)

  const getCustomers = async () => {
      const data = await CustomerService.getCustomers()
      setCustomers(data)
  }

  useEffect(() => {
      getCustomers()
      console.log('entro aca')
  }, [toggleReload])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Tech prof</h1>
        <Form setToggleReload={setToggleReload} toggleReload={toggleReload} />
        <PeopleList customers={customers} />
      </header>
    </div>
  );
}

export default App;
