import { User } from "UserModule";
import { Column, Db, Primary, SQLite3Driver } from "sqlite-ts";
import Sqlite3 = require("sqlite3");

const sqlite3 = require("sqlite3").verbose();

const sqlStorage = new sqlite3.Database("storage");

const DB = async () => {
  return await Db.init({
    driver: new SQLite3Driver(sqlStorage),
    entities: { DBUser, DBInfo },
    createTables: false,
  });
};

export class DBUser {
  @Primary()
  id: string = "";

  @Column("NVARCHAR")
  name: string = "";

  @Column("NVARCHAR")
  birthDate: string = "";

  @Column("NVARCHAR")
  birthTime: string = "";

  @Column("INTEGER")
  utc: number = 0;

  @Column("NVARCHAR")
  city: string = "";

  @Column("NVARCHAR")
  country: string = "";
}

export class DBInfo {
  @Primary()
  id: string = "";

  @Primary()
  userId: string = "";

  @Column("NVARCHAR")
  type: string = "";

  @Column("NVARCHAR")
  authority: string = "";

  @Column("DECIMAL")
  definition: number = 0;

  @Column("NVARCHAR")
  personalGates: string = "";

  @Column("NVARCHAR")
  designGates: string = "";

  @Column("NVARCHAR")
  superActiveNumbers: string = "";

  @Column("NVARCHAR")
  channels: string = "";

  @Column("NVARCHAR")
  profile: string = "";
}
