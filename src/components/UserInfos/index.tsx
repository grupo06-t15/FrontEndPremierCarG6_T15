import { UserInfosContainer, UserName, Useravatar } from './styled';

interface IUserInfosProps {
  userName: string | undefined;
}

export const UserInfos = ({ userName }: IUserInfosProps) => {
  const initialLetters = (name: string) => {
    const letters: string[] = name.split(' ');
    if (letters.length >= 2) {
      return letters[0][0].toUpperCase() + letters[1][0].toUpperCase();
    }

    return letters[0][0].toUpperCase() + letters[0][1].toUpperCase();
  };
  return (
    <UserInfosContainer>
      <Useravatar	>{userName ? initialLetters(userName) : null}</Useravatar>
      <UserName to={`/advertiser/${userName?.replace(' ', '_')}`}>
        {userName}
      </UserName>
    </UserInfosContainer>
  );
};
