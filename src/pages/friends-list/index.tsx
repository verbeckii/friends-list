import AppLayout from '../../shared/components/app-layout/app-layout';
import { FriensTable } from '../../entities/friends';
import { AddFriend } from '../../features/add-friend';
import { useAppSelector } from '../../shared/hooks';

export default function FriendsPage() {
  const friends = useAppSelector((state) => state.friends);
  const headers = {
    fullName: 'Name',
    email: 'Email',
    phone: 'Phone',
    twitter: 'Twitter',
    actions: 'Actions',
  };

  return (
    <AppLayout
      title={'Friend List'}
      content={
        <>
          <FriensTable data={friends} headers={headers} />
          <AddFriend />
        </>
      }
    />
  );
}
