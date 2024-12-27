import { AppRouter } from './router/AppRouter'
import { CartProvider } from './hooks/useCart'
import './App.css'

function App() {
  return (
    <>
    <CartProvider>
      <AppRouter />
    </CartProvider>
    </>
  )
}

export default App
