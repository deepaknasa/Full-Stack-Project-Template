using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Data.Migrations
{
    public partial class initialdb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FoodItem",
                columns: table => new
                {
                    rowguid = table.Column<Guid>(nullable: false),
                    dteCreatedOn = table.Column<DateTime>(type: "date", nullable: false),
                    dteLastUpdateOn = table.Column<DateTime>(type: "date", nullable: true),
                    txtDescription = table.Column<string>(maxLength: 200, nullable: true),
                    txtName = table.Column<string>(maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__FoodItem__F73921F63C1F5C4F", x => x.rowguid);
                });

            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    Id = table.Column<string>(maxLength: 450, nullable: false),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Unit",
                columns: table => new
                {
                    rowguid = table.Column<Guid>(nullable: false),
                    dteCreatedOn = table.Column<DateTime>(type: "date", nullable: false),
                    txtDescription = table.Column<string>(maxLength: 50, nullable: true),
                    txtName = table.Column<string>(maxLength: 50, nullable: false),
                    txtShortName = table.Column<string>(type: "varchar(20)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Unit__F73921F653887E93", x => x.rowguid);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<string>(maxLength: 450, nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    SecurityStamp = table.Column<string>(nullable: true),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    UserName = table.Column<string>(maxLength: 256, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(maxLength: 450, nullable: false),
                    LoginProvider = table.Column<string>(maxLength: 450, nullable: false),
                    Name = table.Column<string>(maxLength: 450, nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                });

            migrationBuilder.CreateTable(
                name: "RoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true),
                    RoleId = table.Column<string>(maxLength: 450, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RoleClaims_Roles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FoodUnit",
                columns: table => new
                {
                    rowguid = table.Column<Guid>(nullable: false),
                    dteCreatedOn = table.Column<DateTime>(type: "date", nullable: false),
                    dteLastUpdateOn = table.Column<DateTime>(type: "date", nullable: true),
                    gnuFoodItem = table.Column<Guid>(nullable: false),
                    gnuUnit = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__FoodUnit__F73921F66AAFAF7A", x => x.rowguid);
                    table.ForeignKey(
                        name: "FK__FoodUnit__gnuFoo__797309D9",
                        column: x => x.gnuFoodItem,
                        principalTable: "FoodItem",
                        principalColumn: "rowguid",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_FoodUnit_Unit_gnuUnit",
                        column: x => x.gnuUnit,
                        principalTable: "Unit",
                        principalColumn: "rowguid",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(maxLength: 450, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserClaims_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(maxLength: 450, nullable: false),
                    ProviderKey = table.Column<string>(maxLength: 450, nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(maxLength: 450, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_UserLogins_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(maxLength: 450, nullable: false),
                    RoleId = table.Column<string>(maxLength: 450, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_UserRoles_Roles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserRoles_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Consumption",
                columns: table => new
                {
                    rowguid = table.Column<Guid>(nullable: false),
                    gnuFoodUnit = table.Column<Guid>(nullable: false),
                    intConsumedByPersons = table.Column<int>(nullable: false),
                    intConsumptionDays = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Consumpt__F73921F6888FE13D", x => x.rowguid);
                    table.ForeignKey(
                        name: "FK_Consumption_FoodUnit_gnuFoodUnit",
                        column: x => x.gnuFoodUnit,
                        principalTable: "FoodUnit",
                        principalColumn: "rowguid",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "FoodSupply",
                columns: table => new
                {
                    rowguid = table.Column<Guid>(nullable: false),
                    dteSuppliedOn = table.Column<DateTime>(type: "date", nullable: false),
                    gnuFoodUnit = table.Column<Guid>(nullable: false),
                    intQuantity = table.Column<int>(nullable: false, defaultValueSql: "0")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__FoodSupp__F73921F6BE620893", x => x.rowguid);
                    table.ForeignKey(
                        name: "FK_FoodSupply_FoodUnit_gnuFoodUnit",
                        column: x => x.gnuFoodUnit,
                        principalTable: "FoodUnit",
                        principalColumn: "rowguid",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Consumption_gnuFoodUnit",
                table: "Consumption",
                column: "gnuFoodUnit");

            migrationBuilder.CreateIndex(
                name: "IX_FoodSupply_gnuFoodUnit",
                table: "FoodSupply",
                column: "gnuFoodUnit");

            migrationBuilder.CreateIndex(
                name: "IX_FoodUnit_gnuFoodItem",
                table: "FoodUnit",
                column: "gnuFoodItem");

            migrationBuilder.CreateIndex(
                name: "IX_FoodUnit_gnuUnit",
                table: "FoodUnit",
                column: "gnuUnit");

            migrationBuilder.CreateIndex(
                name: "IX_RoleClaims_RoleId",
                table: "RoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "Roles",
                column: "NormalizedName");

            migrationBuilder.CreateIndex(
                name: "IX_UserClaims_UserId",
                table: "UserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserLogins_UserId",
                table: "UserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserRoles_RoleId",
                table: "UserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_UserRoles_UserId",
                table: "UserRoles",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "Users",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "Users",
                column: "NormalizedUserName",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Consumption");

            migrationBuilder.DropTable(
                name: "FoodSupply");

            migrationBuilder.DropTable(
                name: "RoleClaims");

            migrationBuilder.DropTable(
                name: "UserClaims");

            migrationBuilder.DropTable(
                name: "UserLogins");

            migrationBuilder.DropTable(
                name: "UserRoles");

            migrationBuilder.DropTable(
                name: "UserTokens");

            migrationBuilder.DropTable(
                name: "FoodUnit");

            migrationBuilder.DropTable(
                name: "Roles");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "FoodItem");

            migrationBuilder.DropTable(
                name: "Unit");
        }
    }
}
