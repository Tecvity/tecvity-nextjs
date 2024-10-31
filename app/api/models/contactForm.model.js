const DEFAULT_STATUS = "new";

const createContactFormObject = ({ firstname, lastname, email, message }) => ({
  email,
  firstname,
  lastname,
  message,
  status: DEFAULT_STATUS,
  submission_timestamp: new Date().toISOString(),
  updated_at: new Date().toISOString(),
});

export default createContactFormObject;
