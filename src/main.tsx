import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './styles/main.css'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './api/queryClient.ts'
import Provider from './common/context/Provider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
)
