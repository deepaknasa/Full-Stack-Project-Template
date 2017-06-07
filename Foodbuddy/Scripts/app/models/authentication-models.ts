export class LoginModel implements Credential {
    email: string;
    password: string;
    rememberMe: string;
}

export class RegisterModel implements Credential{
    email: string;
    password: string;
    confirmPassword: string;
}

class Credential {
    email: string;
    password: string;
}