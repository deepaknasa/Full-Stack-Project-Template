USE [Foodbuddy]
GO

/****** Object:  Table [dbo].[Consumption]    Script Date: 10/06/2017 2:30:41 PM ******/
DROP TABLE [dbo].[Consumption]
GO

/****** Object:  Table [dbo].[Consumption]    Script Date: 10/06/2017 2:30:41 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Consumption](
	[rowguid] [uniqueidentifier] NOT NULL,
	[gnuFoodUnit] [uniqueidentifier] NOT NULL CONSTRAINT PK_Consumption_FK_gnuFoodUnit REFERENCES FoodUnit(rowguid),
	[intConsumptionDays] [int] NOT NULL,
	[intConsumedByPersons] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[rowguid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO


