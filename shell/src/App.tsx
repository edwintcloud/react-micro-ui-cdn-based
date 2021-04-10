import React from 'react';
import { ExampleComponent } from '../../example_component/src/ExampleComponent';
import './styles/app.scss';

type Properties = {
  /** standard children prop: accepts any valid React Node */
  children?: React.ReactNode;
};

const App: React.FC<Properties> = () => (
  <div>
    <h1>Shell UI</h1>
    <ExampleComponent title="Hello World">
      <ExampleComponent title="a red message" danger></ExampleComponent>
    </ExampleComponent>
  </div>
);

export default App;
