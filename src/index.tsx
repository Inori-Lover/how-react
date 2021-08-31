import ReactDOM from 'react-dom';
export { inori } from '~/src/util/inori';

import { App } from './app';

const app = document.createElement('div');
document.body.append(app);
ReactDOM.render(<App />, app);
