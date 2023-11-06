import { createContext,useState,PropsWithChildren,useEffect } from "react";
import adminApi from "../constants/axios";


interface IAuthContext {
	isLoggedIn: boolean;
}

export const AuthContext = createContext<IAuthContext>({
	
	isLoggedIn: false,
});

export default function AuthContextProvider({ children }: PropsWithChildren) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
      checkAutherization();
    }, []);
    const checkAutherization = async () => {
      console.log("1");
      console.log("isloggedin=", isLoggedIn);
  
      const auth = await adminApi.post("/auth");
      console.log(auth);
      if (auth.data.authentication) {
        setIsLoggedIn(true);
      }
    };

    return (
        <AuthContext.Provider 
        value={{
          isLoggedIn,
        }}
        >
          {children}
        </AuthContext.Provider>
	);
}