import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function AddFriend() {
  const navigate = useNavigate();
  const handleAddFriend = () => {
    navigate('/friends/create');
  };

  return (
    <Button variant="dark" onClick={handleAddFriend}>
      New Friend
    </Button>
  );
}
