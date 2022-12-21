export declare class UserService {
    private userRepository;
    constructor();
    checkLogin: (userLogin: any) => Promise<{
        check: boolean;
        token: string;
        userFind: string;
    }>;
    checkRegister: (userRegister: any) => Promise<any>;
    createUser: (user: any) => Promise<void>;
    CheckChangePassword: (idUser: any, oldPassword: any, newPassword: any) => Promise<any>;
    getAll: () => Promise<any>;
    remove: (idDelete: any) => Promise<void>;
}
