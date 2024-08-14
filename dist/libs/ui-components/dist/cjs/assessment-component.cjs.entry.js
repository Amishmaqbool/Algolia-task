'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0af484e5.js');

const assessmentComponentCss = ":host{--primary-color:#007bff;--secondary-color:#6c757d;--error-color:#ff4d4d;--font-family:Arial, sans-serif;font-family:var(--font-family)}.stepper .step.active{background-color:var(--primary-color)}.button-group button{background-color:var(--primary-color)}.question.error{border-color:var(--error-color)}.question.error .error-message{color:var(--error-color)}.assessment-container{display:flex;flex-direction:column;align-items:center;padding:20px;font-family:Arial, sans-serif;background-color:#ffffff;border-radius:8px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1)}h1{font-size:2em;margin-bottom:20px;color:#333}h2.text-1{font-size:1.5em;margin-bottom:15px;color:#34495e;font-weight:bold;text-transform:uppercase}.stepper{display:flex;gap:50px !important;margin:20px 0}.stepper .step{width:40px;height:40px;border-radius:50%;background-color:#ecf0f1;text-align:center;line-height:40px;font-size:16px;color:#7f8c8d;transition:background-color 0.3s, color 0.3s}.stepper .step.active{background-color:var(--primary-color);color:white;font-weight:bold}.question{margin-bottom:20px;width:100%;border:1px solid #ddd;border-radius:8px;padding:15px;background-color:#f9f9f9;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1)}.question label{display:block;margin-bottom:10px;font-weight:600;color:#333}.question input[type=text]{width:calc(100% - 16px);padding:8px;border:1px solid #ddd;border-radius:4px;height:40px;font-size:16px}.question .radio-group,.question .checkbox-group,.question .boolean-group{display:flex;flex-direction:column}.question .radio-item,.question .checkbox-item,.question .boolean-item{display:flex;align-items:center;margin-bottom:10px}.question .radio-item input[type=radio],.question .checkbox-item input[type=checkbox],.question .boolean-item input[type=radio]{margin-right:12px;cursor:pointer}.question .radio-item label,.question .checkbox-item label,.question .boolean-item label{margin-left:8px;font-size:16px;cursor:pointer}.question .radio-item input[type=radio]:checked+label,.question .checkbox-item input[type=checkbox]:checked+label{color:var(--primary-color)}.question.error{border-color:var(--error-color)}.question.error .error-message{color:var(--error-color);font-size:0.875em;margin-top:5px}.button-group{display:flex;justify-content:space-between;margin-top:30px}.button-group button{background-color:var(--primary-color);color:white;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;font-size:16px;margin:10px 5px;transition:background-color 0.3s}.button-group button:hover{background-color:#0056b3}.button-group button:disabled{background-color:#b0bec5;cursor:not-allowed}.results-intro{margin-top:30px;font-size:1.2em;color:#333;text-align:center}@media (max-width: 600px){.assessment-container{padding:10px}.stepper{flex-direction:column}.stepper .step{margin-bottom:10px}.button-group{flex-direction:column}.button-group button{width:100%;margin-bottom:10px}}.error{border:2px solid red}.error-message{color:red;font-size:0.875em;margin-top:5px}";

const AssessmentComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.assessmentCompleted = index.createEvent(this, "assessmentCompleted", 7);
    this.pageChanged = index.createEvent(this, "pageChanged", 7);
    this.progressUpdated = index.createEvent(this, "progressUpdated", 7);
    this.questions = [];
    this.resultsIntro = '';
    this.showProgress = true;
    this.currentPage = 0;
    this.answers = [];
    this.validationErrors = new Set();
    this.completedPages = 0;
    this.searchResults = [];
    this.searchLoading = false;
  }
  handleAnswer(questionId, answer) {
    this.answers = [...this.answers.filter((a) => a.questionId !== questionId), { questionId, answer }];
    this.validationErrors.delete(questionId);
  }
  validateCurrentPage() {
    const currentQuestion = this.questions[this.currentPage];
    const requiredFields = (currentQuestion === null || currentQuestion === void 0 ? void 0 : currentQuestion.elements.filter((el) => el.isRequired)) || [];
    let isValid = true;
    this.validationErrors.clear();
    requiredFields.forEach((field) => {
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
  handleNextPage(event) {
    event.preventDefault();
    if (this.validateCurrentPage()) {
      if (this.currentPage < this.questions.length - 1) {
        this.currentPage += 1;
        this.updateProgress();
        this.pageChanged.emit(this.currentPage);
      }
    }
  }
  handlePreviousPage(event) {
    event.preventDefault();
    if (this.currentPage > 0) {
      this.currentPage -= 1;
      this.updateProgress();
      this.pageChanged.emit(this.currentPage);
    }
  }
  handleSubmit(event) {
    if (event)
      event.preventDefault();
    if (this.validateCurrentPage()) {
      const preferredLanguageAnswer = this.answers.find((a) => a.questionId === 'preferredLanguage');
      console.log('Assessment completed with preferred language:', preferredLanguageAnswer);
      this.assessmentCompleted.emit(preferredLanguageAnswer === null || preferredLanguageAnswer === void 0 ? void 0 : preferredLanguageAnswer.answer);
    }
    else {
      const firstInvalidField = document.querySelector(`.question[data-id="${[...this.validationErrors][0]}"]`);
      if (firstInvalidField) {
        firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }
  renderQuestion(element) {
    switch (element.type) {
      case 'radiogroup':
        return (index.h("div", { class: "question" }, index.h("label", null, element.title), index.h("div", { class: "radio-group" }, element.choices.map((choice) => (index.h("div", { class: "radio-item", key: choice }, index.h("input", { type: "radio", name: element.name, value: choice, onChange: (e) => this.handleAnswer(element.name, e.target.value) }), index.h("label", null, choice)))))));
      case 'checkbox':
        return (index.h("div", { class: "question" }, index.h("label", null, element.title), index.h("div", { class: "checkbox-group" }, element.choices.map((choice) => (index.h("div", { class: "checkbox-item", key: choice }, index.h("input", { type: "checkbox", name: element.name, value: choice, onChange: (e) => {
            const checked = e.target.checked;
            this.handleAnswer(element.name, checked ? choice : null);
          } }), index.h("label", null, choice)))))));
      case 'text':
        return (index.h("div", { class: "question" }, index.h("label", null, element.title), index.h("input", { type: "text", name: element.name, onChange: (e) => this.handleAnswer(element.name, e.target.value) })));
      case 'boolean':
        return (index.h("div", { class: "question" }, index.h("label", null, element.title), index.h("div", { class: "boolean-group" }, index.h("div", { class: "boolean-item" }, index.h("input", { type: "radio", name: element.name, value: "true", onChange: (e) => this.handleAnswer(element.name, e.target.value === 'true') }), index.h("label", null, element.labelTrue || 'Yes')), index.h("div", { class: "boolean-item" }, index.h("input", { type: "radio", name: element.name, value: "false", onChange: (e) => this.handleAnswer(element.name, e.target.value === 'false') }), index.h("label", null, element.labelFalse || 'No')))));
      default:
        return null;
    }
  }
  render() {
    const currentQuestion = this.questions[this.currentPage];
    return (index.h("div", { class: "assessment-container" }, index.h("h1", null, "Assessment"), this.showProgress && (index.h("div", { class: "stepper" }, this.questions.map((_, index$1) => (index.h("div", { class: `step ${index$1 <= this.currentPage ? 'active' : ''}`, key: index$1 }, index$1 + 1))))), index.h("form", { onSubmit: (event) => event.preventDefault() }, currentQuestion && (index.h("div", null, index.h("h2", { class: "text-1" }, `PAGE ${this.currentPage + 1}`), currentQuestion.elements.map((element) => (index.h("div", { key: element.name, class: `${this.validationErrors.has(element.name) ? 'error' : ''}`, "data-id": element.name }, this.renderQuestion(element), this.validationErrors.has(element.name) && (index.h("div", { class: "error-message" }, "This field is required"))))), index.h("div", { class: "button-group" }, index.h("button", { onClick: (event) => this.handlePreviousPage(event), disabled: this.currentPage === 0 }, "Previous"), this.currentPage < this.questions.length - 1 && (index.h("button", { onClick: (event) => this.handleNextPage(event) }, "Next")), this.currentPage === this.questions.length - 1 && (index.h("button", { onClick: (event) => this.handleSubmit(event) }, "Submit")))))), this.currentPage === this.questions.length - 1 && index.h("div", { innerHTML: this.resultsIntro })));
  }
};
AssessmentComponent.style = assessmentComponentCss;

exports.assessment_component = AssessmentComponent;
