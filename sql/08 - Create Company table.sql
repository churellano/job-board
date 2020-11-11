CREATE TABLE "Company" (
	"Id" int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
	"Identifier" uuid NOT NULL DEFAULT uuid_generate_v4(),
  
  "Name" varchar(255) NOT NULL,

  "Address" text NOT NULL,
	"City" varchar(255) NOT NULL,
	"ProvinceId" int NULL,
	"StateId" int NULL,
	"Region" varchar(255),
	"CountryId" int NOT NULL,

  "ContactEmail" varchar(255) NOT NULL,
	"ContactPhone" varchar(255) NULL,

  CONSTRAINT "FK_Company_Province" FOREIGN KEY ("ProvinceId") REFERENCES "Province"("Id"),
  CONSTRAINT "FK_Company_State" FOREIGN KEY ("StateId") REFERENCES "State"("Id"),
  CONSTRAINT "FK_Company_Country" FOREIGN KEY ("CountryId") REFERENCES "Country"("Id")
);