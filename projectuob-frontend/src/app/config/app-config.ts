export default {

  oidc: {
    clientId: '0oapckhgx61TLzVoc5d6',  // firebase
    // clientId: '0oap0uhgyhhdwrd7r5d6',
    issuer: 'https://dev-10258699.okta.com/oauth2/default',
    redirectUri: 'https://projectuob2.web.app/login/callback',  // firebase
    // redirectUri: 'http://localhost:4200/login/callback',
    scopes: ['openid', 'profile', 'email']
  },

  backendUrl: 'http://projectuobrecommender-env.eba-fsemignq.ap-south-1.elasticbeanstalk.com/'
};
