import { useContext } from "react";
import { UserContext } from "./context";

export function useRefreshUserData() {
    const [userData, setUserData] = useContext(UserContext);
    return () => {
        fetch('/api/userdata', {
            method: 'GET',
        }).then((res) => {
            if (res.status === 200) {
                res.json().then((data) => {
                    setUserData(data);
                });
            }
        });
    }
}