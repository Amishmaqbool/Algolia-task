import { h } from '@stencil/core';
export class AssessmentComponent {
  constructor() {
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
        return (h("div", { class: "question" }, h("label", null, element.title), h("div", { class: "radio-group" }, element.choices.map((choice) => (h("div", { class: "radio-item", key: choice }, h("input", { type: "radio", name: element.name, value: choice, onChange: (e) => this.handleAnswer(element.name, e.target.value) }), h("label", null, choice)))))));
      case 'checkbox':
        return (h("div", { class: "question" }, h("label", null, element.title), h("div", { class: "checkbox-group" }, element.choices.map((choice) => (h("div", { class: "checkbox-item", key: choice }, h("input", { type: "checkbox", name: element.name, value: choice, onChange: (e) => {
            const checked = e.target.checked;
            this.handleAnswer(element.name, checked ? choice : null);
          } }), h("label", null, choice)))))));
      case 'text':
        return (h("div", { class: "question" }, h("label", null, element.title), h("input", { type: "text", name: element.name, onChange: (e) => this.handleAnswer(element.name, e.target.value) })));
      case 'boolean':
        return (h("div", { class: "question" }, h("label", null, element.title), h("div", { class: "boolean-group" }, h("div", { class: "boolean-item" }, h("input", { type: "radio", name: element.name, value: "true", onChange: (e) => this.handleAnswer(element.name, e.target.value === 'true') }), h("label", null, element.labelTrue || 'Yes')), h("div", { class: "boolean-item" }, h("input", { type: "radio", name: element.name, value: "false", onChange: (e) => this.handleAnswer(element.name, e.target.value === 'false') }), h("label", null, element.labelFalse || 'No')))));
      default:
        return null;
    }
  }
  render() {
    const currentQuestion = this.questions[this.currentPage];
    return (h("div", { class: "assessment-container" }, h("h1", null, "Assessment"), this.showProgress && (h("div", { class: "stepper" }, this.questions.map((_, index) => (h("div", { class: `step ${index <= this.currentPage ? 'active' : ''}`, key: index }, index + 1))))), h("form", { onSubmit: (event) => event.preventDefault() }, currentQuestion && (h("div", null, h("h2", { class: "text-1" }, `PAGE ${this.currentPage + 1}`), currentQuestion.elements.map((element) => (h("div", { key: element.name, class: `${this.validationErrors.has(element.name) ? 'error' : ''}`, "data-id": element.name }, this.renderQuestion(element), this.validationErrors.has(element.name) && (h("div", { class: "error-message" }, "This field is required"))))), h("div", { class: "button-group" }, h("button", { onClick: (event) => this.handlePreviousPage(event), disabled: this.currentPage === 0 }, "Previous"), this.currentPage < this.questions.length - 1 && (h("button", { onClick: (event) => this.handleNextPage(event) }, "Next")), this.currentPage === this.questions.length - 1 && (h("button", { onClick: (event) => this.handleSubmit(event) }, "Submit")))))), this.currentPage === this.questions.length - 1 && h("div", { innerHTML: this.resultsIntro })));
  }
  static get is() { return "assessment-component"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["./assessment-component.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["assessment-component.css"]
    };
  }
  static get properties() {
    return {
      "questions": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "any[]",
          "resolved": "any[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "defaultValue": "[]"
      },
      "resultsIntro": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "results-intro",
        "reflect": false,
        "defaultValue": "''"
      },
      "showProgress": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "show-progress",
        "reflect": false,
        "defaultValue": "true"
      }
    };
  }
  static get states() {
    return {
      "currentPage": {},
      "answers": {},
      "validationErrors": {},
      "completedPages": {},
      "searchResults": {},
      "searchLoading": {}
    };
  }
  static get events() {
    return [{
        "method": "assessmentCompleted",
        "name": "assessmentCompleted",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "pageChanged",
        "name": "pageChanged",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        }
      }, {
        "method": "progressUpdated",
        "name": "progressUpdated",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        }
      }];
  }
}
