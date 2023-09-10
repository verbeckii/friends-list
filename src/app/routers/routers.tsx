import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import FriendsPage from '../../pages/friends-list';
import CreateFriendPage from '../../pages/create-friend';
import FriendDetailPage from '../../pages/friend-detail';
import EditFriendPage from '../../pages/edit-friend';

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/friends" />} />
      <Route path="/friends" element={<FriendsPage />} />
      <Route path="/friends/create" element={<CreateFriendPage />} />
      <Route path="/friends/:id" element={<FriendDetailPage />} />
      <Route path="/friends/:id/edit" element={<EditFriendPage />} />
    </Routes>
  </BrowserRouter>
);
