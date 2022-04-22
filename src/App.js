import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Table from './components/table/Table';
import React from 'react';


const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Table />
    </QueryClientProvider>
  );
}

export default App;
