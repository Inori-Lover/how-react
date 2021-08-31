import { inori } from './inori';

const app = document.createElement('div');
document.body.append(app);

function App() {
  return <h1>Hello world!</h1>;
}

inori.render(<App />, app);
