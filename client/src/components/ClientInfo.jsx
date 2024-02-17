import { FaEnvelope, FaPhone, FaIdBadge } from 'react-icons/fa';

export default function ClientInfo({ Client }) {
    console.log(Client)
  return (
    <>
      <h5 className='mt-5 mb-3 font-semibold'>Client Information</h5>
      <ul className='list-group'>
        <li className='list-group-item flex items-center  text-[17px]'>
          <FaIdBadge className='icon' /> {Client.name}
          
        </li>
        <li className='list-group-item flex items-center  text-[17px]'>
          <FaEnvelope className='icon' /> {Client.email}
        </li>
        <li className='list-group-item flex items-center  text-[17px]'>
          <FaPhone className='icon' /> {Client.phone}
        </li>
      </ul>
    </>
  );
}
