import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../shared/hooks';
import {
  Friend,
  addFriend,
  editFriend,
  removeFriend,
  selectAvailableId,
} from '../../model';
import { useAppSelector } from '../../../../shared/hooks/';

interface FriendCreateEditCardProps {
  data?: Friend;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string(),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.number().min(7),
  twitter: Yup.string(),
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  twitter: '',
  id: 0,
};

export function FriendCreateEditCard({ data }: FriendCreateEditCardProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const nextAvailableId = useAppSelector((state) =>
    selectAvailableId(state.friends)
  );

  const handleSubmit = (values: Friend) => {
    if (id) {
      values.id = +id;
      dispatch(editFriend(values));
      navigate('/friends');
    } else {
      values.id = nextAvailableId;
      dispatch(addFriend(values));
      navigate('/friends');
    }
  };

  const handleBackRedirect = () => {
    navigate(-1);
  };
  const handleShowRedirect = () => {
    navigate(`/friends/${id}`);
  };
  const handleRemoveRedirect = () => {
    dispatch(removeFriend(+id!));
    navigate('/friends');
  };

  return (
    <>
      <Formik
        initialValues={data ? { ...data } : initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="mt-2">
            <div className="mb-2">
              <Field
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="First name"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-2">
              <Field
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Last name"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-2">
              <Field
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-2">
              <Field
                type="number"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Phone"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-2">
              <Field
                type="text"
                className="form-control"
                id="twitter"
                name="twitter"
                placeholder="Twitter"
              />
              <ErrorMessage
                name="twitter"
                component="div"
                className="text-danger"
              />
            </div>
            <ButtonGroup className="" aria-label="action buttons">
              <Button
                className="me-2"
                variant="dark"
                type="submit"
                disabled={isSubmitting}
              >
                {id ? 'Update Friend' : 'Craete Friend'}
              </Button>
            </ButtonGroup>
          </Form>
        )}
      </Formik>
      <ButtonGroup className="mt-1" aria-label="action buttons">
        <Button variant="secondary" onClick={handleBackRedirect}>
          Back
        </Button>
        {id && (
          <>
            <Button
              className="ms-1"
              variant="secondary"
              onClick={handleShowRedirect}
            >
              Show
            </Button>
            <Button
              className="ms-1"
              variant="danger"
              onClick={handleRemoveRedirect}
            >
              Remove
            </Button>
          </>
        )}
      </ButtonGroup>
    </>
  );
}
