// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-calculator',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './calculator.component.html',
//   styleUrls: ['./calculator.component.css']
// })
// export class CalculatorComponent {
//   currentInput: number | null = null;
//   numbers: number[] = [];
//   result: number | null = null;
//   operation: string = '';

//   addNumber() {
//     if (this.currentInput !== null) {
//       this.numbers.push(this.currentInput);
//       this.currentInput = null;
//     }
//   }

//   clearAll() {
//     this.numbers = [];
//     this.result = null;
//     this.operation = '';
//   }

//   calculate(op: string) {
//     if (this.numbers.length === 0) return;

//     this.operation = op;

//     switch (op) {
//       case 'add':
//         this.result = this.numbers.reduce((acc, val) => acc + val, 0);
//         break;
//       case 'sub':
//         this.result = this.numbers.reduce((acc, val) => acc - val);
//         break;
//       case 'mul':
//         this.result = this.numbers.reduce((acc, val) => acc * val, 1);
//         break;
//       case 'div':
//         this.result = this.numbers.reduce((acc, val) => acc / val);
//         break;
//       case 'avg':
//         this.result = this.numbers.reduce((acc, val) => acc + val, 0) / this.numbers.length;
//         break;
//     }
//   }
// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  expression: string = '';
  result: string = '';

  updateResult() {
    try {
      // Evaluate only safe mathematical expressions
      if (this.expression.match(/^[0-9+\-*/().\s]*$/)) {
        this.result = eval(this.expression).toString(); // Uses BODMAS automatically
      } else {
        this.result = 'Invalid characters';
      }
    } catch (e) {
      this.result = 'Invalid Expression';
    }
  }

  clear() {
    this.expression = '';
    this.result = '';
  }
}
