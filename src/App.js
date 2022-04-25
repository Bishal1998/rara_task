import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import React from 'react';
import DataFetch from './components/data/DataFetch';


const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DataFetch />
    </QueryClientProvider>
  );
}

export default App;
