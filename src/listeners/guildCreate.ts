import { GatewayDispatchEvents, type Client } from "@discordjs/core";
import { guilds } from "#utils/guilds.js";

export function registerGuildCreateListener(client: Client) {
	client.on(GatewayDispatchEvents.GuildCreate, ({ data }) => {
		guilds.set(data.id, data.name);
	});
}
