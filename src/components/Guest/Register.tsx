import { useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { registerUser } from '../../features/api/asyncActions'

const Register = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const dispatch = useAppDispatch();

    const handleClickClear = () => {
        setLogin('')
        setPassword('')
        setFirstName('')
        setLastName('')
    }

    const handleClickRegister = () => {
        dispatch(registerUser({ login, firstName, lastName, password }))
    }

    return (
        <>
            <label>Login:
                <input
                    onChange={e => setLogin(e.target.value.trim())}
                    type='text'
                    value={login}
                />
            </label>
            <label>Password:
                <input
                    onChange={e => setPassword(e.target.value.trim())}
                    type='password'
                    value={password}
                />
            </label>
            <label>First name:
                <input
                    onChange={e => setFirstName(e.target.value.trim())}
                    type='text'
                    value={firstName}
                />
            </label>
            <label>Last name:
                <input
                    onChange={e => setLastName(e.target.value.trim())}
                    type='text'
                    value={lastName}
                />
            </label>
            <button onClick={handleClickRegister}>Register</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    )
}

export default Register