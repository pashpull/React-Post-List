import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './User-Page.scss';

import { useAppSelector, useAppDispatch } from '../../hooks/hooksForRedux';
import { userRequest } from '../../redux/slices/userSlice';

import Button from '../../UI/Button/Button';
import Loader from '../../components/Loader/Loader';

import PostList from '../../components/Post-List/Post-List';

const UserPage = () => {
  const userState = useAppSelector((state) => state.user);

  const { userId } = useParams<string>();

  const dispatch = useAppDispatch();

  useEffect((): void => {
    dispatch(userRequest(userId));
  }, []);

  const backBtnHandler = (): void => {
    history.back();
  };

  return userState.isLoading ? (
    <Loader />
  ) : userState.error ? (
    <h2>{userState.error}</h2>
  ) : (
    <div className="user">
      <Button
        text={'Back'}
        toDo={backBtnHandler}
        localClassName=" user__back-btn"
      />
      <div className="user__head">
        <div className="user__avatar">
          <img
            src="/JasonStatham.jpg"
            alt={`${userState.user?.username}'s avatar`}
            className="user__avatar-img"
          />
        </div>
        <div className="user__info">
          <h2 className="user__info-item">{`Name: ${userState.user?.name} (${userState.user?.username})`}</h2>
          <h2 className="user__info-item">{`Email: ${userState.user?.email}`}</h2>
          <h2 className="user__info-item">{`Phone: ${userState.user?.phone}`}</h2>
          <h2 className="user__info-item">{`Address: ${userState.user?.address.city}, ${userState.user?.address.street}`}</h2>
        </div>
      </div>
      <div className="user__posts">
        <PostList posts={userState.userPosts} />
      </div>
    </div>
  );
};

export default UserPage;
