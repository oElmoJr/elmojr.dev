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
          <h1>
            <Title text="ElmoJr." />
          </h1>
          <JobTitle />
        </TitleContainer>
      </ProfileContainer>

      <LinkContainer>
        <Popover.Root>
          <Popover.Trigger asChild>
            <Button
              className="disabled"
              // onClick={() => navigate("/portfolio")}
            >
              Portfólio
            </Button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              className="PopoverContent"
              style={{
                backgroundColor: `#4f4f4fe1`,
                color: "#E5E6E0",
                padding: "10px",
                borderRadius: "10px",
                fontFamily: "Roboto",
              }}
              sideOffset={5}
              side={"bottom"}
            >
              🚧 Em construção. 🚧
              <Popover.Arrow style={{ fill: "#4f4f4fe1" }} width={20} />
            </Popover.Content>
          </Popover.Portal>{" "}
        </Popover.Root>

        <SocialMediaLinks />
      </LinkContainer>
    </Container>
  );
}
