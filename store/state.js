export default () => ({
  request: {
    method: "GET",
    url: "https://reqres.in",
    path: "/api/users",
    label: "",
    auth: "None",
    httpUser: "",
    httpPassword: "",
    passwordFieldType: "password",
    bearerToken: "",
    headers: [],
    params: [],
    bodyParams: [],
    rawParams: "",
    rawInput: false,
    requestType: "",
    contentType: ""
  },
  gql: {
    url: "https://rickandmortyapi.com/graphql",
    headers: [],
    variables: [],
    query: ""
  },
  oauth2: {
    tokens: [],
    tokenReqs: [],
    tokenReqSelect: "",
    tokenReqName: "",
    accessTokenName: "",
    oidcDiscoveryUrl: "",
    authUrl: "",
    accessTokenUrl: "",
    clientId: "",
    scope: ""
  }
});
