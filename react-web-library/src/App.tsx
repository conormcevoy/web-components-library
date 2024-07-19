/* eslint-disable @typescript-eslint/no-namespace */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'design-system-web-components/my-panel-react'
import { MyPanelReact } from 'design-system-web-components/my-panel-react'

type MyPanelReactProps = React.ComponentProps<typeof MyPanelReact>;

declare global {
  namespace JSX {
      interface IntrinsicElements {
        'my-panel': MyPanelReactProps;
      }
  }
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <my-panel
        title='My Panel Ys'
        opened={true}
        icon="🔥"
      ></my-panel>
    </>
  )
}

export default App
