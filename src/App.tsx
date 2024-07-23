import Weather from './pages/weather/Weather'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ModalProvider from './providers/ModalProvider'
import ChangeCity from './components/sidebar/Change-city'
import Menu from './components/sidebar/Menu'
import UserProvider from './providers/UserProvider'
import Modal from './components/modal/Modal'
import WeatherProvider from './providers/WeatherProvider'
import Router from './Router'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <WeatherProvider>
          <ModalProvider>
            <Router />
            <ChangeCity />
            <Menu />
            <Modal />
          </ModalProvider>
        </WeatherProvider>
      </UserProvider>
    </QueryClientProvider>
  )
}

export default App
