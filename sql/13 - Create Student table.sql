CREATE TABLE Student (
	UserAccountId int NOT NULL,
	EmploymentStatusId int  NOT NULL,

  CONSTRAINT FK_Student_UserAccount FOREIGN KEY (UserAccountId) REFERENCES UserAccount(Id),
  CONSTRAINT FK_Student_EmploymentStatus FOREIGN KEY (EmploymentStatusId) REFERENCES EmploymentStatus(Id)
); 