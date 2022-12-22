import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/UserContext";

const ChangePassword = () => {
  const { changePassword, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then()
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPassword = event.target.newPassword.value;
    changePassword(newPassword)
      .then(() => {
        toast.success("Password changed successfully");
        handleLogout();
        navigate("/login");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="flex justify-center items-center pt-8">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-2xl font-bold">Change Your Password</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  New Password
                </label>
              </div>
              <input
                type="password"
                name="newPassword"
                id="newPassword"
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
