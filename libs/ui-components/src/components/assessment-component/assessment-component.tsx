import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'assessment-component',
  styleUrl: 'assessment-component.scss',
  shadow: true
})
export class AssessmentComponent {
  @Prop() questions: any[];
  @Prop() resultsIntro: string;
  @Prop() showProgress: boolean = true;

  @State() currentPage: number = 0;
  @State() answers: any[] = [];

  @Event() assessmentCompleted: EventEmitter<any>;
  @Event() pageChanged: EventEmitter<number>;

  handleAnswer(questionId: string, answer: any) {
    this.answers = [...this.answers.filter(a => a.questionId !== questionId), { questionId, answer }];
  }

  handleNextPage() {
    if (this.currentPage < this.questions.length - 1) {
      this.currentPage += 1;
      this.pageChanged.emit(this.currentPage);
    }
  }

  handlePreviousPage() {
    if (this.currentPage > 0) {
      this.currentPage -= 1;
      this.pageChanged.emit(this.currentPage);
    }
  }

  handleSubmit() {
    // Submit answers to Algolia or handle as needed
    this.assessmentCompleted.emit(this.answers);
  }

  render() {
    const currentQuestion = this.questions[this.currentPage];

    return (
      <div>
        <div>
          {this.showProgress && <progress-bar progress={this.currentPage / this.questions.length} />}
          {currentQuestion && (
            <div>
              <h2>{currentQuestion.title}</h2>
              <question-type-selector
                type={currentQuestion.type}
                question={currentQuestion}
                onAnswer={this.handleAnswer.bind(this)}
              />
              <button onClick={() => this.handlePreviousPage()} disabled={this.currentPage === 0}>Previous</button>
              <button onClick={() => this.handleNextPage()} disabled={this.currentPage === this.questions.length - 1}>Next</button>
              {this.currentPage === this.questions.length - 1 && <button onClick={() => this.handleSubmit()}>Submit</button>}
            </div>
          )}
        </div>
        {this.currentPage === this.questions.length - 1 && (
          <results-page intro={this.resultsIntro} />
        )}
      </div>
    );
  }
}
