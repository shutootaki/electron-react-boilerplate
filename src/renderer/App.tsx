import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from 'renderer/Home';
import { MantineProvider } from '@mantine/core';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}
