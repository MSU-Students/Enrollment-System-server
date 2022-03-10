export interface User {
    id?:number
    fName:string
    lName:string
    mName: string
    userName: string
    password:string
    userType:'Admin' | 'Chairperson' | 'Registrar'

}
