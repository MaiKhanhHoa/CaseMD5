export declare class QuestionService {
    private questionRepository;
    constructor();
    getAll: () => Promise<any>;
    createQuestion: (question: any) => Promise<void>;
    remove: (idDelete: any) => Promise<void>;
    updateQuestion: (idEdit: any, newQuestion: any) => Promise<void>;
    setPointQuestion: (idTest: any) => Promise<void>;
}
