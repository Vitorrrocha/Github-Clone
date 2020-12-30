import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData 
            username={'Vitorrrocha'}
            name={'Vitor Rocha'}
            avatarUrl={'https://avatars1.githubusercontent.com/u/44412471?s=460&u=476f0458df2f971a353b1c2c288192ca89bb6f86&v=4'}
            followers={1320}
            following={320}
            company={'Searching a job :)'}
            location={'Florianópolis, SC ,Brasil'}
            email={'teste@hotmail.com'}
            blog={undefined}
          />

        </LeftSide>

        <RightSide></RightSide>
      </Main>
    </Container>
  );
}

export default Profile;