import AdminLayout from "./AdminLayout";

function ManageUsers() {
  return (
    <AdminLayout>

      <h1 className="text-3xl font-bold mb-8">
        Manage Users
      </h1>

      <div className="bg-white p-6 rounded-lg shadow">
        User list will appear here.
      </div>

    </AdminLayout>
  );
}

export default ManageUsers;