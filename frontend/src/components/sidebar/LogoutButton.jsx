import { BiLogOut } from 'react-icons/bi';
const LogoutButton = () => {
  return (
    <div className="mt-auto flex items-center py-2 text-white cursor-pointer">
      <BiLogOut className="w-6 h-6 mr-2" />
      <span>Logout</span>
    </div>
  );
};

export default LogoutButton;
