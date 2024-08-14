import { EventEmitter } from '../../stencil-public-runtime';
interface UserAnswer {
  questionId: string;
  answer: any;
}
export declare class AssessmentComponent {
  questions: any[];
  resultsIntro: string;
  showProgress: boolean;
  currentPage: number;
  answers: UserAnswer[];
  validationErrors: Set<string>;
  completedPages: number;
  searchResults: any[];
  searchLoading: boolean;
  assessmentCompleted: EventEmitter<any>;
  pageChanged: EventEmitter<number>;
  progressUpdated: EventEmitter<number>;
  handleAnswer(questionId: string, answer: any): void;
  validateCurrentPage(): boolean;
  updateProgress(): void;
  handleNextPage(event: MouseEvent): void;
  handlePreviousPage(event: MouseEvent): void;
  handleSubmit(event?: MouseEvent): void;
  renderQuestion(element: any): any;
  render(): any;
}
export {};
