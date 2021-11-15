import React from "react";

import { ImgGuild } from "./styles";

export default function GuildIcon() {
  const uri =
    "https://e7.pngegg.com/pngimages/613/886/png-clipart-discord-computer-icons-online-chat-voice-chat-in-online-gaming-computer-software-game-buttorn-miscellaneous-blue.png";

  return <ImgGuild source={{ uri }} resizeMode="cover" />;
}
