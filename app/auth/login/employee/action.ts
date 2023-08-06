"use server"

interface StudentCredentials {
    email: string
    password: string
}

const EmployeeLoginAction = async ({email, password} :StudentCredentials) => {
    if (email === "testing@schoolmanagement.com" && password === "12345678") {
        return true
    } else {
        return false
    }
}

export default EmployeeLoginAction