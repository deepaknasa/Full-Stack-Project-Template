USE [Foodbuddy]
GO

/****** Object:  Table [dbo].[FoodItem]    Script Date: 10/06/2017 12:17:58 PM ******/
DROP TABLE [dbo].[FoodUnit]
GO

/****** Object:  Table [dbo].[FoodItem]    Script Date: 10/06/2017 12:17:58 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[FoodUnit](
	[rowguid] [uniqueidentifier] NOT NULL,
	[gnuUnit] [uniqueidentifier] NOT NULL REFERENCES Unit (rowguid),
	[gnuFoodItem] [uniqueidentifier] NOT NULL REFERENCES FoodItem (rowguid),
	[dteCreatedOn] [date] NOT NULL,
	[dteLastUpdateOn] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[rowguid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO