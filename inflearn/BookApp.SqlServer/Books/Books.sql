CREATE TABLE [dbo].[Books]
(
  [Id] INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
  Title NVARCHAR(255) Not Null,
  Descript NVARCHAR (Max) Null
)
GO
