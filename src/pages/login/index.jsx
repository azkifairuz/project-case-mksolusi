import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 
  const handleLogin = async (e) => {
    e.preventDefault(); 
    console.log(username);
    console.log(password);
    try {
      const response = await axios.post("https://api2024.mksolusi.id/api/auth/login", {
        username,
        password,
      });

      console.log(response.data);
      if (response.data.message == "User / password tidak tepat") {
        setError("Login failed. password atau username tidak tepat."); 
        return
      }
      localStorage.setItem("token", response.data.userdata.api_token);
      localStorage.setItem("userPdofile",response.data.userdata)
      console.log("token", response.data.userdata.api_token);
      navigate('/member')
    } catch (err) {
      console.error(err);
      setError("Login failed. Please check your credentials."); 
    }
  };
  return (
    <div className="bg-white">
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="max-h-auto mx-auto max-w-xl min-w-[500px]">
          <div className="mb-8 space-y-3">
            <p className="text-xl font-semibold">Login</p>
            <p className="text-gray-500">Selamat Datang</p>
          </div>
          <form className="w-full"  onSubmit={handleLogin}>
            <div className="mb-10 space-y-3">
              <div className="space-y-1">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="username"
                    placeholder="masukan username anda"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="password"
                    placeholder="masukan password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}

                  />
                </div>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                className="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
