import React,{useEffect,useContext} from 'react';
import "../../App.css"
import { useHistory } from 'react-router';
import userContext from '../../context/userContext';
const Logout = () => {
    const history = useHistory();
    const { userData, setUserData } = useContext(userContext);
    const logout = async () => {
        try {
            setUserData({
                token: undefined,
                user: undefined
                })
            localStorage.setItem("auth-token","");
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if(!userData.user){
        history.push("/");
        window.alert("User Loged out");
        }
        logout();
    });

    return (
        <div>
        </div>
    );
}

export default Logout;
