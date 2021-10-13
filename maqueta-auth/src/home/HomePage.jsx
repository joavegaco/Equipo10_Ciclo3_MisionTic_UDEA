import React, {useState, useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import ForbidenComponent from '../shared/components/forbiden/ForbidenComponent';

function HomePage() {
    
    const [contrasenya,setUser] = useState([]);
    const {user, isAuthenticated} = useAuth0();

    const getUser = async () => {
        try {
            const response = await fetch("http://localhost:5000/get-user");
            const jsonResponse = await response.json();
            const responseUser = jsonResponse.data;
            const listUser = responseUser.map((contrasenya) =>
                <tr>
                    <th scope="row">{contrasenya.ID}</th>
                    <td>{contrasenya.rol}</td>
                    <td>{contrasenya.email}</td>
                    
                </tr>
            );
            setUser(listUser)
        }
        catch (error) {
            console.log(error)
        }

    }
    

    const validateUserRole = async() =>{
        const response = await fetch(`http://localhost:5000/get-user?email=${user}`);
        const jsonResponse = await response.json();
        return jsonResponse;
    }

  const grantAccess = async () => {
    let userData;
    if (isAuthenticated) {
        userData = await validateUserRole();
    }
    else {
        return false;
    }

    if (userData) {
        if (userData.role !== "invited") {
            return true
        }
        else {
            return false;
        }
    }
    else {
        return false
    }
}


    useEffect(()=>{
        getUser();
    },[]);

    if(grantAccess()){
    return (
        <div>
            <h1>Bienvenido a Atomium</h1>
            {contrasenya}
        </div>
    )}
    else{
        return <ForbidenComponent />;
    }

}


export default HomePage
