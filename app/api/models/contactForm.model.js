const DEFAULT_STATUS = "new";

const createContactFormObject = ({ email, name, website, message }) => ({
  email,
  name,
  website,
  message,
  status: DEFAULT_STATUS,
  submission_timestamp: new Date().toISOString(),
  updated_at: new Date().toISOString(),
});

export default createContactFormObject;