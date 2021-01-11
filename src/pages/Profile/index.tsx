import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData 
            username={'vitorrrocha'}
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

        <RightSide>
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1,2,3,4,5,6].map(n => (
                <RepoCard 
                  key={n}
                  username={'vitorrrocha'}
                  reponame={'netflix-clone'}
                  description={'Interface netflix-clone'}
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={2}
                  forks={1}
                />
              ))}
            </div>
          </Repos>

        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;