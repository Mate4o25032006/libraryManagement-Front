import { AppUi } from './Router/AppRouter';
import { LibraryContextProvider } from './Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function App() {
  return (
    <LibraryContextProvider>
      <AppUi />
    </LibraryContextProvider>
  )
}

export default App
