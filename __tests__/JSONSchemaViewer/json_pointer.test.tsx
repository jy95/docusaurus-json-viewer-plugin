import React from "react";
import { expect, test, describe } from "@jest/globals";
import { render } from "@testing-library/react";
import JSONSchemaViewer from "../../src/theme/JSONSchemaViewer/index";

// Type to prevent creating invalid mocks
import type { JSONSchema } from "../../src/theme/JSONSchemaViewer/types";

const testcases: [string, JSONSchema][] = [
  [
    "Object properties - like street_address",
    {
      $id: "https://example.com/schemas/address",
      type: "object",
      properties: {
        street_address: { type: "string" },
        city: { type: "string" },
        state: { type: "string" },
      },
      required: ["street_address", "city", "state"],
    },
  ],
  [
    "Array Properties - like /prefixItems/3",
    {
      type: "array",
      prefixItems: [
        { type: "number" },
        { type: "string" },
        { enum: ["Street", "Avenue", "Boulevard"] },
        { enum: ["NW", "NE", "SW", "SE"] },
      ],
    },
  ],
  [
    "Escaped attribute - like country/state should give /properties/country~1state",
    {
      $id: "https://example.com/schemas/address",
      type: "object",
      properties: {
        street_address: { type: "string" },
        city: { type: "string" },
        "country/state": { type: "string" },
      },
      required: ["street_address", "city", "state"],
    },
  ],
];

describe("JSONSchemaViewer - JSON Pointer", () => {
  test.each(testcases)("test %s", (_title, fakeSchema) => {
    // Render the component
    const { asFragment } = render(
      <JSONSchemaViewer schema={fakeSchema} viewerOptions={{ showExamples: true }} />
    );

    // Capture the snapshot
    expect(asFragment()).toMatchSnapshot();
  });
});
