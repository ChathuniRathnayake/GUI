   M S B A M L   `   `   `  ����G  CElevated WPF, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null+clr-namespace:Elevated_WPFElevated_WPF  5   	       Elevated_WPF.MainWindow   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   ,localclr-namespace:Elevated_WPF     5   	     � Title$  
MainWindow��5   	   $	��450��6   $	��800��6)   .��5	      � 
������� � RowDefinitions 5
   
   �� 5      $��0.75* �6   6-   �� 5      $��0.75* �6   6-   �� 5      $��3* �6   6*    � ColumnDefinitions 5   
   �� 5      $��4* �6   6,   �� 5      $��* �6   6+   .+�5   
   �� $��0��6   $��2��5      $��20(�5      $"��ElevatEd E-Learning Platform��5      $��Center=�5      $��Center=�5      
��� � �$
��Bold"�5      6(   �� 5   
   $
��Cart��6   $��1��5      $��0��5       $��20(�5!      $��Center=�5"      $
��Bold"�5#      $��Center=�5$      5&      �� 5(      $��1��6   $��1��5)      $��2��5*      .+�5+      �� -   5        $��20(�5+      $��10q�5,      $��10q�5-      $	��100��5.      $��50��5/      .��51      Add6   �� 53      -   5        $��20(�53      $��10q�54      $��10q�55      $	��100��56      $��50��57      .��59      Update6"   �� 5;      -   5        $��20(�5;      $��10q�5<      $��10q�5=      $	��100��5>      $��50��5?      .��5A      Delete6"   5B      &   System.Windows.Controls.DataGrid  5C   
   -   5          Name$ courseinfoGrid��5E      $��2��5C      $��0��5D      $��Stretch=�5F      $��Stretch=�5G      
������5H      5O      5P      