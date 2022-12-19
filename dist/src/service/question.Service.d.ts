export declare class QuestionService {
    private questionRepository;
    constructor();
    getAll: () => Promise<any>;
    createQuestion: (question: any) => Promise<void>;
}
