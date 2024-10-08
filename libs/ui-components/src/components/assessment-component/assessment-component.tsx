import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';
interface UserAnswer {
  questionId: string;
  answer: any;
}

@Component({
  tag: 'assessment-component',
  styleUrl: './assessment-component.scss',
  shadow: true,
})
export class AssessmentComponent {
  @Prop() questions: any[] = [];
  @Prop() resultsIntro: string = '';
  @Prop() showProgress: boolean = true;

  @State() currentPage: number = 0;
  @State() answers: UserAnswer[] = [];
  @State() validationErrors: Set<string> = new Set();
  @State() completedPages: number = 0;
  @State() searchResults: any[] = [];
  @State() searchLoading: boolean = false;
  @Event() assessmentCompleted: EventEmitter<any>;
  @Event() pageChanged: EventEmitter<number>;
  @Event() progressUpdated: EventEmitter<number>;

  handleAnswer(questionId: string, answer: any) {
    this.answers = [...this.answers.filter((a) => a.questionId !== questionId), { questionId, answer }];
    this.validationErrors.delete(questionId);
  }

  validateCurrentPage(): boolean {
    const currentQuestion = this.questions[this.currentPage];
    const requiredFields = currentQuestion?.elements.filter((el: any) => el.isRequired) || [];
    let isValid = true;
    this.validationErrors.clear();

    requiredFields.forEach((field: any) => {
      const answer = this.answers.find((a) => a.questionId === field.name);

      if (!answer || answer.answer === null || answer.answer === undefined || answer.answer === '') {
        this.validationErrors.add(field.name);
        isValid = false;
      }
    });

    return isValid;
  }


  updateProgress() {
    this.completedPages = this.currentPage + 1;
    this.progressUpdated.emit(this.completedPages);
  }

  handleNextPage(event: MouseEvent) {
    event.preventDefault();
    if (this.validateCurrentPage()) {
      if (this.currentPage < this.questions.length - 1) {
        this.currentPage += 1;
        this.updateProgress();
        this.pageChanged.emit(this.currentPage);
      }
    }
  }

  handlePreviousPage(event: MouseEvent) {
    event.preventDefault();
    if (this.currentPage > 0) {
      this.currentPage -= 1;
      this.updateProgress();
      this.pageChanged.emit(this.currentPage);
    }
  }

  handleSubmit(event?: MouseEvent) {
    if (event) event.preventDefault();
    if (this.validateCurrentPage()) {
      const preferredLanguageAnswer = this.answers.find(
        (a) => a.questionId === 'preferredLanguage'
      );

      console.log('Assessment completed with preferred language:', preferredLanguageAnswer);

      this.assessmentCompleted.emit(preferredLanguageAnswer?.answer);
    } else {
      const firstInvalidField = document.querySelector(`.question[data-id="${[...this.validationErrors][0]}"]`);
      if (firstInvalidField) {
        firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }


  renderQuestion(element: any) {
    const isSelected = this.answers.some((a) => a.questionId === element.name);

    switch (element.type) {
      case 'radiogroup':
        return (
          <div class="question">
            <label>{element.title}</label>
            <div class={`radio-group ${isSelected ? 'selected' : ''}`}>
              {element.choices.map((choice: string) => (
                <div class="radio-item" key={choice}>
                  <input
                    type="radio"
                    name={element.name}
                    value={choice}
                    onChange={(e) => this.handleAnswer(element.name, (e.target as HTMLInputElement).value)}
                  />
                  <label>{choice}</label>
                </div>
              ))}
            </div>
          </div>
        );
      case 'checkbox':
        return (
          <div class="question">
            <label>{element.title}</label>
            <div class={`checkbox-group ${isSelected ? 'selected' : ''}`}>
              {element.choices.map((choice: string) => (
                <div class="checkbox-item" key={choice}>
                  <input
                    type="checkbox"
                    name={element.name}
                    value={choice}
                    onChange={(e) => {
                      const checked = (e.target as HTMLInputElement).checked;
                      this.handleAnswer(element.name, checked ? choice : null);
                    }}
                  />
                  <label>{choice}</label>
                </div>
              ))}
            </div>
          </div>
        );
      case 'text':
        return (
          <div class={`question ${isSelected ? 'selected' : ''}`}>
            <label>{element.title}</label>
            <input
              type="text"
              name={element.name}
              onChange={(e) => this.handleAnswer(element.name, (e.target as HTMLInputElement).value)}
            />
          </div>
        );
      case 'boolean':
        return (
          <div class="question">
            <label>{element.title}</label>
            <div class={`boolean-group ${isSelected ? 'selected' : ''}`}>
              <div class="boolean-item">
                <input
                  type="radio"
                  name={element.name}
                  value="true"
                  onChange={(e) => this.handleAnswer(element.name, (e.target as HTMLInputElement).value === 'true')}
                />
                <label>{element.labelTrue || 'Yes'}</label>
              </div>
              <div class="boolean-item">
                <input
                  type="radio"
                  name={element.name}
                  value="false"
                  onChange={(e) => this.handleAnswer(element.name, (e.target as HTMLInputElement).value === 'false')}
                />
                <label>{element.labelFalse || 'No'}</label>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    const currentQuestion = this.questions[this.currentPage];

    return (
      <div class="assessment-container">
        <h1>Assessment</h1>
        {this.showProgress && (
          <div class="stepper">
            {this.questions.map((_, index) => (
              <div class={`step ${index <= this.currentPage ? 'active' : ''}`} key={index}>
                {index + 1}
              </div>
            ))}
          </div>
        )}
        <form onSubmit={(event) => event.preventDefault()}>
          {currentQuestion && (
            <div>
              <h2 class="text-1">{`PAGE ${this.currentPage + 1}`}</h2>
              {currentQuestion.elements.map((element: any) => (
                <div
                  key={element.name}
                  class={`${this.validationErrors.has(element.name) ? 'error' : ''}`}
                  data-id={element.name}
                >
                  {this.renderQuestion(element)}
                  {this.validationErrors.has(element.name) && (
                    <div class="error-message">This field is required</div>
                  )}
                </div>
              ))}
              <div class="button-group">
                <button
                  onClick={(event) => this.handlePreviousPage(event)}
                  disabled={this.currentPage === 0}
                >
                  Previous
                </button>
                {this.currentPage < this.questions.length - 1 && (
                  <button
                    onClick={(event) => this.handleNextPage(event)}
                  >
                    Next
                  </button>
                )}

                {this.currentPage === this.questions.length - 1 && (
                  <button onClick={(event) => this.handleSubmit(event)}>Submit</button>
                )}
              </div>
            </div>
          )}
        </form>
        {this.currentPage === this.questions.length - 1 && <div innerHTML={this.resultsIntro} />}
      </div>
    );
  }
}
