import { useParams } from 'react-router-dom';
import { FriendCard, selectFriendById } from '../../entities/friends';
import AppLayout from '../../shared/components/app-layout/app-layout';
import { useAppSelector } from '../../shared/hooks';

export default function FriendDetailPage() {
  const { id } = useParams();
  const friend = useAppSelector((state) =>
    selectFriendById(state.friends, +id!)
  );

  if (!friend) {
    <div>Not found friend with id: {id}</div>;
  }

  return (
    <AppLayout
      content={
        <div className="mt-2">
          <FriendCard data={friend} />
        </div>
      }
    />
  );
}
