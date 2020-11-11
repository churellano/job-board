CREATE TABLE "UserAccount" (
	"Id" int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
  "Identifier" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "RoleId" int NOT NULL,

  "Username" varchar(255) UNIQUE NOT NULL,
  "Password" text NOT NULL,

	"FirstName" varchar(255) NOT NULL,
  "LastName" varchar(255) NOT NULL,

  "ContactEmail" varchar(255) UNIQUE NOT NULL,
	"ContactPhone" varchar(255) UNIQUE NULL,

  CONSTRAINT "FK_UserAccount_Role" FOREIGN KEY ("RoleId") REFERENCES "Role"("Id")
); 