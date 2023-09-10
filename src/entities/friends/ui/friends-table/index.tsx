import { Button, ButtonGroup } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';
import { Friend, removeFriend } from '../../model';
import { useAppDispatch } from '../../../../shared/hooks';

interface FriensTableProps {
  data: Friend[];
  headers: { [key: string]: string };
}

export function FriensTable({ data, headers }: FriensTableProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  const headerKeys = Object.keys(headers);

  const handleEdit = (id: number) => {
    navigate(`/friends/${id}/edit`);
  };
  const handleRemove = (id: number) => {
    dispatch(removeFriend(id));
    navigate('/friends');
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {headerKeys.map((key) => (
            <th key={key}>{headers[key]}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {headerKeys.map((key) => (
              <td key={key}>
                {key === 'actions' ? (
                  <ButtonGroup aria-label="actions buttons">
                    <Button
                      variant="warning"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </Button>
                  </ButtonGroup>
                ) : key === 'fullName' ? (
                  <Link to={`/friends/${item.id}`}>
                    {item.firstName} {item.lastName}
                  </Link>
                ) : (
                  item[key as keyof Friend]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
