import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import OrganizationAdminLayout from "./components/Layouts/OrganizationAdmin";
import AdminDashboard from "./pages/admin/dashbpard";

export const TiamoRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<OrganizationAdminLayout />}>
          <Route index element={ <AdminDashboard /> } />
          <Route path="staff" element={<p>Users</p>} />
          <Route path="parties" element={<p>suppliers and customers</p>} />
          <Route path="invoices" element={<p>invoices</p>} />
          <Route path="products" element={<p>products</p>} />
          <Route path="purchases" element={<p>purchases</p>} />
          <Route path="suppliers" element={<p>suppliers</p>} />
          <Route path="customers" element={<p>customers</p>} />
          <Route path="man-update" element={<p>man-update</p>} />
          <Route path="activity" element={<p>activity</p>} />
          <Route path="reports" element={<p>reports</p>} />
        </Route>
      </Routes>
    </Router>
  );
};
