import React from "react";
// router library
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// main Layout
import MainLayout from "./layouts/MainLayout";
import Counter from "./pages/Counter";

// List of pages
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Props from "./pages/Props";

// router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/Jobs' element={<JobsPage />} />
      <Route path='*' element={<NotFoundPage />} />

      {/* sinau path */}
      <Route path='/Counter' element={<Counter />} />
      <Route path='/Props' element={<Props name="John Doe" />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
