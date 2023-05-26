import { useEffect } from 'react';
import './User.scss';

import { Spinner } from 'react-bootstrap';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { getUserLoading } from '../../redux/slices/userSlice';

// import { IUser } from '../../models/IUser';

const User = () => {
  const userState = useAppSelector((state) => {
    return {
      user: state.user.user,
      userId: state.user.userId,
      isLoading: state.user.isLoading,
    };
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserLoading(localStorage.getItem('userId')));
  }, []);

  return (
    <div className="user">
      {userState.isLoading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <h1>{userState.user?.username}</h1>
      )}
    </div>
  );
};

export default User;
