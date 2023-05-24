import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Robert White
      </SectionTitle>
      <SectionText>
        My life's mission is to create world-class buildings that redefine the way we shape the future.
      </SectionText>
      <Button onClick={() => (window.location = "#about")}>About me</Button>
    </LeftSection>
  </Section>
);

export default Hero;
