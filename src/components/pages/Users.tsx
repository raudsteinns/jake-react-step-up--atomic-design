/** @jsxImportSource @emotion/react */
// import React, { useContext } from "react";
import { css } from "@emotion/react";
import SearchInput from "../molecules/SearchInput";
import UserCard from "../organisms/users/UserCard";
import SecondaryButton from "../atoms/button/SecondaryButton";
// import { UserContext } from "../../providers/UserProvider";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map((i) => {
  return {
    id: i,
    name: `Jake-${i}`,
    image: "https://images.unsplash.com/photo-1444228250525-3d441b642d12",
    email: "12345@example.com",
    phone: "111-222-3333",
    company: {
      name: "test株式会社",
    },
    website: "https://google.com",
  };
});

const Users: React.FC = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo?.isAdmin });
  };

  return (
    <div css={containerStyle}>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <div className="user-area">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  .user-area {
    width: 100%;
    padding-top: 40px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
  }
`;

export default Users;
