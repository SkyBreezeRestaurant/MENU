// // import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import UserMenu from './pages/UserMenu';
// import AdminLogin from './pages/AdminLogin';
// import AdminDashboard from './pages/AdminDashboard';
// import CategoryManagement from './pages/CategoryManagement';
// import ItemManagement from './pages/ItemManagement';
// import CategoryForm from './pages/CategoryForm';
// import ItemForm from './pages/ItemForm';
// import Header from './components/Header';
// import { AuthProvider, useAuth } from './context/AuthContext'; // Create AuthContext later

// // Protected Route Component
// const ProtectedRoute = ({ element: Element, ...rest }) => {
//   const { isAdminAuthenticated, loading } = useAuth(); // Get auth state from context

//   if (loading) {
//     // Optional: Show a loading spinner while checking auth status
//     return <div>Loading...</div>;
//   }

//   return isAdminAuthenticated ? <Element {...rest} /> : <Navigate to="/admin" replace />;
// };


// function App() {
//   return (
//     <Router>
//       <AuthProvider> {/* Wrap with AuthProvider */}
//         <div className="min-h-screen bg-white text-black">
//           <Header /> {/* Header on all pages */}
//           <main className="container mx-auto p-4"> {/* Basic container for content */}
//             <Routes>
//               {/* Public Routes */}
//               <Route path="/" element={<UserMenu />} />
//               {/* Redirect /menu to / */}
//               <Route path="/menu" element={<Navigate to="/" replace />} />


//               {/* Admin Routes */}
//               <Route path="/admin" element={<AdminLogin />} />
//               {/* Protected Admin Routes */}
//               <Route path="/admin/dashboard" element={<ProtectedRoute element={AdminDashboard} />} />
//               <Route path="/admin/categories" element={<ProtectedRoute element={CategoryManagement} />} />
//               <Route path="/admin/categories/new" element={<ProtectedRoute element={CategoryForm} />} />
//               <Route path="/admin/categories/edit/:id" element={<ProtectedRoute element={CategoryForm} />} />
//               <Route path="/admin/items" element={<ProtectedRoute element={ItemManagement} />} />
//               <Route path="/admin/items/new" element={<ProtectedRoute element={ItemForm} />} />
//               <Route path="/admin/items/edit/:id" element={<ProtectedRoute element={ItemForm} />} />

//               {/* Catch-all or 404 Page (Optional) */}
//               {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
//             </Routes>
//           </main>
//         </div>
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;



















// // frontend/src/App.jsx
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import UserMenu from './pages/UserMenu';
// import AdminLogin from './pages/AdminLogin';
// import AdminDashboard from './pages/AdminDashboard';
// import CategoryManagement from './pages/CategoryManagement';
// import ItemManagement from './pages/ItemManagement';
// import CategoryForm from './pages/CategoryForm';
// import ItemForm from './pages/ItemForm';
// import Header from './components/Header';
// import { AuthProvider, useAuth } from './context/AuthContext'; // Import AuthProvider and useAuth

// // Protected Route Component
// const ProtectedRoute = ({ element: Element, ...rest }) => {
//   const { isAdminAuthenticated, loading } = useAuth(); // Get auth state from context

//   // Show loading state while authentication status is being determined
//   if (loading) {
//     return <div>Loading authentication...</div>; // Or a proper loading spinner
//   }

//   // If authenticated, render the requested element, otherwise redirect to login
//   return isAdminAuthenticated ? <Element {...rest} /> : <Navigate to="/admin" replace />;
// };


// function App() {
//   return (
//     <Router>
//       {/* Wrap the entire application with AuthProvider */}
//       <AuthProvider>
//         <div className="min-h-screen bg-white text-black">
//           <Header /> {/* Header on all pages */}
//           <main className="container mx-auto p-4"> {/* Basic container for content */}
//             <Routes>
//               {/* Public Routes */}
//               <Route path="/" element={<UserMenu />} />
//               {/* Redirect /menu to / */}
//               <Route path="/menu" element={<Navigate to="/" replace />} />


