using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Elevated_WPF
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private CourseInfoDbContext _db = new CourseInfoDbContext();
        public MainWindow()
        {
            InitializeComponent();
            LoadData();
        }

        private void LoadData()
        {
            courseinfoGrid.ItemsSource = _db.Courses.ToList();
        }

        private void Add_Info(object sender, RoutedEventArgs e)
        {
            CourseInfo courseinfo = new CourseInfo();

            CourseInfoWindow cWindow = new CourseInfoWindow(courseinfo);
            if (cWindow.ShowDialog() == true)
            {
                _db.Courses.Add(courseinfo);
                _db.SaveChanges();
                LoadData();
            }

        }

        private void Update_Info(object sender, RoutedEventArgs e)
        {
            if (courseinfoGrid.SelectedItem is CourseInfo c)
            {
                CourseInfo courseinfo = new CourseInfo();
                courseinfo.Id = c.Id;
                courseinfo.CourseName = c.CourseName;
                courseinfo.Price = c.Price;


                CourseInfoWindow cWindow = new CourseInfoWindow(courseinfo);
                if (cWindow.ShowDialog() == true)
                {
                    c.CourseName = courseinfo.CourseName;
                    c.Price = courseinfo.Price;
                    _db.Courses.Update(c);
                    LoadData();
                    _db.SaveChanges();
                    LoadData();
                }
            }

        }

        private void Delete_Info(object sender, RoutedEventArgs e)
        {
            if (courseinfoGrid.SelectedItem is CourseInfo c)
            {
                _db.Courses.Remove(c);
                _db.SaveChanges();
                LoadData();
            }

        }
    }
}