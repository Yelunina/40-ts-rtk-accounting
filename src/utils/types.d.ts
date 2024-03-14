export enum UpdateMode {
    default = '', editUser = 'editUser', changePassword = 'changePassword'
}

export interface BaseUser {
    firstName: string,
    lastName: string,
    login: string,
}

export interface UserProfile extends BaseUser {
    roles: string[]
}

export interface UserRegister extends BaseUser {
    password: string
}