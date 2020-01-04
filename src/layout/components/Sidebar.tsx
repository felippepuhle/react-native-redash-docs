import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { LayoutContext } from "../../contexts"
import { MEDIA } from "../../styles"
import { SIDEBAR_WIDTH } from "../modules/constants"

const Overlay = styled.div<{ isMobileSidebarVisible: boolean }>`
  transition: opacity 300ms linear;
  position: fixed;
  z-index: ${({ isMobileSidebarVisible }) => (isMobileSidebarVisible ? 10 : 0)};
  opacity: ${({ isMobileSidebarVisible }) => (isMobileSidebarVisible ? 1 : 0)};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);

  @media (${MEDIA.LG}) {
    z-index: 0;
    opacity: 0;
  }
`

const ASide = styled.aside<{ isMobileSidebarVisible: boolean }>`
  transition: left 300ms ease-in-out;
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${({ isMobileSidebarVisible }) =>
    isMobileSidebarVisible ? 0 : -SIDEBAR_WIDTH}px;
  z-index: 10;
  width: ${SIDEBAR_WIDTH}px;
  background: #f6f8fa;
  padding: 40px 20px;

  @media (${MEDIA.LG}) {
    left: 0;
    z-index: 10;
  }
`

const SearchInput = styled.input`
  transition: background-color 300ms ease-in-out;
  font-size: 14px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.06);
  box-shadow: none;
  outline: none;
  border: none;
  border-radius: 3px;
  padding: 8px 12px;

  &:focus {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`

const MenuItem = styled(Link).attrs({ activeClassName: "active" })`
  transition: color 300ms;
  padding: 10px 0px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.BLACK};
  text-decoration: none;

  &.active,
  &:hover {
    color: ${({ theme }) => theme.colors.MAIN};
  }
`

const Sidebar: React.FC = () => {
  const { isMobileSidebarVisible, setMobileSidebarVisible } = useContext(
    LayoutContext
  )

  return (
    <>
      <Overlay
        isMobileSidebarVisible={isMobileSidebarVisible}
        onClick={() => setMobileSidebarVisible(false)}
      />

      <ASide isMobileSidebarVisible={isMobileSidebarVisible}>
        <SearchInput placeholder="Search..." />

        <Menu>
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/components">Components</MenuItem>
          <MenuItem to="/svg">SVG</MenuItem>
          <MenuItem to="/math">Math</MenuItem>
          <MenuItem to="/string">String</MenuItem>
          <MenuItem to="/array">Array</MenuItem>
          <MenuItem to="/transitions">Transitions</MenuItem>
          <MenuItem to="/animations">Animations</MenuItem>
          <MenuItem to="/transformations">Transformations</MenuItem>
          <MenuItem to="/gestures">Gestures</MenuItem>
        </Menu>
      </ASide>
    </>
  )
}

export default Sidebar
