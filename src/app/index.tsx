import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Search from '../pages/Search';
import Random from '../pages/Random';
import Joke from '../pages/Joke';
import PanelLayout from '../components/PanelLayout';
import Header from './Header';
import Bottom from './Bottom';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element:  (
      <PanelLayout
        headerPanel={<Header title="onXmaps Jokes" />}
        contentPanel={<Outlet />}
        bottomPanel={<Bottom />}
      />
    ),
    children: [
      {
        index: true,
        element: <Random />
      },
      {
        index: true,
        path: "random/:timestamp",
        element: <Random />
      },
      {
        path: "search",
        element: <Search />
      },
      {
        path: "joke/:id",
        element: <Joke />
      }
    ]
  }
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
