import WebApp from "@twa-dev/sdk";

const API_URL = import.meta.env.VITE_API_URL || "";

export const request = async <Output, Input = Record<PropertyKey, unknown>>(
  path: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" = "GET",
  body?: Input,
): Promise<Output> => {
  const endpoint = `${API_URL}/${path}`;
  const bodyAsString = body ? JSON.stringify(body) : undefined;

  const response = await fetch(endpoint, {
    method,
    body: bodyAsString,
    headers: {
      hash: WebApp.initData,
    },
  });
  if (response.status === 200) {
    return response.json() as Output;
  }
  throw new Error(
    `Non-successful status: ${
      response.status
    }. Endpoint: ${endpoint}. Request body: ${bodyAsString}. Error: ${await response.text()}`,
  );
};
