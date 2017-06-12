USE [Foodbuddy]
GO

ALTER TABLE [dbo].[FoodSupply] DROP CONSTRAINT [FK__FoodSuppl__gnuFoodItem]
GO

/****** Object:  Table [dbo].[FoodSupply]    Script Date: 10/06/2017 2:27:10 PM ******/
5
/****** Object:  Table [dbo].[FoodSupply]    Script Date: 10/06/2017 2:27:10 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[FoodSupply](
	[rowguid] [uniqueidentifier] NOT NULL,
	[intQuantity] [int] NOT NULL,
	[dteSuppliedOn] [date] NOT NULL,
	[gnuFoodUnit] [uniqueidentifier] NOT NULL 
	CONSTRAINT FK__FoodSupply__gnuFoodUnit
	REFERENCES FoodUnit(rowguid)
PRIMARY KEY CLUSTERED 
(
	[rowguid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[FoodSupply] ADD  DEFAULT ((0)) FOR [intQuantity]
GO


