import { userRootId } from "./../constants";
import { User, Info } from "./Schemas";
import Realm from "realm";

const realm = new Realm({ schema: [User, Info], schemaVersion: 1 });

export const saveUser = (
  id: string,
  name: string,
  birthDate: string,
  birthTime: string,
  utc: number,
  birthPlace: string
) => {
  realm.write(() => {
    realm.create("User", {
      id: id,
      name: name,
      birthDate: birthDate,
      birthTime: birthTime,
      birthPlace: birthPlace,
      utc: utc,
    });
  });
};

export const getUser = (id: string) => {
  const users = realm.objects<User>(User.schema.name);
  let user = users.filtered("id = ", id)[0] as User;
  return user;
};

export const deleteUser = (id: string) => {
  realm.write(() => {
    realm.delete(getUser((id = id)));
  });
};

export const updateUser = (
  id: string,
  name: string,
  birthDate: string,
  birthTime: string,
  utc: number,
  birthPlace: string
) => {
  realm.write(() => {
    let user = getUser((id = id));
    (user.name = name),
      (user.birthDate = birthDate),
      (user.birthTime = birthTime),
      (user.utc = utc),
      (user.birthPlace = birthPlace);
  });
};

export const getFriends = () => {
  return realm.objects<User>(User.schema.name).filtered("id !== ", userRootId);
};
