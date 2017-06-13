using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Data.Entities;

namespace Data.Context
{
    public partial class FoodbuddyContext : DbContext
    {
        public virtual DbSet<Consumption> Consumption { get; set; }
        public virtual DbSet<FoodItem> FoodItem { get; set; }
        public virtual DbSet<FoodSupply> FoodSupply { get; set; }
        public virtual DbSet<FoodUnit> FoodUnit { get; set; }
        public virtual DbSet<RoleClaims> RoleClaims { get; set; }
        public virtual DbSet<Roles> Roles { get; set; }
        public virtual DbSet<Unit> Unit { get; set; }
        public virtual DbSet<UserClaims> UserClaims { get; set; }
        public virtual DbSet<UserLogins> UserLogins { get; set; }
        public virtual DbSet<UserRoles> UserRoles { get; set; }
        public virtual DbSet<UserTokens> UserTokens { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        public FoodbuddyContext(DbContextOptions<FoodbuddyContext> options)
    : base(options)
        { }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
        //    optionsBuilder.UseSqlServer(@"Server=.\sqlexpress;Database=Foodbuddy;Trusted_Connection=True;");
        //}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Consumption>(entity =>
            {
                entity.HasKey(e => e.Rowguid)
                    .HasName("PK__Consumpt__F73921F6888FE13D");

                entity.Property(e => e.Rowguid)
                    .HasColumnName("rowguid")
                    .ValueGeneratedNever();

                entity.Property(e => e.GnuFoodUnit).HasColumnName("gnuFoodUnit");

                entity.Property(e => e.IntConsumedByPersons).HasColumnName("intConsumedByPersons");

                entity.Property(e => e.IntConsumptionDays).HasColumnName("intConsumptionDays");

                entity.HasOne(d => d.GnuFoodUnitNavigation)
                    .WithMany(p => p.Consumption)
                    .HasForeignKey(d => d.GnuFoodUnit)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("PK_Consumption_FK_gnuFoodUnit");
            });

