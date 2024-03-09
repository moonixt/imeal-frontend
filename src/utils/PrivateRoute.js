/* import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react' 
import AuthContext from '../context/AuthContext'


const PrivateRoute = () => {
    console.log('Rota privada está funcionando!')
   let {user} = useContext(AuthContext)

    return(
        user ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoute */