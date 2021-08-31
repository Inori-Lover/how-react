import { inori } from './inori';
import { App } from './app';

const app = document.createElement('div');
document.body.append(app);

inori.render(<App />, app);
