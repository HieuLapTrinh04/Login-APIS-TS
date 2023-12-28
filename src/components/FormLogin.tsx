import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormLogin: React.FC = () => {
  const navigate = useNavigate();
  const User = [
    {
      userName: "minhhieu",
      password: "111111",
    },
    {
      userName: "buihieu",
      password: "222222",
    },
  ];

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    checkAccount();
  };
  const handleChangeUserName = (event: any) => {
    setUserName(event.target.value);
  };
  const handleChangePassword = (event:any) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const checkAccount = () => {
    const index = User.findIndex(e => e.userName === userName && e.password === password);
    if (index === -1) {
      alert("Sai tên hoặc mật khẩu !!");
      return
    }
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('loggedUser', userName)
    // window.location.href = "/about";
    navigate('/about');
  };

  return ( 
    <>
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <input
          type="text"
          id="username"
          placeholder="Username..."
          autoFocus={true}
          className="mb-5 w-64 m-auto h-10 border-red-500 rounded-lg  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset p-2"
          onChange={handleChangeUserName}
          value={userName}
        />
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Password..."
          className="m-auto w-64 mb-5 h-10 border-red-500 rounded-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset p-2"
          onChange={handleChangePassword}
          value={password}
        /> <br /> 
        
        <div className="flex flex-row m-auto">
          <input type="checkbox" name="check" id="remember_me" />
          <label
            htmlFor="remember_me"
            className="pl-3 pr-10 text-sm font-medium"
          >
            Remember me
          </label>
          <p className="text-sm ml-10 font-medium text-violet-800">
            Forgot your password?
          </p>
        </div>
        <div>
          <button
            type="submit"
            className="rounded-full w-64 h-12 bg-emerald-400 mt-7 mb-7 hover:bg-emerald-500"
            // disabled={isDisabled}
            onClick={() => console.log('aaaaaa')}
          >
            Login
          </button>
        </div>
      </div>
    </form>
    <div className="relative bottom-40 left-1">
    <button onClick={toggleShowPassword}>
    {showPassword ? "Hide" : "Show"} Password
  </button>
    </div>
    </>
  );
};
export default FormLogin;
