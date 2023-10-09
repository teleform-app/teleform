export interface Form {
  id: string;
  title: string;
  emoji: string;
  participants: number;
  questions: FormQuestion[];
}

export type FormPreview = Pick<Form, "id" | "title" | "emoji" | "participants">;

export type FormQuestionType = "text" | "name" | "email" | "phone" | "select";
export interface FormQuestion {
  type: FormQuestionType;
  title: string;
  mandatory?: boolean;
  multichoice?: boolean;
  options?: string[];
}

export type FormQuestionAnswer = string | string[];
