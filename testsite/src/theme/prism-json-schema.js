;(function (Prism) {
  function escapeRegExp(input) {
    return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  }

  function createJsonSchemaRegex(keywords) {
    const keywordPattern = keywords
      .map((keyword) => `${escapeRegExp(keyword)}`)
      .join("|")
    return new RegExp(`\\b(${keywordPattern})\\b`)
  }

  var keywords = [
    // Keywords related to Draft-07
    "$id",
    "$schema",
    "$ref",
    "$comment",
    "$defs",
    "title",
    "description",
    "default",
    "readOnly",
    "writeOnly",
    "examples",
    "multipleOf",
    "maximum",
    "exclusiveMaximum",
    "minimum",
    "exclusiveMinimum",
    "maxLength",
    "minLength",
    "pattern",
    "additionalItems",
    "items",
    "maxItems",
    "minItems",
    "uniqueItems",
    "contains",
    "maxProperties",
    "minProperties",
    "required",
    "additionalProperties",
    "properties",
    "patternProperties",
    "dependencies",
    "propertyNames",
    "const",
    "enum",
    "type",
    "format",
    "contentMediaType",
    "contentEncoding",
    "if",
    "then",
    "else",
    "allOf",
    "anyOf",
    "oneOf",
    "not",
    "definitions",
    "title",
    "description",
    "default",
    "format",
    "examples",
    "const",
    "contains",
    "propertyNames",
    "const",
    "enum",
    "type",
    "items",
    "additionalItems",
    "minItems",
    "maxItems",
    "uniqueItems",
    "contains",
    "minLength",
    "maxLength",
    "pattern",
    "items",
    "additionalItems",
    "minItems",
    "maxItems",
    "uniqueItems",
    "contains",
    "properties",
    "patternProperties",
    "additionalProperties",
    "dependencies",
    "if",
    "then",
    "else",
    "allOf",
    "anyOf",
    "oneOf",
    "not",
    // Keywords related to Draft 2019-09
    "$anchor",
    "$defs",
    "dependentSchemas",
    "dependentRequired",
    "$recursiveAnchor",
    "$recursiveRef",
    "$vocabulary",
    "unevaluatedItems",
    "unevaluatedProperties",
    "maxContains",
    "minContains",
    "deprecated",
    // Keywords related to Draft 2020-12
    "prefixItems",
    "$dynamicRef",
    "$dynamicAnchor",
  ]

  //console.log(createJsonSchemaRegex(keywords));

  Prism.languages["json-schema"] = Prism.languages.extend("json5", {
    // Explanations
    // https://prismjs.com/faq.html#how-do-i-know-which-tokens-i-can-style-for
    // https://prismjs.com/tokens.html
    keyword: [
      {
        pattern: createJsonSchemaRegex(keywords),
        greedy: true,
      },
    ],
  })
})
