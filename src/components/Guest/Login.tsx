import React, { useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { fetchUser } from '../../features/api/asyncActions'
import { createToken } from '../../utils/constants'

const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useAppDispatch()

    const handleClickClear = () => {
        setLogin('')
        setPassword('')
    }

    const handleClickLogin = () => {
        dispatch(fetchUser(createToken(login, password)))
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
            <button onClick={handleClickLogin}>Login</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    )
}

export default Login