import { useState } from 'react';
import ChangePassword from './ChangePassword';
import EditUser from './EditUser';
import { UpdateMode } from '../../utils/types.d';

const UpdateUser = () => {
    const [updateMode, setUpdateMode] = useState<UpdateMode>(UpdateMode.default);

    const close = () => {
        setUpdateMode(UpdateMode.default)
    }

    switch (updateMode) {
        case UpdateMode.editUser:
            return <EditUser close={close} />
        case UpdateMode.changePassword:
            return <ChangePassword close={close} />
        default:
            return (
                <div>
                    <button onClick={() => setUpdateMode(UpdateMode.changePassword)}>Change password</button>
                    <button onClick={() => setUpdateMode(UpdateMode.editUser)}>Edit profile</button>
                </div>
            )
    }
}

export default UpdateUser