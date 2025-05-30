import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';

// @ts-ignore - initial data is injected by the server
const users = (window as any).__INITIAL_DATA__ || [];

hydrateRoot(document, <App users={users} />);
