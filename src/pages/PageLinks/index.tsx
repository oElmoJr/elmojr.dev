import {
  Container,
  ProfileContainer,
  TitleContainer,
  Button,
  LinkContainer,
} from "./styles";

import * as Tooltip from "@radix-ui/react-tooltip";
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
        <Tooltip.Provider>
          <Tooltip.Root delayDuration={400}>
            <Tooltip.Trigger asChild>
              <span>
                <Button onClick={() => navigate("/portfolio")} disabled>
                  Portfólio
                </Button>
              </span>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                style={{
                  backgroundColor: "#E5E6E0",
                  color: "#202020",
                  padding: "10px",
                  borderRadius: "5px",
                  fontFamily: "Roboto",
                }}
                className="TooltipContent"
                sideOffset={25}
                side={"bottom"}
              >
                🚧 Em construção. 🚧
                <Tooltip.Arrow style={{ fill: "#E5E6E0" }} width={20} />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>

        <SocialMediaLinks />
      </LinkContainer>
    </Container>
  );
}
