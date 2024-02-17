import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ClientInfo from '../components/ClientInfo';
import DeleteProjectButton from '../components/DeleteProjectButton.jsx';
import EditProjectForm from '../components/EditProjectForm.jsx';
import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../quries/ProjectQueries';

export default function Project() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <div className='mx-auto w-75 card p-5'>
          <Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'>
            Back
          </Link>

          <h1 className='text-[22px] font-semibold pb-3'>{data.project.name}</h1>
          <p>{data.project.description}</p>

          <h5 className='mt-3 font-medium'>Project Status</h5>
          <p className='lead'>{data.project.status}</p>

          <ClientInfo Client={data.project.Client} />

           <EditProjectForm project={data.project}  />

          <DeleteProjectButton projectId={data.project.id} /> 
        </div>
      )}
    </>
  );
}
