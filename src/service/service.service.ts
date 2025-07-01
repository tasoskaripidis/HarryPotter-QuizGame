import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface Answer {
  text: string;
  iscorrect: boolean;
}

export interface Quiz {
  id: number;
  question: string;
  answers: {
    answerOne: Answer;
    answerTwo: Answer;
    answerTree: Answer;
    answerFour: Answer;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private router: Router) {}

  joinGame() {
    this.router.navigateByUrl('quiz');
  }

  getQuiz(): Quiz[] {
    return [
      {
        id: 1,
        question: 'What object does Harry inherit from Dumbledore in his will?',
        answers: {
          answerOne: { text: 'The Sword of Gryffindor', iscorrect: false },
          answerTwo: { text: 'The Invisibility Cloak', iscorrect: false },
          answerTree: { text: 'He is consumed by Fiendfyre', iscorrect: true },
          answerFour: { text: 'Harry uses Avada Kedavra', iscorrect: false },
        },
      },
      {
        id: 2,
        question:
          'Who tells Voldemort when Harry is being moved from Privet Drive?',
        answers: {
          answerOne: { text: 'Mundungus Fletcher', iscorrect: false },
          answerTwo: { text: 'Severus Snape', iscorrect: true },
          answerTree: { text: 'Peter Pettigrew', iscorrect: false },
          answerFour: { text: 'Lucius Malfoy', iscorrect: false },
        },
      },
      {
        id: 3,
        question:
          'What creature does Luna Lovegood’s father wear as a necklace?',
        answers: {
          answerOne: { text: 'The Deathly Hallows symbol', iscorrect: true },
          answerTwo: { text: 'Dirigible plum', iscorrect: false },
          answerTree: { text: 'Thestral hair', iscorrect: false },
          answerFour: { text: 'Basilisk fang', iscorrect: false },
        },
      },
      {
        id: 4,
        question: 'What is the symbol of the Deathly Hallows?',
        answers: {
          answerOne: {
            text: 'A triangle with a star inside',
            iscorrect: false,
          },
          answerTwo: {
            text: 'A wand over a circle inside a triangle',
            iscorrect: true,
          },
          answerTree: { text: 'Three circles in a row', iscorrect: false },
          answerFour: {
            text: 'A snake wrapped around a cross',
            iscorrect: false,
          },
        },
      },
      {
        id: 5,
        question: 'Who kills Dobby the house-elf?',
        answers: {
          answerOne: { text: 'Bellatrix Lestrange', iscorrect: true },
          answerTwo: { text: 'Lucius Malfoy', iscorrect: false },
          answerTree: { text: 'Fenrir Greyback', iscorrect: false },
          answerFour: { text: 'Narcissa Malfoy', iscorrect: false },
        },
      },
      {
        id: 6,
        question: 'What does Harry use to destroy the Hufflepuff Cup Horcrux?',
        answers: {
          answerOne: { text: 'Gryffindor’s sword', iscorrect: true },
          answerTwo: { text: 'Fiendfyre', iscorrect: false },
          answerTree: { text: 'Basilisk fang', iscorrect: false },
          answerFour: { text: 'Sectumsempra', iscorrect: false },
        },
      },
      {
        id: 7,
        question: 'Where is the final Horcrux (Nagini) destroyed?',
        answers: {
          answerOne: { text: 'In the Forbidden Forest', iscorrect: false },
          answerTwo: { text: 'In the Room of Requirement', iscorrect: false },
          answerTree: { text: 'In the Shrieking Shack', iscorrect: false },
          answerFour: { text: 'In the Battle of Hogwarts', iscorrect: true },
        },
      },
      {
        id: 8,
        question: 'What role does Neville Longbottom play in the final battle?',
        answers: {
          answerOne: { text: 'He duels Bellatrix', iscorrect: false },
          answerTwo: { text: 'He kills Nagini', iscorrect: true },
          answerTree: { text: 'He fights Voldemort', iscorrect: false },
          answerFour: { text: 'He finds the Diadem', iscorrect: false },
        },
      },
      {
        id: 9,
        question: 'What does Harry see when he uses the Resurrection Stone?',
        answers: {
          answerOne: { text: 'The founders of Hogwarts', iscorrect: false },
          answerTwo: { text: 'His future children', iscorrect: false },
          answerTree: {
            text: 'His deceased family and loved ones',
            iscorrect: true,
          },
          answerFour: { text: 'The Hallows themselves', iscorrect: false },
        },
      },
      {
        id: 10,
        question: 'How does Voldemort finally die?',
        answers: {
          answerOne: { text: 'He falls from a tower', iscorrect: false },
          answerTwo: {
            text: 'A spell rebounds and kills him',
            iscorrect: true,
          },
          answerTree: {
            text: 'He is consumed by Fiendfyre',
            iscorrect: false,
          },
          answerFour: { text: 'Harry uses Avada Kedavra', iscorrect: false },
        },
      },
      {
        id: 11,
        question:
          'What alias does Hermione use when they infiltrate the Ministry?',
        answers: {
          answerOne: { text: 'Mary Cattermole', iscorrect: true },
          answerTwo: { text: 'Mafalda Hopkirk', iscorrect: false },
          answerTree: { text: 'Dolores Umbridge', iscorrect: false },
          answerFour: { text: 'Amelia Bones', iscorrect: false },
        },
      },
      {
        id: 12,
        question: 'Who is the goblin that helps the trio break into Gringotts?',
        answers: {
          answerOne: { text: 'Griphook', iscorrect: true },
          answerTwo: { text: 'Ragnok', iscorrect: false },
          answerTree: { text: 'Bogrod', iscorrect: false },
          answerFour: { text: 'Travers', iscorrect: false },
        },
      },
      {
        id: 13,
        question: 'What vault contains the Hufflepuff Cup?',
        answers: {
          answerOne: { text: 'Vault 687', iscorrect: false },
          answerTwo: { text: 'Vault 713', iscorrect: false },
          answerTree: { text: 'Lestrange Vault', iscorrect: true },
          answerFour: { text: 'Malfoy Vault', iscorrect: false },
        },
      },
      {
        id: 14,
        question:
          'Whose voice does Harry mimic to get into the Room of Requirement?',
        answers: {
          answerOne: { text: 'Draco Malfoy', iscorrect: false },
          answerTwo: { text: 'Severus Snape', iscorrect: false },
          answerTree: { text: 'Bellatrix Lestrange', iscorrect: true },
          answerFour: { text: 'Voldemort', iscorrect: false },
        },
      },
      {
        id: 15,
        question: 'What is the fate of the Elder Wand at the end of the story?',
        answers: {
          answerOne: { text: 'Harry keeps it', iscorrect: false },
          answerTwo: {
            text: 'It is returned to Dumbledore’s tomb',
            iscorrect: true,
          },
          answerTree: { text: 'Ron takes it', iscorrect: false },
          answerFour: { text: 'It’s destroyed by Hermione', iscorrect: false },
        },
      },
    ];
  }
}
