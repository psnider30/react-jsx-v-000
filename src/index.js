import { message } from './components/foo';

// In a file in the same directory
import fruit from './fruits';
console.log(fruit.apple); // prints 'red'

// In another file, also in the same directory
import { apple } from './fruits';
console.log(apple); // prints 'red'

import Tweet from './Tweet';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Tweet />,
  document.getElementById('root')
);