            modelBuilder.Entity<FoodItem>(entity =>
            {
                entity.HasKey(e => e.Rowguid)
                    .HasName("PK__FoodItem__F73921F63C1F5C4F");

                entity.Property(e => e.Rowguid)
                    .HasColumnName("rowguid")
                    .ValueGeneratedNever();

                entity.Property(e => e.DteCreatedOn)
                    .HasColumnName("dteCreatedOn")
                    .HasColumnType("datetime2");

                entity.Property(e => e.DteLastUpdateOn)
                    .HasColumnName("dteLastUpdateOn")
                    .HasColumnType("datetime2");

                entity.Property(e => e.TxtDescription)
                    .HasColumnName("txtDescription")
                    .HasMaxLength(200);

                entity.Property(e => e.TxtName)
                    .IsRequired()
                    .HasColumnName("txtName")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<FoodSupply>(entity =>
            {
                entity.HasKey(e => e.Rowguid)
                    .HasName("PK__FoodSupp__F73921F6BE620893");

                entity.Property(e => e.Rowguid)
                    .HasColumnName("rowguid")
                    .ValueGeneratedNever();

                entity.Property(e => e.DteSuppliedOn)
                    .HasColumnName("dteSuppliedOn")
                    .HasColumnType("datetime");

                entity.Property(e => e.GnuFoodUnit).HasColumnName("gnuFoodUnit");

                entity.Property(e => e.IntQuantity)
                    .HasColumnName("intQuantity")
                    .HasDefaultValueSql("0");

                entity.HasOne(d => d.GnuFoodUnitNavigation)
                    .WithMany(p => p.FoodSupply)
                    .HasForeignKey(d => d.GnuFoodUnit)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK__FoodSupply__gnuFoodUnit");
            });

            modelBuilder.Entity<FoodUnit>(entity =>
            {
                entity.HasKey(e => e.Rowguid)
                    .HasName("PK__FoodUnit__F73921F66AAFAF7A");

                entity.Property(e => e.Rowguid)
                    .HasColumnName("rowguid")
                    .ValueGeneratedNever();

                entity.Property(e => e.DteCreatedOn)
                    .HasColumnName("dteCreatedOn")
                    .HasColumnType("datetime2");

                entity.Property(e => e.DteLastUpdateOn)
                    .HasColumnName("dteLastUpdateOn")
                    .HasColumnType("datetime2");

                entity.Property(e => e.GnuFoodItem).HasColumnName("gnuFoodItem");

                entity.Property(e => e.GnuUnit).HasColumnName("gnuUnit");

                entity.HasOne(d => d.GnuFoodItemNavigation)
                    .WithMany(p => p.FoodUnit)
                    .HasForeignKey(d => d.GnuFoodItem)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK__FoodUnit__gnuFoo__797309D9");

                entity.HasOne(d => d.GnuUnitNavigation)
                    .WithMany(p => p.FoodUnit)
                    .HasForeignKey(d => d.GnuUnit)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK__FoodUnit__gnuUni__787EE5A0");
            });

            modelBuilder.Entity<RoleClaims>(entity =>
            {
                entity.HasIndex(e => e.RoleId)
                    .HasName("IX_RoleClaims_RoleId");

                entity.Property(e => e.RoleId)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.RoleClaims)
                    .HasForeignKey(d => d.RoleId);
            });

            modelBuilder.Entity<Roles>(entity =>
            {
                entity.HasIndex(e => e.NormalizedName)
                    .HasName("RoleNameIndex");

                entity.Property(e => e.Id).HasMaxLength(450);

                entity.Property(e => e.Name).HasMaxLength(256);

                entity.Property(e => e.NormalizedName).HasMaxLength(256);
            });

            modelBuilder.Entity<Unit>(entity =>
            {
                entity.HasKey(e => e.Rowguid)
                    .HasName("PK__Unit__F73921F653887E93");

                entity.Property(e => e.Rowguid)
                    .HasColumnName("rowguid")
                    .ValueGeneratedNever();

                entity.Property(e => e.DteCreatedOn)
                    .HasColumnName("dteCreatedOn")
                    .HasColumnType("datetime2");

                entity.Property(e => e.TxtDescription)
                    .HasColumnName("txtDescription")
                    .HasMaxLength(50);

                entity.Property(e => e.TxtName)
                    .IsRequired()
                    .HasColumnName("txtName")
                    .HasMaxLength(50);

                entity.Property(e => e.TxtShortName)
                    .HasColumnName("txtShortName")
                    .HasColumnType("varchar(20)");
            });

            modelBuilder.Entity<UserClaims>(entity =>
            {
                entity.HasIndex(e => e.UserId)
                    .HasName("IX_UserClaims_UserId");

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserClaims)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<UserLogins>(entity =>
            {
                entity.HasKey(e => new { e.LoginProvider, e.ProviderKey })
                    .HasName("PK_UserLogins");

                entity.HasIndex(e => e.UserId)
                    .HasName("IX_UserLogins_UserId");

                entity.Property(e => e.LoginProvider).HasMaxLength(450);

                entity.Property(e => e.ProviderKey).HasMaxLength(450);

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserLogins)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<UserRoles>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.RoleId })
                    .HasName("PK_UserRoles");

                entity.HasIndex(e => e.RoleId)
                    .HasName("IX_UserRoles_RoleId");

                entity.HasIndex(e => e.UserId)
                    .HasName("IX_UserRoles_UserId");

                entity.Property(e => e.UserId).HasMaxLength(450);

                entity.Property(e => e.RoleId).HasMaxLength(450);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.UserRoles)
                    .HasForeignKey(d => d.RoleId);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserRoles)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<UserTokens>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.LoginProvider, e.Name })
                    .HasName("PK_UserTokens");

                entity.Property(e => e.UserId).HasMaxLength(450);

                entity.Property(e => e.LoginProvider).HasMaxLength(450);

                entity.Property(e => e.Name).HasMaxLength(450);
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasIndex(e => e.NormalizedEmail)
                    .HasName("EmailIndex");

                entity.HasIndex(e => e.NormalizedUserName)
                    .HasName("UserNameIndex")
                    .IsUnique();

                entity.Property(e => e.Id).HasMaxLength(450);

                entity.Property(e => e.Email).HasMaxLength(256);

                entity.Property(e => e.NormalizedEmail).HasMaxLength(256);

                entity.Property(e => e.NormalizedUserName)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.Property(e => e.UserName).HasMaxLength(256);
            });
        }
    }
}