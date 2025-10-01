import bcrypt from "bcryptjs";

export function saltAndHashedPassword(password: string) {
  const saltRound = 10;
  const salt = bcrypt.genSaltSync(saltRound);
  const hashedPassword = bcrypt.hashSync(password, salt);

  return hashedPassword;
}
