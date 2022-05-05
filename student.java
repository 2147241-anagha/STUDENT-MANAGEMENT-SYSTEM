import java.util.Scanner;

class StudentDetails {

  int stu_id;

  String name, dept;

 //creating a function to take student details  

  void input() {

Scanner sc = new Scanner(System.in);  

 

System.out.print("Enter Student id: ");

stu_id = sc.nextInt();  //=> 22\n == buffer

 

sc.nextLine(); // => \n

 

System.out.print("Enter Name: ");

name = sc.nextLine();

 

System.out.print("Enter department: ");

dept = sc.nextLine();

  }

}

class Student extends StudentDetails {

  //method to display student details 

  void display() {

System.out.println("/******* Student details are ********/");

System.out.println("Roll Number is: "+stu_id);

System.out.println("Your name is: "+name);

System.out.println("Your class is: "+dept);

  }

  public static void main(String args[]) {

Student obj = new Student();

obj.input();

obj.display();

  }

}
