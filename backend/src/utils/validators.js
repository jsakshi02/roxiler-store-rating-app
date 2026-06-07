const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validatePassword = (password) => {
  const regex =
    /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,16}$/;

  return regex.test(password);
};

const validateName = (name) => {
  return name.length >= 20 && name.length <= 60;
};

const validateAddress = (address) => {
  return address.length <= 400;
};

module.exports = {
  validateEmail,
  validatePassword,
  validateName,
  validateAddress
};