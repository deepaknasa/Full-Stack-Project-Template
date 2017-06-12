USE [Foodbuddy]
GO

/****** Object:  Table [dbo].[FoodItem]    Script Date: 10/06/2017 12:17:58 PM ******/
DROP TABLE [dbo].[FoodItem]
GO

/****** Object:  Table [dbo].[FoodItem]    Script Date: 10/06/2017 12:17:58 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[FoodItem](
	[rowguid] [uniqueidentifier] NOT NULL,
	[txtName] [nvarchar](100) NOT NULL,
	[txtDescription] [nvarchar](200) NULL,
	[dteCreatedOn] [date] NOT NULL,
	[dteLastUpdateOn] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[rowguid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Almonds', 'ABC', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Apple', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Avocado', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Basil', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Bananas', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Beans', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Butter beans', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Beetroot', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Broccoli', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Broccolini', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Brown onions', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Brussels sprouts', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Button squash', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Cabbage', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Capsicum', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Carrot', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Cauliflower', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Cavolo nero', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Celery', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Chestnut', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Chilli', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Choko', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Cucumber', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Custard apple', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Dragonfruit', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Eggplant', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Fennel', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Fig', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Fingerlime', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Kiwifruit', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Grape', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Grapefruit', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Horseradish', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Jerusalem artichoke', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Kohlrabi', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Lettuce', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Leeks', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Lemon', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Lime', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Mandarin', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Mangosteen', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Mushrooms', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Nashi', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Olives', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Okra', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Orange', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Papaw', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Papaya', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Parsnip', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Passionfruit', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Pineapple', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Peanuts', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Pear', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Pecan', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Persimmon', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Pomegranate', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Potatoes', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Prickly pear', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Pumpkin', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Quince', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Radicchio', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Radish', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Rambutan', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Rhubarb', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Rockmelon', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Sage', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Silverbeet', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Snake bean', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Snowpeas', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Spinach', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Sugar snap peas', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Sweet corn', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Sweet potato', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Tamarillo', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Tomato', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Walnuts', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Watermelon', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Wild mushrooms', 'This is a yummy fruit', GETDATE(), GETDATE())
INSERT INTO FoodItem ([rowguid], [txtName], [txtDescription], [dteCreatedOn], [dteLastUpdateOn]) VALUES(NEWID(), 'Zucchini', 'This is a yummy fruit', GETDATE(), GETDATE())