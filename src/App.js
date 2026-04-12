import logo from './logo.svg';
import './App.css';
import './bootstrap.css'
import AttendanceApp from './component/AttendanceAppComponent';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AttendanceApp/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
