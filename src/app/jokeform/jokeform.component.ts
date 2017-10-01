import { Component, Output, EventEmitter } from '@angular/core';
import { Joke } from '../joke/joke.component';

@Component({
  selector: 'joke-form',
  templateUrl: './jokeform.component.html',
  styleUrls: ['./jokeform.component.css']
})
export class JokeFormComponent {
  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}
