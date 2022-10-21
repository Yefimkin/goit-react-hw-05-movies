import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Link = styled(NavLink)`
  font-size: 26px;
  font-weight: 500;
  text-decoration: none;
  &.active {
    color: orange;
  }
`;

const Wrapper = styled.div`
  padding: 40px;
`;

const Layout = () => {
  return (
    <Wrapper>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
      <hr />
      <Outlet />
    </Wrapper>
  );
};

export default Layout;