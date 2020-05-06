import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }
  }

  svg {
    margin-right: 4px;
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    @media (max-width: 735px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: -20px;
    }

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;

      @media (max-width: 735px) {
        margin-bottom: 20px;
      }
    }

    div {
      margin-left: 24px;

      @media (max-width: 735px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      strong {
        font-size: 36px;
        color: #3d3d4d;

        @media (max-width: 735px) {
          font-size: 2.5rem;
          text-align: center;
        }
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;

        @media (max-width: 735px) {
          font-size: 1.2rem;
        }
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    @media (max-width: 735px) {
      justify-content: center;
      align-items: center;
    }

    li {
      & + li {
        margin-left: 80px;
      }
    }

    strong {
      display: block;
      font-size: 36px;
      color: #3d3d4d;
    }

    span {
      display: block;
      margin-top: 4px;
      color: #6c6c80;
      font-size: 0.9rem;
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
