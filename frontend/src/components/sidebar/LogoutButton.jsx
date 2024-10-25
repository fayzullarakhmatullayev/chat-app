import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout';
const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto flex items-center py-2 text-white cursor-pointer" onClick={logout}>
      {!loading ? (
        <>
          <BiLogOut className="w-6 h-6 mr-2" />
        </>
      ) : (
        <span className="loading loading-spinner text-white"></span>
      )}
    </div>
  );
};

export default LogoutButton;
