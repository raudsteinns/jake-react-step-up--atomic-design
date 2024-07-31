/** @jsxImportSource @emotion/react */
import React, { memo } from "react";
import { css } from "@emotion/react";
// import { UserContext } from "../../../providers/UserProvider";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";

interface UserIconWithNameProps {
  name: string;
  image: string;
}

const UserIconWithName: React.FC<UserIconWithNameProps> = memo((props) => {
  const { image, name } = props;
  // const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <div css={userCardStyle}>
      <img src={image} alt={name} height={160} width={160} />
      <p>{name}</p>
      {isAdmin && <button>編集</button>}
    </div>
  );
});

const userCardStyle = css`
  text-align: center;
  max-width: 100%;
  img {
    border-radius: 9999px;
  }
  p {
    font-size: 18px;
    font-weight: bold;
    line-height: 1;
    margin: 0;
    color: #40514e;
  }
  button {
  }
`;

export default UserIconWithName;
