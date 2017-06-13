using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Data.Context;

namespace Data.Migrations
{
    [DbContext(typeof(FoodbuddyContext))]
    [Migration("20170613080318_UpdateDateTypeColumn")]
    partial class UpdateDateTypeColumn
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Data.Entities.Consumption", b =>
                {
                    b.Property<Guid>("Rowguid")
                        .HasColumnName("rowguid");

                    b.Property<Guid>("GnuFoodUnit")
                        .HasColumnName("gnuFoodUnit");

                    b.Property<int>("IntConsumedByPersons")
                        .HasColumnName("intConsumedByPersons");

                    b.Property<int>("IntConsumptionDays")
                        .HasColumnName("intConsumptionDays");

                    b.HasKey("Rowguid")
                        .HasName("PK__Consumpt__F73921F6888FE13D");

                    b.HasIndex("GnuFoodUnit");

                    b.ToTable("Consumption");
                });

            modelBuilder.Entity("Data.Entities.FoodItem", b =>
                {
                    b.Property<Guid>("Rowguid")
                        .HasColumnName("rowguid");

                    b.Property<DateTime>("DteCreatedOn")
                        .HasColumnName("dteCreatedOn")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("DteLastUpdateOn")
                        .HasColumnName("dteLastUpdateOn")
                        .HasColumnType("datetime2");

                    b.Property<string>("TxtDescription")
                        .HasColumnName("txtDescription")
                        .HasMaxLength(200);

                    b.Property<string>("TxtName")
                        .IsRequired()
                        .HasColumnName("txtName")
                        .HasMaxLength(100);

                    b.HasKey("Rowguid")
                        .HasName("PK__FoodItem__F73921F63C1F5C4F");

                    b.ToTable("FoodItem");
                });

            modelBuilder.Entity("Data.Entities.FoodSupply", b =>
                {
                    b.Property<Guid>("Rowguid")
                        .HasColumnName("rowguid");

                    b.Property<DateTime>("DteSuppliedOn")
                        .HasColumnName("dteSuppliedOn")
                        .HasColumnType("datetime2");

                    b.Property<Guid>("GnuFoodUnit")
                        .HasColumnName("gnuFoodUnit");

                    b.Property<int>("IntQuantity")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("intQuantity")
                        .HasDefaultValueSql("0");

                    b.HasKey("Rowguid")
                        .HasName("PK__FoodSupp__F73921F6BE620893");

                    b.HasIndex("GnuFoodUnit");

                    b.ToTable("FoodSupply");
                });

            modelBuilder.Entity("Data.Entities.FoodUnit", b =>
                {
                    b.Property<Guid>("Rowguid")
                        .HasColumnName("rowguid");

                    b.Property<DateTime>("DteCreatedOn")
                        .HasColumnName("dteCreatedOn")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("DteLastUpdateOn")
                        .HasColumnName("dteLastUpdateOn")
                        .HasColumnType("datetime2");

                    b.Property<Guid>("GnuFoodItem")
                        .HasColumnName("gnuFoodItem");

                    b.Property<Guid>("GnuUnit")
                        .HasColumnName("gnuUnit");

                    b.HasKey("Rowguid")
                        .HasName("PK__FoodUnit__F73921F66AAFAF7A");

                    b.HasIndex("GnuFoodItem");

                    b.HasIndex("GnuUnit");

                    b.ToTable("FoodUnit");
                });

            modelBuilder.Entity("Data.Entities.RoleClaims", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasMaxLength(450);

                    b.HasKey("Id");

                    b.HasIndex("RoleId")
                        .HasName("IX_RoleClaims_RoleId");

                    b.ToTable("RoleClaims");
                });

            modelBuilder.Entity("Data.Entities.Roles", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(450);

                    b.Property<string>("ConcurrencyStamp");

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .HasName("RoleNameIndex");

                    b.ToTable("Roles");
                });

            modelBuilder.Entity("Data.Entities.Unit", b =>
                {
                    b.Property<Guid>("Rowguid")
                        .HasColumnName("rowguid");

                    b.Property<DateTime>("DteCreatedOn")
                        .HasColumnName("dteCreatedOn")
                        .HasColumnType("datetime2");

                    b.Property<string>("TxtDescription")
                        .HasColumnName("txtDescription")
                        .HasMaxLength(50);

                    b.Property<string>("TxtName")
                        .IsRequired()
                        .HasColumnName("txtName")
                        .HasMaxLength(50);

                    b.Property<string>("TxtShortName")
                        .HasColumnName("txtShortName")
                        .HasColumnType("varchar(20)");

                    b.HasKey("Rowguid")
                        .HasName("PK__Unit__F73921F653887E93");

                    b.ToTable("Unit");
                });

            modelBuilder.Entity("Data.Entities.UserClaims", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasMaxLength(450);

                    b.HasKey("Id");

                    b.HasIndex("UserId")
                        .HasName("IX_UserClaims_UserId");

                    b.ToTable("UserClaims");
                });

            modelBuilder.Entity("Data.Entities.UserLogins", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasMaxLength(450);

                    b.Property<string>("ProviderKey")
                        .HasMaxLength(450);

                    b.Property<string>("ProviderDisplayName");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasMaxLength(450);

                    b.HasKey("LoginProvider", "ProviderKey")
                        .HasName("PK_UserLogins");

                    b.HasIndex("UserId")
                        .HasName("IX_UserLogins_UserId");

                    b.ToTable("UserLogins");
                });

            modelBuilder.Entity("Data.Entities.UserRoles", b =>
                {
                    b.Property<string>("UserId")
                        .HasMaxLength(450);

                    b.Property<string>("RoleId")
                        .HasMaxLength(450);

                    b.HasKey("UserId", "RoleId")
                        .HasName("PK_UserRoles");

                    b.HasIndex("RoleId")
                        .HasName("IX_UserRoles_RoleId");

                    b.HasIndex("UserId")
                        .HasName("IX_UserRoles_UserId");

                    b.ToTable("UserRoles");
                });

            modelBuilder.Entity("Data.Entities.Users", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(450);

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp");

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .IsRequired()
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Data.Entities.UserTokens", b =>
                {
                    b.Property<string>("UserId")
                        .HasMaxLength(450);

                    b.Property<string>("LoginProvider")
                        .HasMaxLength(450);

                    b.Property<string>("Name")
                        .HasMaxLength(450);

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name")
                        .HasName("PK_UserTokens");

                    b.ToTable("UserTokens");
                });

            modelBuilder.Entity("Data.Entities.Consumption", b =>
                {
                    b.HasOne("Data.Entities.FoodUnit", "GnuFoodUnitNavigation")
                        .WithMany("Consumption")
                        .HasForeignKey("GnuFoodUnit");
                });

            modelBuilder.Entity("Data.Entities.FoodSupply", b =>
                {
                    b.HasOne("Data.Entities.FoodUnit", "GnuFoodUnitNavigation")
                        .WithMany("FoodSupply")
                        .HasForeignKey("GnuFoodUnit");
                });

            modelBuilder.Entity("Data.Entities.FoodUnit", b =>
                {
                    b.HasOne("Data.Entities.FoodItem", "GnuFoodItemNavigation")
                        .WithMany("FoodUnit")
                        .HasForeignKey("GnuFoodItem")
                        .HasConstraintName("FK__FoodUnit__gnuFoo__797309D9");

                    b.HasOne("Data.Entities.Unit", "GnuUnitNavigation")
                        .WithMany("FoodUnit")
                        .HasForeignKey("GnuUnit");
                });

            modelBuilder.Entity("Data.Entities.RoleClaims", b =>
                {
                    b.HasOne("Data.Entities.Roles", "Role")
                        .WithMany("RoleClaims")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Data.Entities.UserClaims", b =>
                {
                    b.HasOne("Data.Entities.Users", "User")
                        .WithMany("UserClaims")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Data.Entities.UserLogins", b =>
                {
                    b.HasOne("Data.Entities.Users", "User")
                        .WithMany("UserLogins")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Data.Entities.UserRoles", b =>
                {
                    b.HasOne("Data.Entities.Roles", "Role")
                        .WithMany("UserRoles")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Data.Entities.Users", "User")
                        .WithMany("UserRoles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
