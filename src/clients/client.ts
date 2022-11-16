import { AbstractClient, Variables } from "./abstract_client";
import { LIST_QUERIES, ListQueries } from "./list_queries";

export enum Networks {
  Dev = "dev",
  Test = "test",
  Qa = "qa",
  Main = "main",
}

export class TFGridGqlClient extends AbstractClient {
  private readonly __uri: string;

  constructor(network: Networks) {
    super();

    this.__uri =
      network === Networks.Main
        ? "https://graphql.grid.tf/graphql"
        : `https://graphql.${network}.grid.tf/graphql`;
  }

  protected async _request<T>(
    query: string,
    variables: Variables,
    name: string
  ): Promise<T> {
    const res = await fetch(this.__uri, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });
    const { data } = await res.json();
    return data[name];
  }
}

export interface TFGridGqlClient extends ListQueries {}

for (const [entity, query] of Object.entries(LIST_QUERIES)) {
  Object.defineProperty(TFGridGqlClient.prototype, query, {
    value(this: TFGridGqlClient, fields: any, options: any) {
      return this._list({
        name: query,
        entity,
        fields,
        ...options,
      });
    },
  });
}
