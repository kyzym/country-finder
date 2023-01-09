import { NavigateFunction } from "react-router-dom";
import { Country } from "types";
import { useNeighbors } from "../use-neighbors";
import {
  InfoImage,
  InfoTitle,
  List,
  ListGroup,
  ListItem,
  Meta,
  Tag,
  TagGroup,
  Wrapper,
} from "./Info.styled";

interface InfoProp extends Country {
  push: NavigateFunction;
}

export const Info = (props: InfoProp) => {
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
    push,
  } = props;

  const neighbors = useNeighbors(borders);

  return (
    <Wrapper>
      <InfoImage src={flag} alt={name} />

      <div>
        <InfoTitle>{name}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native Name:</b> {nativeName}
            </ListItem>
            <ListItem>
              <b>Population</b> {population}
            </ListItem>
            <ListItem>
              <b>Region:</b> {region}
            </ListItem>
            <ListItem>
              <b>Sub Region:</b> {subregion}
            </ListItem>
            <ListItem>
              <b>Capital:</b> {capital}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Top Level Domain</b>{" "}
              {topLevelDomain.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>Currency</b>{" "}
              {currencies.map((c) => (
                <span key={c.code}>{c.name} </span>
              ))}
            </ListItem>
            <ListItem>
              <b>Top Level Domain</b>{" "}
              {languages.map((l) => (
                <span key={l.name}>{l.name}</span>
              ))}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Border Countries</b>
          {!borders.length ? (
            <span>There is no border countries</span>
          ) : (
            <TagGroup>
              {neighbors.map((countryName) => (
                <Tag
                  key={countryName}
                  onClick={() => push(`/country/${countryName}`)}
                >
                  {countryName}
                </Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  );
};
