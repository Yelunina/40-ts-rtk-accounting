import { useAppDispatch } from '../../app/hooks'
import { deleteToken } from '../../features/slices/tokenSlice'
import { deleteUser } from '../../features/slices/userSlice'
import UpdateUser from './UpdateUser'
import UserData from './UserData'

const Profile = () => {
  const dispatch = useAppDispatch()

  const handleClickLogout = () => {
    dispatch(deleteToken())
    dispatch(deleteUser())
  }
  return (
    <div>
      <UserData />
      <button onClick={handleClickLogout}>Logout</button>
      <UpdateUser />
    </div>
  )
}

export default Profile