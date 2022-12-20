export declare class TestService {
    private testRepository;
    constructor();
    getAll: () => Promise<any>;
    createTest: (test: any) => Promise<void>;
    remove: (idDelete: any) => Promise<void>;
    updateTest: (idEdit: any, newTest: any) => Promise<void>;
    findTest: (idCFind: any, nameFind: any) => Promise<any>;
}
