import React from 'react';

export interface AppProps {
  users: { id: number; name: string }[];
}

const App: React.FC<AppProps> = ({ users }) => (
  <html>
    <head>
      <title>Codex Full Stack</title>
    </head>
    <body>
      <div id="root">
        <h1>User List</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      <script src="/client.js"></script>
    </body>
  </html>
);

export default App;