//               {/* Admin Routes */}
//               {/* AdminLogin does NOT need ProtectedRoute */}
//               {/* <Route path="/admin" element={<AdminLogin />} /> */}

//               {/* Protected Admin Routes */}
//               {/* Apply ProtectedRoute to all routes that require admin authentication */}
//               {/* <Route path="/admin/dashboard" element={<ProtectedRoute element={AdminDashboard} />} />
//               <Route path="/admin/categories" element={<ProtectedRoute element={CategoryManagement} />} />
//               <Route path="/admin/categories/new" element={<ProtectedRoute element={CategoryForm} />} />
//               <Route path="/admin/categories/edit/:id" element={<ProtectedRoute element={CategoryForm} />} />
//               <Route path="/admin/items" element={<ProtectedRoute element={ItemManagement} />} />
//               <Route path="/admin/items/new" element={<ProtectedRoute element={ItemForm} />} />
//               <Route path="/admin/items/edit/:id" element={<ProtectedRoute element={ItemForm} />} /> */}

//               {/* Catch-all or 404 Page (Optional) */}
//               {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
//             </Routes>
//           </main>
//         </div>
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;











// frontend/src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserMenu from './pages/UserMenu';
// Remove admin imports:
// import AdminLogin from './pages/AdminLogin';
// import AdminDashboard from './pages/AdminDashboard';
// import CategoryManagement from './pages/CategoryManagement';
// import ItemManagement from './pages/ItemManagement';
// import CategoryForm from './pages/CategoryForm';
// import ItemForm from './pages/ItemForm';
import Header from './components/Header';
// Remove auth context import: import { AuthProvider, useAuth } from './context/AuthContext';

// Remove ProtectedRoute component:
// const ProtectedRoute = ({ element: Element, ...rest }) => {
//   const { isAdminAuthenticated, loading } = useAuth();
//   if (loading) {
//     return <div>Loading authentication...</div>;
//   }
//   return isAdminAuthenticated ? <Element {...rest} /> : <Navigate to="/admin" replace />;
// };


function App() {
  return (
    <Router>
      {/* Remove AuthProvider: <AuthProvider> */}
        <div className="min-h-screen bg-white text-black">
          <Header /> {/* Header on all pages */}
          <main className="container mx-auto p-4"> {/* Basic container for content */}
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<UserMenu />} />
              {/* Redirect /menu to / */}
              <Route path="/menu" element={<Navigate to="/" replace />} />

              {/* Remove all Admin Routes: */}
              {/* <Route path="/admin" element={<AdminLogin />} /> */}
              {/* <Route path="/admin/dashboard" element={<ProtectedRoute element={AdminDashboard} />} /> */}
              {/* <Route path="/admin/categories" element={<ProtectedRoute element={CategoryManagement} />} /> */}
              {/* <Route path="/admin/categories/new" element={<ProtectedRoute element={CategoryForm} />} /> */}
              {/* <Route path="/admin/categories/edit/:id" element={<ProtectedRoute element={CategoryForm} />} /> */}
              {/* <Route path="/admin/items" element={<ProtectedRoute element={ItemManagement} />} /> */}
              {/* <Route path="/admin/items/new" element={<ProtectedRoute element={ItemForm} />} /> */}
              {/* <Route path="/admin/items/edit/:id" element={<ProtectedRoute element={ItemForm} />} /> */}

              {/* Optional: Add a simple 404 for any admin routes that might still be accessed */}
               <Route path="/admin/*" element={<Navigate to="/" replace />} /> {/* Redirect any /admin path to home */}


              {/* Catch-all or 404 Page (Optional) */}
              {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
            </Routes>
          </main>
        </div>
      {/* Remove closing AuthProvider tag: </AuthProvider> */}
    </Router>
  );
}

export default App;