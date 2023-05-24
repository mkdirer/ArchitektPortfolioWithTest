import React from "react";
import { DiFirebase, DiReact, DiGitMerge } from "react-icons/di";
import {SiSketchup, SiArchicad, SiAdobephotoshop} from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider></SectionDivider>
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in my career. I specialize in
      building apps that are well tested and deployed on a continuous manner.
    </SectionText>
    <List>
      <ListItem>
        <SiSketchup size="5rem" />
        <ListContainer>
          <ListTitle>SketchUp</ListTitle>
          <ListParagraph>
          Quick creation of 3D models <br />
          and architectural visualizations.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiArchicad size="5rem" />
        <ListContainer>
          <ListTitle>ArchiCAD</ListTitle>
          <ListParagraph>
          Designing, modeling, documenting <br />
          buildings, and teamwork.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAdobephotoshop size="5rem" />
        <ListContainer>
          <ListTitle>Adobe Photoshop</ListTitle>
          <ListParagraph>
            Realistic visualizations, photo composites,<br />
            and color corrections.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
