interface Option {
  display: string;
  value: string | boolean;
  isRejection: boolean;
}

export interface QuestionProps {
  question: string;
  type: string;
  options: Option[];
}

export interface QuestionsProps {
  questions: QuestionProps[]
}
