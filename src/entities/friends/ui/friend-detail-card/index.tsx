import { ButtonGroup, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Friend } from '../../model';

interface FriendCardProps {
  data?: Friend;
}

export function FriendCard({ data }: FriendCardProps) {
  const navigate = useNavigate();
  const handleBackRedirect = () => {
    navigate(-1);
  };
  const handleEditRedirect = () => {
    navigate(`/friends/${data?.id}/edit`);
  };
  return (
    <Container>
      <Card bg={'secondary'}>
        <Card.Body>
          <Card.Title>
            {data?.firstName} {data?.lastName}
          </Card.Title>
          <Card.Text>
            {data?.email} | {data?.phone} | {data?.twitter}
          </Card.Text>
          <ButtonGroup aria-label="action buttons">
            <Button
              className="me-2"
              variant="outline-light"
              onClick={handleBackRedirect}
            >
              Back
            </Button>
            <Button variant="outline-light" onClick={handleEditRedirect}>
              Edit
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}
