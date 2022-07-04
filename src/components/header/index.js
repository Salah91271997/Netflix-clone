import React, { useState } from "react";
import { Link as ReachRouterLink } from "react-router-dom";
import {
  Container,
  Background,
  Logo,
  Link,
  ButtonLink,
  FeatureCallOut,
  Feature,
  Dropdown,
  Profile,
  Group,
  Picture,
  Text,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
} from "./styles/header";

export default function Header({ bg = true, children, ...restProb }) {
  return bg ? (
    <Background {...restProb} data-testid="header-bg">
      {children}
    </Background>
  ) : (
    children
  );
}

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
        data-testid="search-click"
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
        data-testid="search-input"
      />
    </Search>
  );
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Feature = function HeaderFeature({ children, ...restProb }) {
  return <Feature {...restProb}>{children}</Feature>;
};
Header.Text = function HeaderText({ children, ...restProb }) {
  return <Text {...restProb}>{children}</Text>;
};
Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};
Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Frame = function HeaderFrame({ children, ...restProb }) {
  return <Container {...restProb}>{children}</Container>;
};
Header.Group = function HeaderGroup({ children, ...restProb }) {
  return <Group {...restProb}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};
Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};
Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};
