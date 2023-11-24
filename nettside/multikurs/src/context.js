import { createContext, useState } from "react";

export const UserContext = createContext();
export function UserContextProvider({ children }) {
	const [userData, setUserData] = useState({
		logged_in: false,
	});
	return (
		<UserContext.Provider value={[userData, setUserData]}>
			{children}
		</UserContext.Provider>
	)
}