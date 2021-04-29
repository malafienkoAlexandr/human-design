import { BirthPlace } from "./../components/assistant/BirthPlace";
import { User } from "UserModule";
import { Db, SQLite3Driver } from "sqlite-ts";
import { DBUser, DBInfo } from "./Entities";
import Realm from "realm";

const realm = await Realm.open({
  path: "myrealm",
  schema: [],
});

// const sqlite3 = require("sqlite3").verbose();

// const sqlStorage = new sqlite3.Database("storage");

// var db: Db<{
//   DBUser: typeof DBUser;
//   DBInfo: typeof DBInfo;
// }>;

// export const initDb = async () => {
//   return await Db.init({
//     driver: new SQLite3Driver(sqlStorage),
//     entities: { DBUser, DBInfo },
//     createTables: true,
//   }).then((_db) => {
//     db = _db;
//   });
// };

// export const saveUser = async (user: User) => {
//   const result = await db.tables.DBUser.insert({
//     id: user.id,
//     name: user.name,
//     birthDate: user.birthDate,
//     birthTime: user.birthTime,
//     utc: user.utc,
//     birthPlace: user.birthPlce,
//   });
// };

// export const getUser = async (id: string) => {
//   return await db.tables.DBUser.single((c) => [c.id]).where((c) =>
//     c.equals({ id: { id } })
//   );
// };
