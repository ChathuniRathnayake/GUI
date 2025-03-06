using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Elevated_WPF.Migrations
{
    /// <inheritdoc />
    public partial class RenameCourseInfoToCourses : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_CourseInfo",
                table: "CourseInfo");

            migrationBuilder.RenameTable(
                name: "CourseInfo",
                newName: "Courses");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Courses",
                table: "Courses",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Courses",
                table: "Courses");

            migrationBuilder.RenameTable(
                name: "Courses",
                newName: "CourseInfo");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CourseInfo",
                table: "CourseInfo",
                column: "Id");
        }
    }
}
