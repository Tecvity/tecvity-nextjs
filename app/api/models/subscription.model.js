const DEFAULT_SUBSCRIPTION_STATUS = "active";

const createSubscriptionObject = (email) => ({
  email,
  status: DEFAULT_SUBSCRIPTION_STATUS,
  subscribed_at: new Date().toISOString(),
  verification_token: null, //may use uuid() to generate random token for verifiacaion via email link
});

export default createSubscriptionObject;