// This file is auto-generated by @hey-api/openapi-ts

export const ApprovedSchema = {
  title: "Approved",
  required: ["code", "session_token"],
  type: "object",
  properties: {
    code: {
      $ref: "#/components/schemas/WebSessionCode",
    },
    session_token: {
      $ref: "#/components/schemas/JWT",
    },
  },
} as const;

export const JWTSchema = {
  title: "JWT",
  type: "string",
} as const;

export const NotFoundSchema = {
  title: "NotFound",
  required: ["code"],
  type: "object",
  properties: {
    code: {
      $ref: "#/components/schemas/WebSessionCode",
    },
  },
} as const;

export const PendingSchema = {
  title: "Pending",
  required: ["code", "expires_at"],
  type: "object",
  properties: {
    code: {
      $ref: "#/components/schemas/WebSessionCode",
    },
    expires_at: {
      type: "string",
      format: "date-time",
    },
  },
} as const;

export const PendingApprovalSchema = {
  title: "PendingApproval",
  required: ["code", "expires_at"],
  type: "object",
  properties: {
    code: {
      $ref: "#/components/schemas/WebSessionCode",
    },
    expires_at: {
      type: "string",
      format: "date-time",
    },
    device_name: {
      type: "string",
    },
  },
} as const;

export const ProblemSchema = {
  title: "Problem",
  required: ["status", "title"],
  type: "object",
  properties: {
    status: {
      type: "integer",
      description: "HTTP response status code.",
      format: "int32",
      example: 400,
    },
    title: {
      type: "string",
      description: "Error short description.",
      example: "Bad request.",
    },
    detail: {
      type: "string",
    },
    instance: {
      type: "string",
    },
  },
  description: "Represents an error of the SwissBorg Rest API.",
} as const;

export const RejectedSchema = {
  title: "Rejected",
  required: ["code"],
  type: "object",
  properties: {
    code: {
      $ref: "#/components/schemas/WebSessionCode",
    },
  },
} as const;

export const SecretSchema = {
  title: "Secret",
  type: "string",
  description:
    "Secret value used to initiate and query the status of a Web Session flow.",
} as const;

export const TimeoutSchema = {
  title: "Timeout",
  required: ["code"],
  type: "object",
  properties: {
    code: {
      $ref: "#/components/schemas/WebSessionCode",
    },
  },
} as const;

export const WebAuthClientSchema = {
  title: "WebAuthClient",
  type: "string",
  description:
    "Target client to which the WebSession being setup is aimed for. Partners will know this value during integration phase.",
} as const;

export const WebAuthManagementGetSessionStatusRequestBodySchema = {
  title: "WebAuthManagementGetSessionStatusRequestBody",
  required: ["secret"],
  type: "object",
  properties: {
    secret: {
      $ref: "#/components/schemas/Secret",
    },
  },
} as const;

export const WebAuthManagementGetSessionStatusResponseSchema = {
  title: "WebAuthManagementGetSessionStatusResponse",
  oneOf: [
    {
      required: ["approved"],
      type: "object",
      properties: {
        approved: {
          $ref: "#/components/schemas/Approved",
        },
      },
    },
    {
      required: ["not_found"],
      type: "object",
      properties: {
        not_found: {
          $ref: "#/components/schemas/NotFound",
        },
      },
    },
    {
      required: ["pending"],
      type: "object",
      properties: {
        pending: {
          $ref: "#/components/schemas/Pending",
        },
      },
    },
    {
      required: ["pending_approval"],
      type: "object",
      properties: {
        pending_approval: {
          $ref: "#/components/schemas/PendingApproval",
        },
      },
    },
    {
      required: ["rejected"],
      type: "object",
      properties: {
        rejected: {
          $ref: "#/components/schemas/Rejected",
        },
      },
    },
    {
      required: ["timeout"],
      type: "object",
      properties: {
        timeout: {
          $ref: "#/components/schemas/Timeout",
        },
      },
    },
  ],
} as const;

export const WebAuthManagementSetupSessionRequestBodySchema = {
  title: "WebAuthManagementSetupSessionRequestBody",
  required: ["audience", "secret"],
  type: "object",
  properties: {
    audience: {
      $ref: "#/components/schemas/WebAuthClient",
    },
    secret: {
      $ref: "#/components/schemas/Secret",
    },
  },
} as const;

export const WebAuthManagementSetupSessionResponseSchema = {
  title: "WebAuthManagementSetupSessionResponse",
  required: ["code", "expires_at"],
  type: "object",
  properties: {
    code: {
      $ref: "#/components/schemas/WebSessionCode",
    },
    expires_at: {
      type: "string",
      format: "date-time",
    },
  },
} as const;

export const WebSessionCodeSchema = {
  title: "WebSessionCode",
  type: "string",
  description: "Web Session flow identifier.",
} as const;