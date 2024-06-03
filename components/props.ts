interface Option {
  display: string;
  value: string | boolean;
  isRejection: boolean;
}

export interface Question {
  question: string;
  type: string;
  options: Option[];
}

export interface Questions {
  questions: Question[]
}
