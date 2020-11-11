CREATE TABLE "Job" (
	"Id" int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
	"Identifier" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "JobStatusId" int NOT NULL DEFAULT 1,

  "StartSemesterId" int NOT NULL,
  "StartYear" int NOT NULL,
	"MaximumLength" int NOT NULL,
	"Deadline" date NOT NULL,

	"Address" text NOT NULL,
	"City" varchar(255) NOT NULL,
	"ProvinceId" int NULL,
	"StateId" int NULL,
	"Region" varchar(255) NULL,
	"CountryId" int NOT NULL,

	"TargetFacultyId" int NULL,
	"CompanyId" int NOT NULL,
	"Title" varchar(255) NOT NULL,
	"Description" text NOT NULL,

	"ContactName" varchar(255) NOT NULL,
	"ContactSalutation" varchar(255) NOT NULL,
	"ContactEmail" varchar(255) NOT NULL,
	"ContactPhone" varchar(255) NULL,

	CONSTRAINT "FK_Job_JobStatus" FOREIGN KEY ("JobStatusId") REFERENCES "JobStatus"("Id"),
	CONSTRAINT "FK_Job_Semester" FOREIGN KEY ("StartSemesterId") REFERENCES "Semester"("Id"),
	CONSTRAINT "FK_Job_Province" FOREIGN KEY ("ProvinceId") REFERENCES "Province"("Id"),
  CONSTRAINT "FK_Job_State" FOREIGN KEY ("StateId") REFERENCES "State"("Id"),
  CONSTRAINT "FK_Job_Country" FOREIGN KEY ("CountryId") REFERENCES "Country"("Id"),
	CONSTRAINT "FK_Job_Faculty" FOREIGN KEY ("TargetFacultyId") REFERENCES "Faculty"("Id"),
	CONSTRAINT "FK_Job_Company" FOREIGN KEY ("CompanyId") REFERENCES "Company"("Id")
);