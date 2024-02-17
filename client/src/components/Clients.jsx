import {gql, useQuery} from '@apollo/client'
import ClientRow from './ClientsRow'
import Spinner from './Spinner';
import { GET_CLIENTS } from '../quries/ClientQuries';


const Clients = () => {
    const {loading, error, data} = useQuery(GET_CLIENTS);
    if(loading) return <Spinner/>;
    if(error) return <p>Something went wrong</p>;
  return (
    <div className=''>
         {!loading && !error && (
        <table className='table table-hover mt-3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Clients