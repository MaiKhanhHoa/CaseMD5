export declare class AnswerService {
    private answerRepository;
    constructor();
    getAll: () => Promise<any>;
    createAnswer: (answer: any) => Promise<void>;
    remove: (idDelete: any) => Promise<void>;
    updateAnswer: (idEdit: any, newAnswer: any) => Promise<void>;
}
