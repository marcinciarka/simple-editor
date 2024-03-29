import styled from 'styled-components';

const Layout = styled.div`
    box-sizing: border-box;
    max-width: 1200px;
    display: flex;
    margin: 20px auto 0;
    justify-content: space-around;
`;

Layout.Sidebar = styled.div`
    width: 220px;
`;

Layout.SidebarContent = styled.div`
    box-sizing: border-box;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 3px;
    padding: 20px;
    height: fit-content;
    margin-bottom: 30px;
`;

Layout.Editor = styled.div`
    width: 440px;
`;

export { Layout };