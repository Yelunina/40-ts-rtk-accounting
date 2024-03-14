import { useAppSelector } from '../../app/hooks'

const UserData = () => {
  const user = useAppSelector(state => state.user)
  return (
    <div>
      <p>First name: {user.firstName}</p>
      <p>Last name: {user.lastName}</p>
      <p>Login: {user.login}</p>
      <ul>
        {user.roles.map(r => <li key={r}>{r}</li>)}
      </ul>
    </div>
  )
}

export default UserData