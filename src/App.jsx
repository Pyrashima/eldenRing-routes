import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Creatures from './creatures/components/creatures'
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient();

function App() {
  return (

    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route index element={<Creatures />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/category/:categoryName/:mealId" element={<Meal />} />
      </Routes>

    </QueryClientProvider>
  )
}

export default App