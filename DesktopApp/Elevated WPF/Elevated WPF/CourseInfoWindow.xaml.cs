using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace Elevated_WPF
{
    /// <summary>
    /// Interaction logic for CourseInfoWindow.xaml
    /// </summary>
    public partial class CourseInfoWindow : Window
    {
        public CourseInfo CourseInfo { get; private set; }
        public CourseInfoWindow(CourseInfo courseinfo)
        {
            InitializeComponent();
            CourseInfo = courseinfo;

            CourseNameTextBox.Text = courseinfo.CourseName;
            PriceTextBox.Text = Convert.ToDouble(courseinfo.Price).ToString();
        }

        private void Save_Info(object sender, RoutedEventArgs e)
        {
            try
            {
                CourseInfo.CourseName = CourseNameTextBox.Text;

                CourseInfo.Price = Convert.ToDouble(PriceTextBox.Text); // Convert string to double

                DialogResult = true;
                Close();
            }
            catch
            {
                MessageBox.Show("Error in input. Please enter a valid number.");
                DialogResult = false;
                Close();
            }

        }

        private void Cancel_Info(object sender, RoutedEventArgs e)
        {
            DialogResult = false;
            Close();
        }
    }
}

