import { useNavigate } from 'react-router-dom';

const FormCard = ({ titulo, descripcion, ruta }) => {
    const navigate = useNavigate();

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 cursor-pointer" 
    onClick={() => navigate(ruta)}>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{titulo}</h2>
        <p className="text-gray-600">{descripcion}</p>
      </div>
    </div>
  );
};

export default FormCard;
