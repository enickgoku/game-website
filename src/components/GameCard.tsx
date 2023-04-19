import { Game } from "../hooks/useGames";
import { Card, CardBody, Flex, Heading, Image, HStack } from "@chakra-ui/react";
import PlatformList from "./PlatformList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Flex
      height="400px"
      width="300px"
      boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="8px 8px 8px 8px"
    >
      <Card height="100%" width="100%">
        <Image
          src={getCroppedImageUrl(game.background_image)}
          maxHeight="220px"
          objectFit="cover"
          borderRadius={3}
        />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default GameCard;
