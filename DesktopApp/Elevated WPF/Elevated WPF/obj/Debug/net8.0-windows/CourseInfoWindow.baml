   M S B A M L   `   `   `  ����G  CElevated WPF, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null+clr-namespace:Elevated_WPFElevated_WPF  5   	   #    Elevated_WPF.CourseInfoWindow   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   ,localclr-namespace:Elevated_WPF     5   	     � Title$  CourseInfoWindow��5   	   $	��450��6"   $	��800��6/   .��5	      � 
������� � RowDefinitions 5
   
   �� 5      $��* �6   �� 5      $��* �6   �� 5      $��* �6   �� 5      $��* �6   �� 5      $��* �6   .+�5   
   �� $��Course Name��6   $��0��6'   $��20(�5       �� Padding$ 10q�5      $��10q�5      6"   �� 5   
   -   5         ��Name$ CourseNameTextBox��5      $��1��5      $	��500��5      $��45��5      
�������5   /   �� 5   
   $��Course Price��6   $��2��5      $��20(�5       $ 10q�5!      $��10q�5"      6"   �� 5$   
   -   5        $ PriceTextBox��5(      $��3��5$      $	��500��5%      $��45��5&      
�������5(   *   �� 5)   
   $��4��6    �� Orientation$ 
Horizontal=�5*      $��Center=�5+      .+�5-      �� -   5        $	��150��5-      $��50��5.      $��20(�5/      
�������$
��Bold"�51      
����d�$��0,0,5,0q�53      .��54   '   Save6-   �� 56      -   5        $	��150��56      $��50��57      $��20(�58      $
��Bold"�59      
�������$��5,0,0,0q�5;      .��5=      Cancel6   5>      5@      5A      