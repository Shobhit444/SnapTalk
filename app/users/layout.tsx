import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import UserList from "./components/UserList";

export default async function UsersLayout({//used async as we're fetching user for database
  children
}: {
  children: React.ReactNode,
}) {
  const users = await getUsers();

  return (
    // @ts-expect-error Server Component
      //as sidebar is a async function, that's why we can't use sidebar without above tag, that's a special ta
    <Sidebar>
      <div className="h-full">
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  );
}