import { useParams } from 'react-router-dom';
import { FriendCreateEditCard, selectFriendById } from '../../entities/friends';
import AppLayout from '../../shared/components/app-layout/app-layout';
import { useAppSelector } from '../../shared/hooks';

export default function EditFriendPage() {
  const { id } = useParams();
  const friend = useAppSelector((state) =>
    selectFriendById(state.friends, +id!)
  );

  return (
    <AppLayout
      title={`Editing Friend`}
      content={<FriendCreateEditCard data={friend} />}
    />
  );
}
