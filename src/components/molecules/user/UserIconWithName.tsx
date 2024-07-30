/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

interface UserIconWithNameProps {
  name: string;
  image: string;
}

const UserIconWithName: React.FC<UserIconWithNameProps> = (props) => {
  const { image, name } = props;
  return (
    <div css={userCardStyle}>
      <img src={image} alt={name} height={160} width={160} />
      <p>{name}</p>
    </div>
  );
};

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
`;

export default UserIconWithName;
