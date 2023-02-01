import {
  Container,
  ProfileContainer,
  TitleContainer,
  Button,
  LinkContainer,
} from "./styles";

import * as Popover from "@radix-ui/react-popover";
import ProfilePiture from "../../components/ProfilePiture";
import Title from "../../components/Title";
import JobTitle from "../../components/JobTitle";
import SocialMediaLinks from "../../components/SocialMediaLinks";

import { useNavigate } from "react-router-dom";

export default function PageLinks() {
  const navigate = useNavigate();
  document.title = "ElmoJr | Links";

  return (
    <Container>
      <ProfileContainer>
        <ProfilePiture />
        <TitleContainer>
          <Title text="ElmoJr." />
          <JobTitle />
        </TitleContainer>
      </ProfileContainer>

      <LinkContainer>
        <Popover.Root>
          <Popover.Trigger asChild>
            <Button className="disabled">Portfólio</Button>
            {/* <Button onClick={() => navigate("/portfolio")} disabled>Portfólio</Button> */}
          </Popover.Trigger>

          <Popover.Portal>
            <Popover.Content
              style={{
                backgroundColor: "#E5E6E0",
                color: "#202020",
                padding: "10px",
                borderRadius: "5px",
                fontFamily: "Roboto",
              }}
              sideOffset={5}
              side={"bottom"}
            >
              🚧 Em construção. 🚧
              <Popover.Arrow style={{ fill: "#E5E6E0" }} width={20} />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>

        <SocialMediaLinks />
      </LinkContainer>
    </Container>
  );
}
