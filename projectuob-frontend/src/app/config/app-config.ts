export default {

  oidc: {
    // clientId: '0oarxyh5alDdusGPe5d6',  // firebase
    // clientId: '0oapyw6902bz4mepL5d6', // aws
    clientId: '0oap0uhgyhhdwrd7r5d6',
    issuer: 'https://dev-10258699.okta.com/oauth2/default',
    // redirectUri: 'https://projectuob2.web.app/login/callback',  // firebase
    redirectUri: 'http://localhost:4200/login/callback',
    // redirectUri: 'http://projectuob-web.s3-website.ap-south-1.amazonaws.com/login/callback', // aws
    scopes: ['openid', 'profile', 'email']
  },

  // backendUrl: 'https://projectuob.herokuapp.com/'
  backendUrl: 'http://localhost:5000/'
};
