import { ID, Int, PartialBoolean } from "../types";
import { assertHasField } from "../utils";

export type Variables = { [key: string]: any };

export abstract class AbstractClient {
  protected abstract _request<T>(
    query: string,
    variables: Variables,
    name: string
  ): Promise<T>;

  protected _list<T>(options: __InternalOptions<ByArray<any, any>, T>) {
    assertHasField(options.fields);

    const { name, entity, limit, offset, orderBy, where, fields } = options;
    const query = `
      query TFGridGqlClient${entity}sQuery(
        $limit: Int,
        $offset: Int,
        $orderBy: [${entity}OrderByInput],
        $where: ${entity}WhereInput
      ) {
        ${name}(
          limit: $limit,
          offset: $offset,
          orderBy: $orderBy,
          where: $where
        ) {
          ${AbstractClient.normalizeFields(fields)}
        }
      }
    `;
    return this._request<T[]>(
      query,
      {
        limit,
        offset,
        orderBy,
        where,
      },
      name
    );
  }

  private static normalizeFields<T>(fields: PartialBoolean<T>): string {
    return Object.entries(fields)
      .reduce((out, [key, value]: any) => {
        out.push(
          value === true
            ? key
            : `${key}{${AbstractClient.normalizeFields(value)}}`
        );
        return out;
      }, <string[]>[])
      .join(",");
  }
}

type __InternalOptions<T, R> = T & {
  name: string;
  entity: string;
  fields: PartialBoolean<R>;
};

export type ByIdOptions = { id: ID };
export type ByArray<OrderBy extends string = "", Where extends object = {}> = {
  limit?: Int;
  offset?: Int;
  orderBy?: `${OrderBy}_${"ASC" | "DESC"}`[];
  where?: Where;
};
export type ByConnection<
  OrderBy extends string = "",
  Where extends object = {}
> = {
  after?: string;
  first?: Int;
  orderBy: OrderBy[];
  where?: Where;
};
