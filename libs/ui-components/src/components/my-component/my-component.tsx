import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true
})
export class MyComponent {
  /**
   * The question text
   */
  @Prop() question: string;

  /**
   * The list of choices
   */
  @Prop() choices: string[];

  /**
   * Event emitted when a choice is selected
   */
  @Event() choiceSelected: EventEmitter<string>;

  private handleChoiceClick(choice: string) {
    this.choiceSelected.emit(choice);
  }

  render() {
    return (
      <div>
        <p>{this.question}</p>
        <ul>
          {this.choices.map(choice => (
            <li key={choice} onClick={() => this.handleChoiceClick(choice)}>
              {choice}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
