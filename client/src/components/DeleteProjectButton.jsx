import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { DELETE_PROJECT } from '../mutations/projectMutations';
import { GET_PROJECTS } from '../quries/ProjectQueries';
import { useMutation } from '@apollo/client';
import toast from 'react-hot-toast';

export default function DeleteProjectButton({ projectId }) {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () =>{
       toast.success('Project Deleted');
       navigate('/')},
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  return (
    <div className='d-flex mt-5 ms-auto'>
      <button className='btn btn-danger m-2 flex items-center' onClick={deleteProject}>
        <FaTrash className='icon' /> Delete Project
      </button>
    </div>
  );
}
