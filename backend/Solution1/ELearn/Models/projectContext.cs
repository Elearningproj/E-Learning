using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ELearn.Models
{
    public partial class projectContext : DbContext
    {
        public projectContext()
        {
        }

        public projectContext(DbContextOptions<projectContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Cart> Carts { get; set; } = null!;
        public virtual DbSet<Course> Courses { get; set; } = null!;
        public virtual DbSet<Discussion> Discussions { get; set; } = null!;
        public virtual DbSet<Efmigrationshistory> Efmigrationshistories { get; set; } = null!;
        public virtual DbSet<Lesson> Lessons { get; set; } = null!;
        public virtual DbSet<MyCourse> MyCourses { get; set; } = null!;
        public virtual DbSet<Question> Questions { get; set; } = null!;
        public virtual DbSet<Reply> Replies { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;database=project;uid=root;pwd=manager", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.4.2-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.ToTable("cart");

                entity.HasIndex(e => e.CourseId, "FKe8qhvp3rieyui6fxssjs4r34r");

                entity.HasIndex(e => e.UserId, "UK9emlp6m95v5er2bcqkjsw48he")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CourseId).HasColumnName("course_id");

                entity.Property(e => e.CreatedOn).HasColumnName("created_on");

                entity.Property(e => e.UpdatedOn)
                    .HasMaxLength(6)
                    .HasColumnName("updated_on");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.Carts)
                    .HasForeignKey(d => d.CourseId)
                    .HasConstraintName("FKe8qhvp3rieyui6fxssjs4r34r");

                entity.HasOne(d => d.User)
                    .WithOne(p => p.Cart)
                    .HasForeignKey<Cart>(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKg5uhi8vpsuy0lgloxk2h4w5o6");
            });

            modelBuilder.Entity<Course>(entity =>
            {
                entity.ToTable("course");

                entity.HasIndex(e => e.UserId, "FK2nmcqx8d89xeticql10qxxvdl");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CourseName)
                    .HasMaxLength(255)
                    .HasColumnName("course_name");

                entity.Property(e => e.CreatedOn).HasColumnName("created_on");

                entity.Property(e => e.Description)
                    .HasMaxLength(300)
                    .HasColumnName("description");

                entity.Property(e => e.ImageLink)
                    .HasMaxLength(255)
                    .HasColumnName("image_link");

                entity.Property(e => e.IsDeleted)
                    .HasColumnType("bit(1)")
                    .HasColumnName("is_deleted");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.UpdatedOn)
                    .HasMaxLength(6)
                    .HasColumnName("updated_on");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Courses)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK2nmcqx8d89xeticql10qxxvdl");
            });

            modelBuilder.Entity<Discussion>(entity =>
            {
                entity.ToTable("discussion");

                entity.HasIndex(e => e.CourseId, "FKdv9hrc0p26spp1wq1uox4lk7t");

                entity.HasIndex(e => e.UserId, "FKgnvbsq4tqf0ueyk7o0qbsjwfd");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Content)
                    .HasMaxLength(255)
                    .HasColumnName("content");

                entity.Property(e => e.CourseId).HasColumnName("course_id");

                entity.Property(e => e.CreatedOn).HasColumnName("created_on");

                entity.Property(e => e.UpdatedOn)
                    .HasMaxLength(6)
                    .HasColumnName("updated_on");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.Discussions)
                    .HasForeignKey(d => d.CourseId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKdv9hrc0p26spp1wq1uox4lk7t");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Discussions)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKgnvbsq4tqf0ueyk7o0qbsjwfd");
            });

            modelBuilder.Entity<Efmigrationshistory>(entity =>
            {
                entity.HasKey(e => e.MigrationId)
                    .HasName("PRIMARY");

                entity.ToTable("__efmigrationshistory");

                entity.Property(e => e.MigrationId).HasMaxLength(150);

                entity.Property(e => e.ProductVersion).HasMaxLength(32);
            });

            modelBuilder.Entity<Lesson>(entity =>
            {
                entity.ToTable("lesson");

                entity.HasIndex(e => e.CourseId, "FKjs3c7skmg8bvdddok5lc7s807");

                entity.HasIndex(e => e.AdminId, "FKk5kqyjbyuen81hhyveyjwu2u3");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AdminId).HasColumnName("admin_id");

                entity.Property(e => e.CourseId).HasColumnName("course_id");

                entity.Property(e => e.CreatedOn).HasColumnName("created_on");

                entity.Property(e => e.LessonName)
                    .HasMaxLength(255)
                    .HasColumnName("lesson_name");

                entity.Property(e => e.SourceLink)
                    .HasMaxLength(255)
                    .HasColumnName("source_link");

                entity.Property(e => e.UpdatedOn)
                    .HasMaxLength(6)
                    .HasColumnName("updated_on");

                entity.Property(e => e.VideoLink)
                    .HasMaxLength(255)
                    .HasColumnName("video_link");

                entity.HasOne(d => d.Admin)
                    .WithMany(p => p.Lessons)
                    .HasForeignKey(d => d.AdminId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKk5kqyjbyuen81hhyveyjwu2u3");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.Lessons)
                    .HasForeignKey(d => d.CourseId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKjs3c7skmg8bvdddok5lc7s807");
            });

            modelBuilder.Entity<MyCourse>(entity =>
            {
                entity.ToTable("my_course");

                entity.HasIndex(e => e.CartId, "FKe0s3990syotcaunaju0bumdy8");

                entity.HasIndex(e => e.UserId, "FKg1x81xl81gavxgheh9hugtk3c");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CartId).HasColumnName("cart_id");

                entity.Property(e => e.CreatedOn).HasColumnName("created_on");

                entity.Property(e => e.UpdatedOn)
                    .HasMaxLength(6)
                    .HasColumnName("updated_on");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Cart)
                    .WithMany(p => p.MyCourses)
                    .HasForeignKey(d => d.CartId)
                    .HasConstraintName("FKe0s3990syotcaunaju0bumdy8");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.MyCourses)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKg1x81xl81gavxgheh9hugtk3c");
            });

            modelBuilder.Entity<Question>(entity =>
            {
                entity.ToTable("question");

                entity.HasIndex(e => e.CourseId, "FKnbqlwvoi94mkynn6c3r5h8dlg");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Answer)
                    .HasMaxLength(255)
                    .HasColumnName("answer");

                entity.Property(e => e.CourseId).HasColumnName("course_id");

                entity.Property(e => e.CreatedOn).HasColumnName("created_on");

                entity.Property(e => e.Question1)
                    .HasMaxLength(255)
                    .HasColumnName("question");

                entity.Property(e => e.UpdatedOn)
                    .HasMaxLength(6)
                    .HasColumnName("updated_on");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.Questions)
                    .HasForeignKey(d => d.CourseId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKnbqlwvoi94mkynn6c3r5h8dlg");
            });

            modelBuilder.Entity<Reply>(entity =>
            {
                entity.ToTable("reply");

                entity.HasIndex(e => e.DiscussionId, "FKjlsdwpqsfbrcuuhpgeo69rvtg");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CreatedOn).HasColumnName("created_on");

                entity.Property(e => e.DiscussionId).HasColumnName("discussion_id");

                entity.Property(e => e.Text)
                    .HasMaxLength(255)
                    .HasColumnName("text");

                entity.Property(e => e.UpdatedOn)
                    .HasMaxLength(6)
                    .HasColumnName("updated_on");

                entity.HasOne(d => d.Discussion)
                    .WithMany(p => p.Replies)
                    .HasForeignKey(d => d.DiscussionId)
                    .HasConstraintName("FKjlsdwpqsfbrcuuhpgeo69rvtg");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("users");

                entity.HasIndex(e => e.Email, "UK6dotkott2kjsp8vw4d0m25fb7")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CreatedOn).HasColumnName("created_on");

                entity.Property(e => e.Dob)
                    .HasMaxLength(255)
                    .HasColumnName("dob");

                entity.Property(e => e.Email).HasColumnName("email");

                entity.Property(e => e.Gender)
                    .HasMaxLength(255)
                    .HasColumnName("gender");

                entity.Property(e => e.Password)
                    .HasMaxLength(20)
                    .HasColumnName("password");

                entity.Property(e => e.Phno)
                    .HasMaxLength(10)
                    .HasColumnName("phno");

                entity.Property(e => e.Role)
                    .HasColumnType("enum('Admin','Learner')")
                    .HasColumnName("role");

                entity.Property(e => e.UpdatedOn)
                    .HasMaxLength(6)
                    .HasColumnName("updated_on");

                entity.Property(e => e.UserName)
                    .HasMaxLength(20)
                    .HasColumnName("user_name");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
