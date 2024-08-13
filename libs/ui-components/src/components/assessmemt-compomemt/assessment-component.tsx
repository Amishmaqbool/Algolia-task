import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';
import './assessment-component.scss';
import { Host } from '@stencil/core';

@Component({
  tag: 'assessment-component',
  styleUrl: 'assessment-component.scss',
  shadow: true,
})
export class AssessmentComponent {
  @Prop() questions: any[] = [];
  @Prop() resultsIntro: string = '';
  @Prop() showProgress: boolean = true;

  @State() currentPage: number = 0;
  @State() answers: any[] = [];
  @State() validationErrors: Set<string> = new Set();

  @Event() assessmentCompleted: EventEmitter<any>;
  @Event() pageChanged: EventEmitter<number>;

  handleAnswer(questionId: string, answer: any) {
    this.answers = [...this.answers.filter((a) => a.questionId !== questionId), { questionId, answer }];
    this.validationErrors.delete(questionId);
  }

  validateCurrentPage(): boolean {
    const currentQuestion = this.questions[this.currentPage];
    const requiredFields = currentQuestion?.elements.filter((el: any) => el.isRequired) || [];
    let isValid = true;
    this.validationErrors.clear(); // Clear previous errors

    requiredFields.forEach((field: any) => {
      const answer = this.answers.find((a) => a.questionId === field.name);
      if (!answer || !answer.answer) {
        this.validationErrors.add(field.name);
        isValid = false;
      }
    });

    return isValid;
  }

  handleNextPage(event: MouseEvent) {
    event.preventDefault(); // Prevent the default behavior that might trigger a URL update
    if (this.validateCurrentPage()) {
      if (this.currentPage < this.questions.length - 1) {
        this.currentPage += 1;
        this.pageChanged.emit(this.currentPage);
      }
    } else {
      // Optional: Scroll to the first invalid field
      const firstInvalidField = document.querySelector(`.question[data-id="${[...this.validationErrors][0]}"]`);
      if (firstInvalidField) {
        firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  handlePreviousPage(event: MouseEvent) {
    event.preventDefault(); // Prevent the default behavior that might trigger a URL update
    if (this.currentPage > 0) {
      this.currentPage -= 1;
      this.pageChanged.emit(this.currentPage);
    }
  }

  handleSubmit(event: MouseEvent) {
    event.preventDefault(); // Prevent the default behavior that might trigger a URL update
    if (this.validateCurrentPage()) {
      this.assessmentCompleted.emit(this.answers);
    } else {
      // Optional: Scroll to the first invalid field
      const firstInvalidField = document.querySelector(`.question[data-id="${[...this.validationErrors][0]}"]`);
      if (firstInvalidField) {
        firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  renderQuestion(element: any) {
    switch (element.type) {
      case 'radiogroup':
        return (
          <div class="question">
            <label>{element.title}</label>
            {element.choices.map((choice: string) => (
              <div key={choice}>
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
        );
      case 'checkbox':
        return (
          <div class="question">
            <label>{element.title}</label>
            {element.choices.map((choice: string) => (
              <div key={choice}>
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
        );
      case 'text':
        return (
          <div class="question">
            <label>{element.title}</label>
            <input
              type="text"
              name={element.name}
              onChange={(e) => this.handleAnswer(element.name, (e.target as HTMLInputElement).value)}
            />
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    const currentQuestion = this.questions[this.currentPage];

    return (
      <Host class="assessment-container">
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
              <h2 class="text-1">{currentQuestion.name}</h2>
              {currentQuestion.elements.map((element: any) => (
                <div
                  key={element.name}
                  class={`question ${this.validationErrors.has(element.name) ? 'error' : ''}`}
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
                <button
                  onClick={(event) => this.handleNextPage(event)}
                  disabled={this.currentPage === this.questions.length - 1}
                >
                  Next
                </button>
                {this.currentPage === this.questions.length - 1 && (
                  <button onClick={(event) => this.handleSubmit(event)}>Submit</button>
                )}
              </div>
            </div>
          )}
        </form>
        {this.currentPage === this.questions.length - 1 && <div innerHTML={this.resultsIntro} />}
      </Host>
    );
  }
}
