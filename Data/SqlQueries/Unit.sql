USE [Foodbuddy]
GO

DROP TABLE [dbo].[Unit]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Unit](
	[rowguid] [uniqueidentifier] NOT NULL,
	[txtName] [nvarchar](50) NOT NULL,
	[txtShortName] [varchar](20) NULL,
	[txtDescription] [nvarchar](50) NULL,
	[dteCreatedOn] [date] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[rowguid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

Insert into Unit(rowguid, txtName, txtShortName, txtDescription, dteCreatedOn) values (NEWID(), 'liter', 'ltr', 'to measure liquid items', GETDATE())
Insert into Unit(rowguid, txtName, txtShortName, txtDescription, dteCreatedOn) values (NEWID(), 'milliliter', 'ml', 'to measure liquid items', GETDATE())
Insert into Unit(rowguid, txtName, txtShortName, txtDescription, dteCreatedOn) values (NEWID(), 'piece', 'pc', 'to measure solid items', GETDATE())
Insert into Unit(rowguid, txtName, txtShortName, txtDescription, dteCreatedOn) values (NEWID(), 'gram', 'gm','to measure liquid items', GETDATE())
Insert into Unit(rowguid, txtName, txtShortName, txtDescription, dteCreatedOn) values (NEWID(), 'kilogram', 'kg','to measure liquid items', GETDATE())