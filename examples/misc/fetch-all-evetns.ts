import { EventId, PaginatedEvents, SuiClient, SuiEvent } from "@mysten/sui.js/client";
import { MAX_BATCH_EVENTS_PER_QUERY_EVENTS_REQUEST } from "../../src/providers/common";

export const fetchAllEvents = async () => {
  const suiProviderUrl = "https://fullnode.mainnet.sui.io";
  const provider = new SuiClient({ url: suiProviderUrl });
  const publicKey = "";

  console.time("fetchEvents");
  const pageCapacity = MAX_BATCH_EVENTS_PER_QUERY_EVENTS_REQUEST;
  const allEvents: SuiEvent[] = [];
  let nextCursor: EventId | undefined | null = null;
  let events: PaginatedEvents = await provider.queryEvents({
    query: { Sender: publicKey },
    limit: pageCapacity,
    cursor: nextCursor,
  });

  // Fetching and combining part
  while (events.hasNextPage) {
    const userEvents: SuiEvent[] = events.data;
    allEvents.push(...userEvents);

    nextCursor = events.nextCursor;
    events = await provider.queryEvents({
      query: { Sender: publicKey },
      limit: pageCapacity,
      cursor: nextCursor,
    });
  }

  console.timeEnd("fetchEvents");
  const userEvents: SuiEvent[] = events.data;
  allEvents.push(...userEvents);
  console.debug("allEvents.length", allEvents.length);

  console.debug("allEvents: ", allEvents);
};

fetchAllEvents();
