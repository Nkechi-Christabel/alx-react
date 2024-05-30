import { Map } from 'immutable';
import printBestStudents from './8-seq.mjs';

const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  },
  2: {
    score: 65,
    firstName: 'john',
    lastName: 'doe',
  },
  3: {
    score: 80,
    firstName: 'emma',
    lastName: 'smith',
  },
};

printBestStudents(grades);
