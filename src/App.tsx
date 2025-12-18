import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Router } from './routes/index.tsx'
import './style/globals.css'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App