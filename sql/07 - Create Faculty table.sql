CREATE TABLE "Faculty" (
	"Id" int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
	"Name" varchar(255) NOT NULL
); 