import{r as e,c as t,h as o}from"./p-43939b9d.js";const i=class{constructor(o){e(this,o),this.assessmentCompleted=t(this,"assessmentCompleted",7),this.pageChanged=t(this,"pageChanged",7),this.progressUpdated=t(this,"progressUpdated",7),this.questions=[],this.resultsIntro="",this.showProgress=!0,this.currentPage=0,this.answers=[],this.validationErrors=new Set,this.completedPages=0,this.searchResults=[],this.searchLoading=!1}handleAnswer(e,t){this.answers=[...this.answers.filter((t=>t.questionId!==e)),{questionId:e,answer:t}],this.validationErrors.delete(e)}validateCurrentPage(){const e=this.questions[this.currentPage],t=(null==e?void 0:e.elements.filter((e=>e.isRequired)))||[];let o=!0;return this.validationErrors.clear(),t.forEach((e=>{const t=this.answers.find((t=>t.questionId===e.name));t&&null!=t.answer&&""!==t.answer||(this.validationErrors.add(e.name),o=!1)})),o}updateProgress(){this.completedPages=this.currentPage+1,this.progressUpdated.emit(this.completedPages)}handleNextPage(e){e.preventDefault(),this.validateCurrentPage()&&this.currentPage<this.questions.length-1&&(this.currentPage+=1,this.updateProgress(),this.pageChanged.emit(this.currentPage))}handlePreviousPage(e){e.preventDefault(),this.currentPage>0&&(this.currentPage-=1,this.updateProgress(),this.pageChanged.emit(this.currentPage))}handleSubmit(e){if(e&&e.preventDefault(),this.validateCurrentPage()){const e=this.answers.find((e=>"preferredLanguage"===e.questionId));console.log("Assessment completed with preferred language:",e),this.assessmentCompleted.emit(null==e?void 0:e.answer)}else{const e=document.querySelector(`.question[data-id="${[...this.validationErrors][0]}"]`);e&&e.scrollIntoView({behavior:"smooth",block:"center"})}}renderQuestion(e){switch(e.type){case"radiogroup":return o("div",{class:"question"},o("label",null,e.title),o("div",{class:"radio-group"},e.choices.map((t=>o("div",{class:"radio-item",key:t},o("input",{type:"radio",name:e.name,value:t,onChange:t=>this.handleAnswer(e.name,t.target.value)}),o("label",null,t))))));case"checkbox":return o("div",{class:"question"},o("label",null,e.title),o("div",{class:"checkbox-group"},e.choices.map((t=>o("div",{class:"checkbox-item",key:t},o("input",{type:"checkbox",name:e.name,value:t,onChange:o=>{this.handleAnswer(e.name,o.target.checked?t:null)}}),o("label",null,t))))));case"text":return o("div",{class:"question"},o("label",null,e.title),o("input",{type:"text",name:e.name,onChange:t=>this.handleAnswer(e.name,t.target.value)}));case"boolean":return o("div",{class:"question"},o("label",null,e.title),o("div",{class:"boolean-group"},o("div",{class:"boolean-item"},o("input",{type:"radio",name:e.name,value:"true",onChange:t=>this.handleAnswer(e.name,"true"===t.target.value)}),o("label",null,e.labelTrue||"Yes")),o("div",{class:"boolean-item"},o("input",{type:"radio",name:e.name,value:"false",onChange:t=>this.handleAnswer(e.name,"false"===t.target.value)}),o("label",null,e.labelFalse||"No"))));default:return null}}render(){const e=this.questions[this.currentPage];return o("div",{class:"assessment-container"},o("h1",null,"Assessment"),this.showProgress&&o("div",{class:"stepper"},this.questions.map(((e,t)=>o("div",{class:"step "+(t<=this.currentPage?"active":""),key:t},t+1)))),o("form",{onSubmit:e=>e.preventDefault()},e&&o("div",null,o("h2",{class:"text-1"},`PAGE ${this.currentPage+1}`),e.elements.map((e=>o("div",{key:e.name,class:this.validationErrors.has(e.name)?"error":"","data-id":e.name},this.renderQuestion(e),this.validationErrors.has(e.name)&&o("div",{class:"error-message"},"This field is required")))),o("div",{class:"button-group"},o("button",{onClick:e=>this.handlePreviousPage(e),disabled:0===this.currentPage},"Previous"),this.currentPage<this.questions.length-1&&o("button",{onClick:e=>this.handleNextPage(e)},"Next"),this.currentPage===this.questions.length-1&&o("button",{onClick:e=>this.handleSubmit(e)},"Submit")))),this.currentPage===this.questions.length-1&&o("div",{innerHTML:this.resultsIntro}))}};i.style=":host{--primary-color:#007bff;--secondary-color:#6c757d;--error-color:#ff4d4d;--font-family:Arial, sans-serif;font-family:var(--font-family)}.stepper .step.active{background-color:var(--primary-color)}.button-group button{background-color:var(--primary-color)}.question.error{border-color:var(--error-color)}.question.error .error-message{color:var(--error-color)}.assessment-container{display:flex;flex-direction:column;align-items:center;padding:20px;font-family:Arial, sans-serif;background-color:#ffffff;border-radius:8px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1)}h1{font-size:2em;margin-bottom:20px;color:#333}h2.text-1{font-size:1.5em;margin-bottom:15px;color:#34495e;font-weight:bold;text-transform:uppercase}.stepper{display:flex;gap:50px !important;margin:20px 0}.stepper .step{width:40px;height:40px;border-radius:50%;background-color:#ecf0f1;text-align:center;line-height:40px;font-size:16px;color:#7f8c8d;transition:background-color 0.3s, color 0.3s}.stepper .step.active{background-color:var(--primary-color);color:white;font-weight:bold}.question{margin-bottom:20px;width:100%;border:1px solid #ddd;border-radius:8px;padding:15px;background-color:#f9f9f9;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1)}.question label{display:block;margin-bottom:10px;font-weight:600;color:#333}.question input[type=text]{width:calc(100% - 16px);padding:8px;border:1px solid #ddd;border-radius:4px;height:40px;font-size:16px}.question .radio-group,.question .checkbox-group,.question .boolean-group{display:flex;flex-direction:column}.question .radio-item,.question .checkbox-item,.question .boolean-item{display:flex;align-items:center;margin-bottom:10px}.question .radio-item input[type=radio],.question .checkbox-item input[type=checkbox],.question .boolean-item input[type=radio]{margin-right:12px;cursor:pointer}.question .radio-item label,.question .checkbox-item label,.question .boolean-item label{margin-left:8px;font-size:16px;cursor:pointer}.question .radio-item input[type=radio]:checked+label,.question .checkbox-item input[type=checkbox]:checked+label{color:var(--primary-color)}.question.error{border-color:var(--error-color)}.question.error .error-message{color:var(--error-color);font-size:0.875em;margin-top:5px}.button-group{display:flex;justify-content:space-between;margin-top:30px}.button-group button{background-color:var(--primary-color);color:white;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;font-size:16px;margin:10px 5px;transition:background-color 0.3s}.button-group button:hover{background-color:#0056b3}.button-group button:disabled{background-color:#b0bec5;cursor:not-allowed}.results-intro{margin-top:30px;font-size:1.2em;color:#333;text-align:center}@media (max-width: 600px){.assessment-container{padding:10px}.stepper{flex-direction:column}.stepper .step{margin-bottom:10px}.button-group{flex-direction:column}.button-group button{width:100%;margin-bottom:10px}}.error{border:2px solid red}.error-message{color:red;font-size:0.875em;margin-top:5px}";export{i as assessment_component}