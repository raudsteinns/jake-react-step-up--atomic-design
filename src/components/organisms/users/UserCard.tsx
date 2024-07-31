/** @jsxImportSource @emotion/react */
import React, { memo } from "react";
import { css } from "@emotion/react";
import Card from "../../atoms/card/Card";
import UserIconWithName from "../../molecules/user/UserIconWithName";

interface User {
  name: string;
  image: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
  website: string;
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = memo((props) => {
  const { user } = props;

  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <dl css={userCardList}>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>tel.</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>Web Site</dt>
        <dd>{user.website}</dd>
      </dl>
    </Card>
  );
});

const userCardList = css`
  text-align: left;
  margin-bottom: 0;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;

export default UserCard;
