import { Column, Db, Primary, SQLite3Driver } from "sqlite-ts";

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
  birthPlace: string = "";
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
