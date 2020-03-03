const emails = {
  it: "it@drixit.com",
  info: "info@drixit.com"
};

export const getUsersData = email => {
  switch (email) {
    case emails.it:
      return {
        id: "it-drixit-1",
        avatar:
          "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png",
        email: "it@drixit.com",
        password: "some-password", // pass: some-password
        name: "IT",
        surname: "Drixit",
        age: 25,
        role: "admin"
      };
    case emails.info:
      return {
        id: "info-drixit-2",
        avatar:
          "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png",
        email: "info@drixit.com",
        password: "other-password", // pass: other-password
        name: "Info",
        surname: "Drixit",
        age: 30,
        role: "user"
      };
    default:
      return null;
  }
};
