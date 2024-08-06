
// import React from 'react';
// import './index.css';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import Dashboard from './components/Dashboard';
// import Activity from './components/Activity';
// import RecentOrder from './components/RecentOrder';



// const App = () => {
//   return (
//     <>
//       <div className="app-container">
//         <Header />
//         <div className="main-container">
//           <Sidebar />
//           <main className="main-content">
//             <Dashboard />
//             <Activity />
//             <RecentOrder />
//           </main>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import React from 'react';
import './index.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Activity from './components/Activity';
import RecentOrder from './components/RecentOrder';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <main className="main-content">
          <Dashboard />
          <Activity />
          <RecentOrder />
        </main>
      </div>
    </div>
  );
}

export default App;
