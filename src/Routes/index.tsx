import { BrowserRouter, Route, Routes } from 'react-router-dom';


import { Dashboard } from '../pages/Dashboard';
import { NotFound} from '../pages/NotFound';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}