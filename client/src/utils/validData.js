export const validData = ({
  fullname,
  username,
  email,
  password,
  cf_password,
}) => {
  const err = {};

  if (!fullname) {
    err.fullname = 'Please add your full name';
  } else if (fullname.length > 25) {
    err.fullname = 'Full name length is 25 characters';
  }

  if (!username) {
    err.username = 'Please add a user name';
  } else if (username.replace(/ /g, '').length > 25) {
    err.username = 'User name length is 25 characters';
  }

  if (!email) {
    err.email = 'Please add an email';
  } else if (!validateEmail(email)) {
    err.email = 'Email format is incorrect';
  }

  if (!password) {
    err.password = 'Please add a password';
  } else if (password.length < 6) {
    err.password = 'Password must be at least 6 characters';
  }

  if (password !== cf_password) {
    err.cf_password = 'Password and confirmed password did not match';
  }

  return {
    errMsg: err,
    errLength: Object.keys(err).length,
  };
};

function validateEmail(email) {
  const re =
    // eslint-disable-next-line
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
