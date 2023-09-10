import { FriendCreateEditCard } from '../../entities/friends';
import AppLayout from '../../shared/components/app-layout/app-layout';

export default function CreateFriendPage() {
  return <AppLayout content={<FriendCreateEditCard />} />;
}
