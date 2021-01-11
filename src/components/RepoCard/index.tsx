import React from 'react';

import { Container } from './styles';

interface Props {
    username: string,
    reponame: string,
    description?: string,
    language?: string,
    stars: number,
    forks: number,
}

const RepoCard: React.FC<Props> = ({
    username,
    reponame,
    description,
    language,
    stars,
    forks,
}) => {
  return (
    <Container>
        <TopSide>
            <header>
                <RepoIcon />
                <Link to={`/${username}/${reponame}`}>{reponame}</Link>
            </header>

            <p>{description}</p>
        </TopSide>
        <BotSide>

        </BotSide>
    </Container>
    );
}

export default RepoCard;