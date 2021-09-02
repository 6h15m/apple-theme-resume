import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import { NavLink } from 'react-router-dom';

const tags = [
  {
    name: 'all',
    text: '#ALL',
  },
  {
    name: 'react',
    text: '#React',
  },
  {
    name: 'vuejs',
    text: '#Vue.js',
  },
  {
    name: 'javascript',
    text: '#JavaScript',
  },
  {
    name: 'java',
    text: '#Java',
  },
  {
    name: 'python',
    text: '#Python',
  },
  {
    name: 'nodejs',
    text: '#Node.js',
  },
  {
    name: 'design',
    text: '#Design',
  },
];

const TagsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  hr {
    width: 320px;
    margin: 0;
  }
  .title {
    font-size: 50px;
    font-weight: 600;
  }
  .tags-list {
    display: flex;
    flex-direction: row;
    min-width: 736px;
    justify-content: space-between;
    margin-top: 4rem;
  }
`;

const Tag = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  color: ${palette.gray[6]};
  cursor: pointer;

  &:hover {
    font-weight: 700;
    background: linear-gradient(
      to right top,
      ${palette.theme[0]},
      ${palette.theme[1]}
    );
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }

  &.active {
    font-weight: 700;
    background: linear-gradient(
      to right top,
      ${palette.theme[0]},
      ${palette.theme[1]}
    );
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

const Tags = ({ onSelect, tag }) => {
  return (
    <TagsBlock>
      <div className="title">프로젝트</div>
      <div className="tags-list">
        {tags.map((t) => (
          <Tag
            key={t.name}
            activeClassName="active"
            exact={t.name === 'all'}
            to={t.name === 'all' ? '/project' : `/project/${t.name}`}
          >
            {t.text}
          </Tag>
        ))}
      </div>
    </TagsBlock>
  );
};

export default Tags;
